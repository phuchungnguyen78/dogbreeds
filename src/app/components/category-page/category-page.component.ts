
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { DogPost, DogBreed } from '../../models/dog.model';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="category-page">
      <div class="category-header">
        <h1>{{ categoryTitle }}</h1>
        <p>{{ categoryDescription }}</p>
      </div>

      <div class="category-content">
        <!-- Breeds Section -->
        <div class="content-section" *ngIf="breeds.length > 0">
          <h2>Related Dog Breeds</h2>
          <div class="breeds-grid">
            <div *ngFor="let breed of breeds" class="breed-card">
              <img [src]="breed.image" [alt]="breed.name" class="breed-image">
              <div class="breed-info">
                <h3>{{ breed.name }}</h3>
                <p>{{ breed.description | slice:0:100 }}...</p>
                <div class="breed-details">
                  <span class="size-badge">{{ breed.size }}</span>
                  <span class="origin">{{ breed.origin }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Posts Section -->
        <div class="content-section" *ngIf="posts.length > 0">
          <h2>Related Posts</h2>
          <div class="posts-grid">
            <article *ngFor="let post of posts" class="post-card">
              <div class="post-header">
                <div class="author-info">
                  <img [src]="post.author.avatar" [alt]="post.author.name" class="author-avatar">
                  <div>
                    <h4>{{ post.author.name }}</h4>
                    <time>{{ post.createdAt | date }}</time>
                  </div>
                </div>
              </div>
              <div class="post-content">
                <h3><a [routerLink]="['/post', post.id]">{{ post.title }}</a></h3>
                <p>{{ post.content | slice:0:200 }}{{ post.content.length > 200 ? '...' : '' }}</p>
                <div class="post-tags">
                  <span *ngFor="let tag of post.tags" class="tag">
                    <a [routerLink]="['/hashtag', tag]">#{{ tag }}</a>
                  </span>
                </div>
              </div>
              <div class="post-actions">
                <span class="likes">❤️ {{ post.likes }}</span>
                <span class="comments">💬 {{ post.commentsCount || 0 }}</span>
              </div>
            </article>
          </div>
        </div>

        <!-- No Content -->
        <div class="no-content" *ngIf="breeds.length === 0 && posts.length === 0">
          <h2>No content found</h2>
          <p>We're working on adding more content for this category.</p>
          <a routerLink="/" class="back-home">← Back to Home</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .category-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .category-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
    }

    .category-header h1 {
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
    }

    .content-section {
      margin-bottom: 3rem;
    }

    .content-section h2 {
      color: #333;
      border-bottom: 3px solid #667eea;
      padding-bottom: 0.5rem;
      margin-bottom: 2rem;
    }

    .breeds-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .breed-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .breed-card:hover {
      transform: translateY(-5px);
    }

    .breed-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .breed-info {
      padding: 1.5rem;
    }

    .breed-info h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }

    .breed-details {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      align-items: center;
    }

    .size-badge {
      background: #667eea;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
    }

    .origin {
      color: #666;
      font-style: italic;
    }

    .posts-grid {
      display: grid;
      gap: 1.5rem;
    }

    .post-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      padding: 1.5rem;
      transition: transform 0.3s ease;
    }

    .post-card:hover {
      transform: translateY(-2px);
    }

    .post-header {
      margin-bottom: 1rem;
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .author-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .author-info h4 {
      margin: 0;
      color: #333;
    }

    .author-info time {
      color: #666;
      font-size: 0.9rem;
    }

    .post-content h3 {
      margin-bottom: 0.5rem;
    }

    .post-content h3 a {
      color: #333;
      text-decoration: none;
    }

    .post-content h3 a:hover {
      color: #667eea;
    }

    .post-tags {
      margin: 1rem 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag a {
      background: #f0f0f0;
      color: #667eea;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .tag a:hover {
      background: #667eea;
      color: white;
    }

    .post-actions {
      display: flex;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #eee;
      color: #666;
    }

    .no-content {
      text-align: center;
      padding: 3rem;
      color: #666;
    }

    .back-home {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      background: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      transition: background 0.3s ease;
    }

    .back-home:hover {
      background: #5a6fd8;
    }

    @media (max-width: 768px) {
      .category-page {
        padding: 1rem;
      }

      .category-header h1 {
        font-size: 2rem;
      }

      .breeds-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CategoryPageComponent implements OnInit {
  category: string = '';
  categoryTitle: string = '';
  categoryDescription: string = '';
  breeds: DogBreed[] = [];
  posts: DogPost[] = [];

  categoryConfig: { [key: string]: { title: string; description: string } } = {
    'small-breeds': {
      title: 'Small Dog Breeds',
      description: 'Discover adorable small dog breeds perfect for apartments and families.'
    },
    'large-breeds': {
      title: 'Large Dog Breeds',
      description: 'Explore majestic large dog breeds known for their loyalty and strength.'
    },
    'working-dogs': {
      title: 'Working Dogs',
      description: 'Learn about intelligent working dog breeds and their special abilities.'
    },
    'family-dogs': {
      title: 'Family Dogs',
      description: 'Find the best family-friendly dog breeds for homes with children.'
    },
    'training': {
      title: 'Dog Training',
      description: 'Tips, techniques, and guides for training your beloved companion.'
    },
    'health': {
      title: 'Dog Health',
      description: 'Essential health information to keep your dog happy and healthy.'
    },
    'nutrition': {
      title: 'Dog Nutrition',
      description: 'Learn about proper nutrition and feeding for optimal dog health.'
    },
    'grooming': {
      title: 'Dog Grooming',
      description: 'Professional grooming tips and techniques for all breeds.'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.setupCategory();
      this.loadCategoryContent();
    });
  }

  setupCategory() {
    const config = this.categoryConfig[this.category];
    if (config) {
      this.categoryTitle = config.title;
      this.categoryDescription = config.description;
    } else {
      this.categoryTitle = this.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      this.categoryDescription = `Explore everything related to ${this.categoryTitle.toLowerCase()}.`;
    }
  }

  loadCategoryContent() {
    // Load breeds by category
    this.dogService.getBreedsByCategory(this.category).subscribe(breeds => {
      this.breeds = breeds;
    });

    // Load posts by category
    this.dogService.getPostsByCategory(this.category).subscribe(posts => {
      this.posts = posts;
    });
  }
}
