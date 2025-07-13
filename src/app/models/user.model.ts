
export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar?: string;
  dateJoined: Date;
  role: 'user' | 'admin';
  createdAt?: Date;
  bio?: string;
  location?: string;
  joinDate?: Date;
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
}

export interface AuthResponse {
  user: User;
  token: string;
  expiresIn?: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  date: Date;
  likes: number;
  likedBy: string[];
  parentId?: string;
  replies: Comment[];
  level: number;
  shares: number;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  name: string;
  bio?: string;
  location?: string;
  website?: string;
  userAvatar: string;
  dogAvatar: string;
  dateJoined: Date;
  role: 'user' | 'admin';
  stats: {
    posts: number;
    followers: number;
    following: number;
    likes: number;
  };
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}
