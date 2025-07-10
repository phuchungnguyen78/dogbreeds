import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { AuthService } from '../../services/auth.service';
import { DogPost } from '../../models/dog.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentUser: User | null = null;
  isAdmin: boolean = false;
  activeTab: string = 'pending';

  totalPosts: DogPost[] = [];
  pendingPosts: DogPost[] = [];
  approvedPosts: DogPost[] = [];
  users: User[] = [];
  totalUsers: number = 0;

  showCreatePost: boolean = false;
  newPost = {
    title: '',
    content: '',
    tagsString: '',
    image: ''
  };

  tabs = [
    { id: 'pending', label: 'Pending Posts' },
    { id: 'posts', label: 'All Posts' },
    { id: 'users', label: 'Users' }
  ];

  constructor(
    private dogService: DogService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe((user: User | null) => {
      this.currentUser = user;
      this.isAdmin = user?.role === 'admin' || false;

      if (this.isAdmin) {
        this.loadAdminData();
      }
    });
  }

  loadAdminData() {
    this.dogService.getDogPosts().subscribe((posts: DogPost[]) => {
      this.totalPosts = posts;
      this.pendingPosts = posts.filter((p: DogPost) => p.status === 'pending');
      this.approvedPosts = posts.filter((p: DogPost) => p.status === 'approved');
    });

    this.dogService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
      this.totalUsers = users.length;
    });
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  approvePost(postId: string) {
    this.dogService.updatePostStatus(postId, 'approved').subscribe(() => {
      this.loadAdminData();
    });
  }

  rejectPost(postId: string) {
    this.dogService.updatePostStatus(postId, 'rejected').subscribe(() => {
      this.loadAdminData();
    });
  }

  createNewPost() {
    if (!this.newPost.title || !this.newPost.content) return;

    const tags = this.newPost.tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);

    const postData = {
      title: this.newPost.title,
      content: this.newPost.content,
      tags: tags,
      image: this.newPost.image,
      authorId: this.currentUser?.id || '',
      status: 'approved'
    };

    this.dogService.createPost(postData).subscribe(() => {
      this.loadAdminData();
      this.showCreatePost = false;
      this.newPost = { title: '', content: '', tagsString: '', image: '' };
    });
  }

  editPost(post: DogPost) {
    // Implement edit functionality
    console.log('Edit post:', post);
  }

  deletePost(postId: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.dogService.deletePost(postId).subscribe(() => {
        this.loadAdminData();
      });
    }
  }

  toggleUserRole(user: User) {
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    this.dogService.updateUserRole(user.id, newRole).subscribe(() => {
      this.loadAdminData();
    });
  }
}