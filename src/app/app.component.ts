
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DogAssistantComponent } from './components/dog-assistant/dog-assistant.component';
import { DogService } from './services/dog.service';
import { DogBreed, DogPost, DogCategory } from './models/dog.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    DogAssistantComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dog Breeds Hub';
  breeds: DogBreed[] = [];
  posts: DogPost[] = [];
  filteredBreeds: DogBreed[] = [];
  filteredPosts: DogPost[] = [];

  constructor(private dogService: DogService, private router: Router) {}

  ngOnInit() {
    this.loadBreeds();
    this.loadPosts();
  }

  loadBreeds() {
    this.dogService.getDogBreeds().subscribe(breeds => {
      this.breeds = breeds;
      this.filteredBreeds = breeds;
    });
  }

  loadPosts() {
    this.dogService.getDogPosts().subscribe(posts => {
      this.posts = posts;
      this.filteredPosts = posts;
    });
  }

  onSearchChange(query: string) {
    if (query.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }

  onCategoryChange(category: DogCategory | null) {
    if (category === null) {
      this.filteredBreeds = this.breeds;
      this.filteredPosts = this.posts;
    } else {
      this.dogService.getBreedsByCategory(category).subscribe(breeds => {
        this.filteredBreeds = breeds;
      });
      this.dogService.getPostsByCategory(category).subscribe(posts => {
        this.filteredPosts = posts;
      });
    }
  }
}
