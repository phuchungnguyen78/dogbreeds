import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DogBreedsComponent } from '../dog-breeds/dog-breeds.component';
import { LatestPostsComponent } from '../latest-posts/latest-posts.component';
import { DogService } from '../../services/dog.service';
import { DogBreed, DogPost, DogCategory } from '../../models/dog.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, DogBreedsComponent, LatestPostsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breeds: DogBreed[] = [];
  posts: DogPost[] = [];
  filteredBreeds: DogBreed[] = [];
  filteredPosts: DogPost[] = [];

  constructor(private dogService: DogService) {}

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
    if (query.trim() === '') {
      this.filteredBreeds = this.breeds;
    } else {
      this.dogService.searchBreeds(query).subscribe(breeds => {
        this.filteredBreeds = breeds;
      });
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

  categories = [
    {
      id: 'small-breeds',
      name: 'Small Breeds',
      description: 'Perfect companions for apartments',
      icon: '🐕‍🦺'
    },
    {
      id: 'large-breeds',
      name: 'Large Breeds',
      description: 'Majestic and loyal guardians',
      icon: '🐕‍🦮'
    },
    {
      id: 'working-dogs',
      name: 'Working Dogs',
      description: 'Intelligent and purpose-driven',
      icon: '🦴'
    },
    {
      id: 'family-dogs',
      name: 'Family Dogs',
      description: 'Great with children and families',
      icon: '🐾'
    },
    {
      id: 'training',
      name: 'Training Tips',
      description: 'Expert advice for dog training',
      icon: '🎾'
    },
    {
      id: 'health',
      name: 'Health & Care',
      description: 'Keep your dog healthy and happy',
      icon: '🏥'
    }
  ];
}