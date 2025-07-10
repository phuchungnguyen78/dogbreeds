import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DogService } from '../../services/dog.service';
import { CommentsService } from '../../services/comments.service';
import { AuthService } from '../../services/auth.service';
import { DogPost } from '../../models/dog.model';
import { Comment, User } from '../../models/user.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: DogPost | null = null;
  comments: Comment[] = [];
  newComment: string = '';
  currentUser: User | null = null;
  likedComments = new Set<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private commentsService: CommentsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.loadPost(postId);
      this.loadComments(postId);
    });
  }

  loadPost(postId: string) {
    this.dogService.getPostById(postId).subscribe(post => {
      this.post = post;
    });
  }

  loadComments(postId: string) {
    this.commentsService.getCommentsByPostId(postId).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  addComment() {
    if (!this.newComment.trim() || !this.currentUser || !this.post) return;

    this.commentsService.addComment(
      this.post.id,
      this.newComment,
      this.currentUser.id,
      this.currentUser.username,
      this.currentUser.avatar
    ).subscribe(comment => {
      this.comments.push(comment);
      this.newComment = '';
    });
  }

  likeComment(commentId: string) {
    this.commentsService.likeComment(commentId).subscribe(() => {
      this.likedComments.add(commentId);
      const comment = this.comments.find(c => c.id === commentId);
      if (comment) {
        comment.likes++;
      }
    });
  }

  hasLikedComment(commentId: string): boolean {
    return this.likedComments.has(commentId);
  }
}