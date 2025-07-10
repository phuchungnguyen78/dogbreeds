import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DogBreed, DogPost, DogCategory } from '../models/dog.model';
import { User, UserProfile } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogBreeds: DogBreed[] = [
    {
      id: '1',
      name: 'Golden Retriever',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
      description: 'Friendly, intelligent, and devoted dogs that make excellent family pets.',
      category: DogCategory.BREEDS,
      temperament: ['Friendly', 'Intelligent', 'Devoted'],
      traits: ['Loyal', 'Active', 'Gentle'],
      size: 'Large',
      lifeSpan: '10-12 years',
      origin: 'Scotland',
      energyLevel: 4,
      groomingNeeds: 3
    },
    {
      id: '2',
      name: 'German Shepherd',
      image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400',
      description: 'Confident, courageous, and smart working dogs that are versatile.',
      category: DogCategory.BREEDS,
      temperament: ['Confident', 'Courageous', 'Smart'],
      traits: ['Protective', 'Loyal', 'Intelligent'],
      size: 'Large',
      lifeSpan: '9-13 years',
      origin: 'Germany',
      energyLevel: 5,
      groomingNeeds: 3
    },
    {
      id: '3',
      name: 'French Bulldog',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
      description: 'Adaptable, playful, and smart companions with an easygoing personality.',
      category: DogCategory.BREEDS,
      temperament: ['Adaptable', 'Playful', 'Smart'],
      traits: ['Calm', 'Sociable', 'Patient'],
      size: 'Small',
      lifeSpan: '10-12 years',
      origin: 'France',
      energyLevel: 2,
      groomingNeeds: 1
    }
  ];

  private dogPosts: DogPost[] = [
    {
      id: '1',
      title: 'Best Dog Foods for Large Breeds',
      content: 'Discover the nutritional needs of large breed dogs and the best food options available.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
      category: DogCategory.FOOD,
      author: {
        id: '1',
        name: 'Dr. Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100'
      },
      authorName: 'Dr. Sarah Wilson',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100',
      date: new Date('2024-01-15'),
      createdAt: new Date('2024-01-15'),
      tags: ['nutrition', 'large-breeds', 'health'],
      likes: 42,
      comments: 8,
      commentsCount: 8,
      status: 'approved',
      media: [],
      views: 0,
      videoViews: 0,
      likedBy: [],
      sharedBy: [],
      shares: 0
    },
    {
      id: '2',
      title: 'Creating a Dog-Friendly Environment',
      content: 'Tips for making your home and yard safe and comfortable for your furry friend.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
      category: DogCategory.ENVIRONMENT,
      author: {
        id: '2',
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
      },
      authorName: 'Mike Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      date: new Date('2024-01-10'),
      createdAt: new Date('2024-01-10'),
      tags: ['home', 'safety', 'environment'],
      likes: 28,
      comments: 5,
      commentsCount: 5,
      status: 'approved',
      media: [],
      views: 0,
      videoViews: 0,
      likedBy: [],
      sharedBy: [],
      shares: 0
    },
    {
      id: '3',
      title: 'Basic Training Commands Every Dog Should Know',
      content: 'Essential commands that will help you communicate effectively with your dog.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
      category: DogCategory.TRAINING,
      author: {
        id: '3',
        name: 'Lisa Brown',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
      },
      authorName: 'Lisa Brown',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      date: new Date('2024-01-08'),
      createdAt: new Date('2024-01-08'),
      tags: ['training', 'commands', 'behavior'],
      likes: 35,
      comments: 12,
      commentsCount: 12,
      status: 'approved',
      media: [],
      views: 0,
      videoViews: 0,
      likedBy: [],
      sharedBy: [],
      shares: 0
    }
  ];

  private mockUsers: User[] = [
    {
      id: '1',
      username: 'admin',
      email: 'admin@dogbreedshub.com',
      name: 'Admin User',
      avatar: '👤',
      dateJoined: new Date('2023-01-01'),
      role: 'admin'
    },
    {
      id: '2',
      username: 'dogLover123',
      email: 'doglover@example.com',
      name: 'Dog Lover',
      avatar: '🐕',
      dateJoined: new Date('2023-01-15'),
      role: 'user'
    }
  ];

  constructor() { }

  getDogBreeds(): Observable<DogBreed[]> {
    return of(this.dogBreeds);
  }

  getDogPosts(): Observable<DogPost[]> {
    return of(this.dogPosts.sort((a, b) => b.date.getTime() - a.date.getTime()));
  }

  searchBreeds(query: string): Observable<DogBreed[]> {
    const filtered = this.dogBreeds.filter(breed =>
      breed.name.toLowerCase().includes(query.toLowerCase()) ||
      breed.description.toLowerCase().includes(query.toLowerCase()) ||
      breed.temperament.some(trait => trait.toLowerCase().includes(query.toLowerCase()))
    );
    return of(filtered);
  }

  getBreedById(id: string): Observable<DogBreed | null> {
    const breed = this.dogBreeds.find(b => b.id === id);
    return of(breed || null);
  }

  getPostById(id: string): Observable<DogPost | null> {
    const post = this.dogPosts.find(p => p.id === id);
    return of(post || null);
  }

  getPostsByTag(tag: string): Observable<DogPost[]> {
    const filtered = this.dogPosts.filter(post => 
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    );
    return of(filtered.sort((a, b) => b.date.getTime() - a.date.getTime()));
  }

  searchPosts(query: string): Observable<DogPost[]> {
    const filtered = this.dogPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
      post.author.name.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered.sort((a, b) => b.date.getTime() - a.date.getTime()));
  }

  // Mock admin methods
  updatePostStatus(postId: string, status: string): Observable<DogPost> {
    const post = this.dogPosts.find(p => p.id === postId);
    if (post) {
      post.status = status as 'pending' | 'approved' | 'rejected';
    }
    return of(post!);
  }

  getAllUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }

  createPost(postData: any): Observable<DogPost> {
    const newPost: DogPost = {
      id: Date.now().toString(),
      title: postData.title,
      content: postData.content,
      image: postData.image || '',
      media: postData.media || [],
      category: DogCategory.BREEDS,
      author: {
        id: postData.authorId,
        name: 'Admin User',
        avatar: '👨‍💼'
      },
      authorName: 'Admin User',
      authorAvatar: '👨‍💼',
      date: new Date(),
      createdAt: new Date(),
      tags: postData.tags || [],
      likes: 0,
      comments: 0,
      commentsCount: 0,
      views: 0,
      videoViews: 0,
      status: postData.status || 'approved',
      likedBy: [],
      sharedBy: [],
      shares: 0
    };

    this.dogPosts.unshift(newPost);
    return of(newPost);
  }

  deletePost(postId: string): Observable<boolean> {
    const postIndex = this.dogPosts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      this.dogPosts.splice(postIndex, 1);
      return of(true);
    }
    return of(false);
  }

  updateUserRole(userId: string, role: string): Observable<User> {
    const userIndex = this.mockUsers.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      this.mockUsers[userIndex].role = role as 'user' | 'admin';
      return of(this.mockUsers[userIndex]);
    }
    return of(this.mockUsers[0]); // Return default user instead of false
  }

  // New methods for enhanced features
  likePost(postId: string, userId: string): Observable<DogPost> {
    const post = this.dogPosts.find(p => p.id === postId);
    if (post) {
      const likedIndex = post.likedBy.indexOf(userId);
      if (likedIndex > -1) {
        post.likedBy.splice(likedIndex, 1);
        post.likes--;
      } else {
        post.likedBy.push(userId);
        post.likes++;
      }
    }
    return of(post!);
  }

  sharePost(postId: string, userId: string): Observable<DogPost> {
    const post = this.dogPosts.find(p => p.id === postId);
    if (post) {
      if (!post.sharedBy.includes(userId)) {
        post.sharedBy.push(userId);
        post.shares++;
      }
    }
    return of(post!);
  }

  trackVideoView(postId: string): Observable<DogPost> {
    const post = this.dogPosts.find(p => p.id === postId);
    if (post) {
      post.videoViews = (post.videoViews || 0) + 1;
      post.views++;
    }
    return of(post!);
  }

  getUserProfile(userId: string): Observable<UserProfile> {
    const mockProfile: UserProfile = {
      id: userId,
      username: 'dogLover123',
      email: 'doglover@example.com',
      name: 'Dog Lover',
      bio: '🐕 Passionate dog owner and trainer. Love sharing tips and stories about our furry friends!',
      location: 'San Francisco, CA',
      website: 'https://mydogblog.com',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      dogAvatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=150&h=150&fit=crop',
      dateJoined: new Date('2023-01-15'),
      role: 'user',
      stats: {
        posts: 24,
        followers: 156,
        following: 89,
        likes: 542
      },
      socialLinks: {
        instagram: '@mydoglife',
        twitter: '@doglover123'
      }
    };
    return of(mockProfile);
  }

  getUserPosts(userId: string): Observable<DogPost[]> {
    const userPosts = this.dogPosts.filter(post => post.author.id === userId);
    return of(userPosts);
  }

  updateUserProfile(userId: string, updates: Partial<UserProfile>): Observable<UserProfile> {
    // In a real app, this would update the backend
    const updatedProfile = { ...updates } as UserProfile;
    return of(updatedProfile);
  }

  followUser(userId: string): Observable<boolean> {
    // Mock follow functionality
    return of(true);
  }

  // Community methods
  getCommunityPosts(): Observable<DogPost[]> {
    return of(this.dogPosts.sort((a, b) => b.date.getTime() - a.date.getTime()));
  }

  submitCommunityPost(postData: any): Observable<DogPost> {
    const newPost: DogPost = {
      id: Date.now().toString(),
      title: postData.title,
      content: postData.content,
      image: postData.image || '',
      category: DogCategory.TRAINING,
      author: {
        id: postData.authorId,
        name: 'Community User',
        avatar: '🐕'
      },
      authorName: 'Community User',
      authorAvatar: '🐕',
      date: new Date(),
      createdAt: new Date(),
      tags: postData.tags || [],
      likes: 0,
      comments: 0,
      commentsCount: 0,
      status: postData.status || 'pending',
      media: postData.media || [],
      views: 0,
      videoViews: 0,
      likedBy: [],
      sharedBy: [],
      shares: 0
    };
    this.dogPosts.unshift(newPost);
    return of(newPost);
  }

  // Category methods with proper string handling
  getBreedsByCategory(category: string | DogCategory): Observable<DogBreed[]> {
    // Handle both string and enum parameters
    let targetCategory: DogCategory;

    if (typeof category === 'string') {
      const categoryMap: { [key: string]: DogCategory } = {
        'breeds': DogCategory.BREEDS,
        'food': DogCategory.FOOD,
        'environment': DogCategory.ENVIRONMENT,
        'training': DogCategory.TRAINING,
        'health': DogCategory.HEALTH,
        'grooming': DogCategory.GROOMING
      };
      targetCategory = categoryMap[category];
      if (!targetCategory) {
        return of([]);
      }
    } else {
      targetCategory = category;
    }

    const filtered = this.dogBreeds.filter(breed => breed.category === targetCategory);
    return of(filtered);
  }

  getPostsByCategory(category: string | DogCategory): Observable<DogPost[]> {
    // Handle both string and enum parameters
    let targetCategory: DogCategory;

    if (typeof category === 'string') {
      const categoryMap: { [key: string]: DogCategory } = {
        'breeds': DogCategory.BREEDS,
        'food': DogCategory.FOOD,
        'environment': DogCategory.ENVIRONMENT,
        'training': DogCategory.TRAINING,
        'health': DogCategory.HEALTH,
        'grooming': DogCategory.GROOMING
      };
      targetCategory = categoryMap[category];
      if (!targetCategory) {
        return of([]);
      }
    } else {
      targetCategory = category;
    }

    const filtered = this.dogPosts.filter(post => post.category === targetCategory);
    return of(filtered.sort((a, b) => b.date.getTime() - a.date.getTime()));
  }
}