
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { DogPost, DogBreed } from '../../models/dog.model';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="search-page">
      <div class="search-header">
        <h1>Search Results</h1>
        <p *ngIf="searchQuery">Showing results for: <strong>"{{ searchQuery }}"</strong></p>
      </div>

      <div class="search-results">
        <!-- Breeds Results -->
        <div class="results-section" *ngIf="breeds.length > 0">
          <h2>Dog Breeds ({{ breeds.length }})</h2>
          <div class="breeds-grid">
            <div *ngFor="let breed of breeds" class="breed-card">
              <img [src]="breed.image" [alt]="breed.name" class="breed-image">
              <div class="breed-info">
                <h3>{{ breed.name }}</h3>
                <p>{{ breed.description }}</p>
                <span class="size-badge">{{ breed.size }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Posts Results -->
        <div class="results-section" *ngIf="posts.length > 0">
          <h2>Posts ({{ posts.length }})</h2>
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

        <!-- No Results -->
        <div class="no-results" *ngIf="breeds.length === 0 && posts.length === 0 && searchQuery">
          <h2>No results found</h2>
          <p>Try searching with different keywords or browse our categories.</p>
          <a routerLink="/" class="back-home">← Back to Home</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .search-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .search-header h1 {
      color: #333;
      margin-bottom: 0.5rem;
    }

    .results-section {
      margin-bottom: 3rem;
    }

    .results-section h2 {
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

    .size-badge {
      background: #667eea;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
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

    .no-results {
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
      .search-page {
        padding: 1rem;
      }

      .breeds-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SearchPageComponent implements OnInit {
  searchQuery: string = '';
  breeds: DogBreed[] = [];
  posts: DogPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      if (this.searchQuery) {
        this.performSearch();
      }
    });
  }

  performSearch() {
    this.dogService.searchBreeds(this.searchQuery).subscribe((breeds: DogBreed[]) => {
      this.breeds = breeds;
    });

    this.dogService.searchPosts(this.searchQuery).subscribe((posts: DogPost[]) => {
      this.posts = posts;
    });
  }
}
