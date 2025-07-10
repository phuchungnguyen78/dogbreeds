
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Comment } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentsSubject = new BehaviorSubject<Comment[]>([]);
  public comments$ = this.commentsSubject.asObservable();

  private mockComments: Comment[] = [
    {
      id: '1',
      postId: '1',
      userId: '1',
      userName: 'dogLover123',
      userAvatar: '🐕',
      content: 'Great article! My Golden Retriever loves the recommended food.',
      date: new Date('2024-01-16'),
      likes: 5,
      likedBy: [],
      replies: [],
      level: 0,
      shares: 0
    },
    {
      id: '2',
      postId: '2',
      userId: '1',
      userName: 'dogLover123',
      userAvatar: '🐕',
      content: 'These tips really helped me create a safer environment for my puppy.',
      date: new Date('2024-01-11'),
      likes: 3,
      likedBy: [],
      replies: [],
      level: 0,
      shares: 0
    }
  ];

  constructor() {
    this.commentsSubject.next(this.mockComments);
  }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    const postComments = this.mockComments.filter(comment => comment.postId === postId);
    return of(postComments);
  }

  addComment(postId: string, content: string, userId: string, userName: string, userAvatar?: string): Observable<Comment> {
    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      userId,
      userName,
      userAvatar: userAvatar || '🐶',
      content,
      date: new Date(),
      likes: 0,
      likedBy: [],
      replies: [],
      level: 0,
      shares: 0
    };

    this.mockComments.push(newComment);
    this.commentsSubject.next([...this.mockComments]);
    return of(newComment);
  }

  addReply(postId: string, content: string, parentId: string, userId: string, userName: string, userAvatar?: string): Observable<Comment> {
    const parentComment = this.mockComments.find(c => c.id === parentId);
    const parentLevel = parentComment ? parentComment.level : 0;
    
    const newReply: Comment = {
      id: Date.now().toString(),
      postId,
      userId,
      userName,
      userAvatar: userAvatar || '🐶',
      content,
      date: new Date(),
      likes: 0,
      likedBy: [],
      parentId: parentId,
      replies: [],
      level: Math.min(parentLevel + 1, 2), // Max 3 levels (0, 1, 2)
      shares: 0
    };

    this.mockComments.push(newReply);
    this.commentsSubject.next([...this.mockComments]);
    return of(newReply);
  }

  likeComment(commentId: string): Observable<Comment> {
    const comment = this.mockComments.find(c => c.id === commentId);
    if (comment) {
      comment.likes++;
      this.commentsSubject.next([...this.mockComments]);
      return of(comment);
    }
    throw new Error('Comment not found');
  }
}
