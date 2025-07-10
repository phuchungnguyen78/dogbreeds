
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DogPost } from '../../models/dog.model';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

interface Comment {
  id: string;
  content: string;
  authorName: string;
  authorAvatar: string;
  createdAt: Date;
  likes: number;
}

@Component({
  selector: 'app-latest-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent {
  @Input() posts: DogPost[] = [];
  
  currentUser: User | null = null;
  isAuthenticated: boolean = false;
  newComments: { [postId: string]: string } = {};
  
  // Mock comments data
  private comments: { [postId: string]: Comment[] } = {
    '1': [
      {
        id: 'c1',
        content: 'Great article! Very helpful information.',
        authorName: 'John Doe',
        authorAvatar: '👨',
        createdAt: new Date('2024-01-16'),
        likes: 5
      }
    ],
    '2': [
      {
        id: 'c2',
        content: 'This helped me create a better space for my dog.',
        authorName: 'Jane Smith',
        authorAvatar: '👩',
        createdAt: new Date('2024-01-11'),
        likes: 3
      }
    ]
  };

  private likedComments: Set<string> = new Set();

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isAuthenticated = !!user;
    });
  }

  trackByPostId(index: number, post: DogPost): string {
    return post.id;
  }

  getCommentsCount(postId: string): number {
    return this.comments[postId]?.length || 0;
  }

  getPostComments(postId: string): Comment[] {
    return this.comments[postId] || [];
  }

  likeComment(commentId: string): void {
    if (this.likedComments.has(commentId)) {
      this.likedComments.delete(commentId);
    } else {
      this.likedComments.add(commentId);
    }
  }

  hasLikedComment(commentId: string): boolean {
    return this.likedComments.has(commentId);
  }

  addComment(postId: string): void {
    const content = this.newComments[postId];
    if (!content || !content.trim() || !this.currentUser) return;

    const newComment: Comment = {
      id: `c${Date.now()}`,
      content: content.trim(),
      authorName: this.currentUser.name || this.currentUser.username,
      authorAvatar: this.currentUser.avatar || '👤',
      createdAt: new Date(),
      likes: 0
    };

    if (!this.comments[postId]) {
      this.comments[postId] = [];
    }
    this.comments[postId].push(newComment);
    this.newComments[postId] = '';
  }

  showLogin(): void {
    // This would trigger the login modal
    console.log('Show login modal');
  }
}
