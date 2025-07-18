
export interface DogBreed {
  id: string;
  name: string;
  image: string;
  description: string;
  category: DogCategory;
  temperament: string[];
  traits: string[];
  size: 'Small' | 'Medium' | 'Large';
  lifeSpan: string;
  origin: string;
  energyLevel: number;
  groomingNeeds: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  caption?: string;
  filename?: string;
}

export interface DogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  media: MediaItem[];
  category: DogCategory;
  author: Author;
  authorName: string;
  authorAvatar: string;
  date: Date;
  createdAt: Date;
  tags: string[];
  likes: number;
  comments: number;
  commentsCount: number;
  views: number;
  videoViews?: number;
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  likedBy: string[];
  sharedBy: string[];
  shares: number;
  // SEO and publishing fields
  visibility?: 'public' | 'private' | 'unlisted';
  scheduledDate?: Date;
  metaDescription?: string;
  focusKeyword?: string;
  featuredImage?: string;
  analytics?: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
  };
}

export enum DogCategory {
  BREEDS = 'breeds',
  FOOD = 'food',
  ENVIRONMENT = 'environment',
  TRAINING = 'training',
  HEALTH = 'health',
  GROOMING = 'grooming'
}
