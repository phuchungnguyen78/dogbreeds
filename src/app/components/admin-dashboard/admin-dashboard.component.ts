
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { AuthService } from '../../services/auth.service';
import { DogPost } from '../../models/dog.model';
import { User } from '../../models/user.model';

interface DashboardStats {
  totalPosts: number;
  totalUsers: number;
  pendingPosts: number;
  publishedPosts: number;
  totalViews: number;
  totalComments: number;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  currentUser: User | null = null;
  isAdmin = false;
  
  stats: DashboardStats = {
    totalPosts: 0,
    totalUsers: 0,
    pendingPosts: 0,
    publishedPosts: 0,
    totalViews: 0,
    totalComments: 0
  };

  activeTab = 'overview';
  
  // Posts Management
  allPosts: DogPost[] = [];
  filteredPosts: DogPost[] = [];
  postFilter = 'all';
  searchTerm = '';
  
  // Users Management
  allUsers: User[] = [];
  filteredUsers: User[] = [];
  userFilter = 'all';
  
  // Categories Management
  categories = [
    { id: '1', name: 'Training', slug: 'training', postCount: 0 },
    { id: '2', name: 'Health', slug: 'health', postCount: 0 },
    { id: '3', name: 'Nutrition', slug: 'nutrition', postCount: 0 },
    { id: '4', name: 'Behavior', slug: 'behavior', postCount: 0 },
    { id: '5', name: 'Grooming', slug: 'grooming', postCount: 0 }
  ];
  
  newCategory = { name: '', slug: '' };
  editingCategory: any = null;

  // Media Management
  mediaFiles: any[] = [];
  
  constructor(
    private dogService: DogService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isAdmin = user?.role === 'admin';
      
      if (!this.isAdmin) {
        this.router.navigate(['/']);
        return;
      }
      
      this.loadDashboardData();
    });
  }

  loadDashboardData() {
    this.loadPosts();
    this.loadUsers();
    this.calculateStats();
  }

  loadPosts() {
    this.dogService.getDogPosts().subscribe(posts => {
      this.allPosts = posts;
      this.filteredPosts = posts;
      this.filterPosts();
    });
  }

  loadUsers() {
    this.dogService.getAllUsers().subscribe(users => {
      this.allUsers = users;
      this.filteredUsers = users;
    });
  }

  calculateStats() {
    this.stats = {
      totalPosts: this.allPosts.length,
      totalUsers: this.allUsers.length,
      pendingPosts: this.allPosts.filter(p => p.status === 'pending').length,
      publishedPosts: this.allPosts.filter(p => p.status === 'approved').length,
      totalViews: this.allPosts.reduce((sum, post) => sum + (post.views || 0), 0),
      totalComments: this.allPosts.reduce((sum, post) => sum + (post.comments || 0), 0)
    };
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Posts Management
  filterPosts() {
    let filtered = this.allPosts;
    
    if (this.postFilter !== 'all') {
      filtered = filtered.filter(post => post.status === this.postFilter);
    }
    
    if (this.searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    this.filteredPosts = filtered;
  }

  approvePost(postId: string) {
    this.dogService.updatePostStatus(postId, 'approved').subscribe(() => {
      this.loadPosts();
      this.calculateStats();
    });
  }

  rejectPost(postId: string) {
    this.dogService.updatePostStatus(postId, 'rejected').subscribe(() => {
      this.loadPosts();
      this.calculateStats();
    });
  }

  editPost(postId: string) {
    this.router.navigate(['/admin/edit-post', postId]);
  }

  deletePost(postId: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.dogService.deletePost(postId).subscribe(() => {
        this.loadPosts();
        this.calculateStats();
      });
    }
  }

  createNewPost() {
    this.router.navigate(['/admin/new-post']);
  }

  // Users Management
  filterUsers() {
    let filtered = this.allUsers;
    
    if (this.userFilter !== 'all') {
      filtered = filtered.filter(user => user.role === this.userFilter);
    }
    
    this.filteredUsers = filtered;
  }

  toggleUserRole(user: User) {
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    if (confirm(`Are you sure you want to make ${user.name} ${newRole === 'admin' ? 'an admin' : 'a regular user'}?`)) {
      this.dogService.updateUserRole(user.id, newRole).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      // Implementation for user deletion
      console.log('Delete user:', userId);
    }
  }

  // Categories Management
  addCategory() {
    if (!this.newCategory.name.trim()) return;
    
    this.newCategory.slug = this.newCategory.name.toLowerCase().replace(/\s+/g, '-');
    
    const category = {
      id: Date.now().toString(),
      ...this.newCategory,
      postCount: 0
    };
    
    this.categories.push(category);
    this.newCategory = { name: '', slug: '' };
  }

  editCategory(category: any) {
    this.editingCategory = { ...category };
  }

  updateCategory() {
    if (!this.editingCategory) return;
    
    const index = this.categories.findIndex(c => c.id === this.editingCategory.id);
    if (index !== -1) {
      this.categories[index] = { ...this.editingCategory };
    }
    this.editingCategory = null;
  }

  deleteCategory(categoryId: string) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categories = this.categories.filter(c => c.id !== categoryId);
    }
  }

  cancelEdit() {
    this.editingCategory = null;
  }

  // Media Management
  onMediaUpload(event: any) {
    const files = Array.from(event.target.files) as File[];
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const mediaItem = {
          id: Date.now().toString() + Math.random(),
          name: file.name,
          type: file.type.startsWith('image/') ? 'image' : 'video',
          size: this.formatFileSize(file.size),
          url: e.target?.result as string,
          uploadDate: new Date()
        };
        this.mediaFiles.unshift(mediaItem);
      };
      reader.readAsDataURL(file);
    });
  }

  deleteMedia(mediaId: string) {
    if (confirm('Are you sure you want to delete this media file?')) {
      this.mediaFiles = this.mediaFiles.filter(m => m.id !== mediaId);
    }
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
