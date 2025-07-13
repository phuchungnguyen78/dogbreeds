import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { AuthService } from '../../services/auth.service';
import { CommentsService } from '../../services/comments.service';
import { DogPost, MediaItem } from '../../models/dog.model';
import { User, Comment } from '../../models/user.model';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  currentUser: User | null = null;
  communityPosts: DogPost[] = [];
  filteredPosts: DogPost[] = [];
  selectedStatus: string = 'approved';
  showCreatePost = false;
  currentSlides: { [postId: string]: number } = {};
  expandedPosts: { [postId: string]: boolean } = {};
  showComments: { [postId: string]: boolean } = {};
  showMoreOptions: { [postId: string]: boolean } = {};
  showTools = false;
  currentPostIndex = 0;
  scrollTimeout: any;

  newPost = {
    title: '',
    content: '',
    tagsString: '',
    media: [] as MediaItem[]
  };

  postComments: { [postId: string]: Comment[] } = {};
  newComments: { [postId: string]: string } = {};
  replyingTo: { [commentId: string]: boolean } = {};
  replyTexts: { [commentId: string]: string } = {};

  statusFilters = [
    { value: 'approved', label: 'Approved Posts' },
    { value: 'all', label: 'All Posts' },
    { value: 'pending', label: 'Pending Review' }
  ];

  constructor(
    private dogService: DogService,
    private authService: AuthService,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe((user: User | null) => {
      this.currentUser = user;
    });

    this.loadCommunityPosts();
  }

  loadCommunityPosts() {
    this.dogService.getCommunityPosts().subscribe((posts: DogPost[]) => {
      this.communityPosts = posts;
      this.filterByStatus(this.selectedStatus);

      // Load comments for each post
      posts.forEach(post => {
        this.loadPostComments(post.id);
      });
    });
  }

  loadPostComments(postId: string) {
    this.commentsService.getCommentsByPostId(postId).subscribe(comments => {
      this.postComments[postId] = this.organizeComments(comments);
    });
  }

  organizeComments(comments: Comment[]): Comment[] {
    const commentMap = new Map<string, Comment>();
    const rootComments: Comment[] = [];

    // First pass: create map and initialize replies
    comments.forEach(comment => {
      comment.replies = [];
      commentMap.set(comment.id, comment);
    });

    // Second pass: organize hierarchy
    comments.forEach(comment => {
      if (comment.parentId && commentMap.has(comment.parentId)) {
        const parent = commentMap.get(comment.parentId)!;
        if (parent.level < 2) { // Max 3 levels (0, 1, 2)
          comment.level = parent.level + 1;
          parent.replies.push(comment);
        }
      } else {
        comment.level = 0;
        rootComments.push(comment);
      }
    });

    return rootComments;
  }

  filterByStatus(status: string) {
    this.selectedStatus = status;
    if (status === 'all') {
      this.filteredPosts = this.communityPosts;
    } else {
      this.filteredPosts = this.communityPosts.filter((post: DogPost) => post.status === status);
    }
  }

  onMediaSelect(event: any) {
    const files = Array.from(event.target.files) as File[];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const mediaItem: MediaItem = {
          id: Date.now().toString() + Math.random(),
          type: file.type.startsWith('video/') ? 'video' : 'image',
          url: e.target?.result as string,
          caption: ''
        };
        this.newPost.media.push(mediaItem);
      };
      reader.readAsDataURL(file);
    });
  }

  removeMedia(index: number) {
    this.newPost.media.splice(index, 1);
  }

  submitPost() {
    if (!this.currentUser || !this.newPost.title || !this.newPost.content) return;

    const tags = this.newPost.tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);

    const postData = {
      title: this.newPost.title,
      content: this.newPost.content,
      tags: tags,
      media: this.newPost.media,
      authorId: this.currentUser.id,
      status: 'pending'
    };

    this.dogService.submitCommunityPost(postData).subscribe((post: DogPost) => {
      this.communityPosts.unshift(post);
      this.filterByStatus(this.selectedStatus);

      // Reset form
      this.newPost = {
        title: '',
        content: '',
        tagsString: '',
        media: []
      };
      this.showCreatePost = false;

      alert('Your post has been submitted for review!');
    });
  }

  likePost(post: DogPost) {
    if (!this.currentUser) return;

    this.dogService.likePost(post.id, this.currentUser.id).subscribe((updatedPost: DogPost) => {
      const index = this.filteredPosts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.filteredPosts[index] = updatedPost;
      }
    });
  }

  sharePost(post: DogPost) {
    if (!this.currentUser) return;

    this.dogService.sharePost(post.id, this.currentUser.id).subscribe(() => {
      post.shares++;
      navigator.share?.({
        title: post.title,
        text: post.content,
        url: window.location.origin + '/post/' + post.id
      }).catch(() => {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.origin + '/post/' + post.id);
        alert('Link copied to clipboard!');
      });
    });
  }

  addComment(postId: string) {
    const content = this.newComments[postId];
    if (!content || !content.trim() || !this.currentUser) return;

    this.commentsService.addComment(postId, content, this.currentUser.id, this.currentUser.name, this.currentUser.avatar)
      .subscribe(comment => {
        if (!this.postComments[postId]) {
          this.postComments[postId] = [];
        }
        this.postComments[postId].push(comment);
        this.newComments[postId] = '';
      });
  }

  addReply(parentCommentId: string, postId: string) {
    const content = this.replyTexts[parentCommentId];
    if (!content || !content.trim() || !this.currentUser) return;

    this.commentsService.addReply(postId, content, parentCommentId, this.currentUser.id, this.currentUser.name, this.currentUser.avatar)
      .subscribe(reply => {
        // Reload comments to get updated hierarchy
        this.loadPostComments(postId);
        this.replyTexts[parentCommentId] = '';
        this.replyingTo[parentCommentId] = false;
      });
  }

  likeComment(comment: Comment) {
    if (!this.currentUser) return;

    this.commentsService.likeComment(comment.id).subscribe(updatedComment => {
      Object.assign(comment, updatedComment);
    });
  }

  trackVideoView(post: DogPost) {
    this.dogService.trackVideoView(post.id).subscribe(() => {
      post.videoViews = (post.videoViews || 0) + 1;
    });
  }

  isPostLiked(post: DogPost): boolean {
    return this.currentUser ? post.likedBy.includes(this.currentUser.id) : false;
  }

  isCommentLiked(comment: Comment): boolean {
    return this.currentUser ? comment.likedBy.includes(this.currentUser.id) : false;
  }

  toggleReply(commentId: string) {
    this.replyingTo[commentId] = !this.replyingTo[commentId];
  }

  getMediaIcon(type: string): string {
    return type === 'video' ? '🎥' : '📷';
  }

  // TikTok-style functionality
  nextSlide(postId: string, totalSlides: number) {
    if (!this.currentSlides[postId]) this.currentSlides[postId] = 0;
    if (this.currentSlides[postId] < totalSlides - 1) {
      this.currentSlides[postId]++;
    }
  }

  previousSlide(postId: string) {
    if (!this.currentSlides[postId]) this.currentSlides[postId] = 0;
    if (this.currentSlides[postId] > 0) {
      this.currentSlides[postId]--;
    }
  }

  toggleExpanded(postId: string) {
    this.expandedPosts[postId] = !this.expandedPosts[postId];
  }

  toggleComments(postId: string) {
    this.showComments[postId] = !this.showComments[postId];
  }

  closeCommentsOverlay(event: Event, postId: string) {
    if (event.target === event.currentTarget) {
      this.showComments[postId] = false;
    }
  }

  toggleMoreOptions(postId: string) {
    this.showMoreOptions[postId] = !this.showMoreOptions[postId];
  }

  openLogin() {
    // This will be handled by the header component
    window.dispatchEvent(new CustomEvent('openAuthModal', { detail: 'login' }));
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    
    // Calculate which post is currently in view
    const postHeight = containerHeight; // Assuming full height posts
    this.currentPostIndex = Math.round(scrollTop / postHeight);
    
    // Show tools when scrolling stops
    this.showTools = true;
    
    // Hide tools while scrolling
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.showTools = true;
    }, 150);
  }

  copyPostLink(post: DogPost) {
    const url = window.location.origin + '/post/' + post.id;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
    this.showMoreOptions[post.id] = false;
  }

  reportPost(post: DogPost) {
    if (confirm('Report this post for inappropriate content?')) {
      // In a real app, send to moderation system
      alert('Post reported. Thank you for keeping our community safe.');
    }
    this.showMoreOptions[post.id] = false;
  }

  editPost(post: DogPost) {
    window.open(`/edit-post/${post.id}`, '_blank');
    this.showMoreOptions[post.id] = false;
  }

  deletePost(post: DogPost) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.dogService.deletePost(post.id).subscribe(() => {
        this.filteredPosts = this.filteredPosts.filter(p => p.id !== post.id);
        alert('Post deleted successfully');
      });
    }
    this.showMoreOptions[post.id] = false;
  }
}