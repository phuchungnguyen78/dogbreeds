
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DogService } from '../../services/dog.service';
import { DogBreed } from '../../models/dog.model';

@Component({
  selector: 'app-all-breeds',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './all-breeds.component.html',
  styleUrls: ['./all-breeds.component.css']
})
export class AllBreedsComponent implements OnInit {
  breeds: DogBreed[] = [];
  filteredBreeds: DogBreed[] = [];
  searchQuery = '';
  selectedSize = '';
  loading = true;

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.loadBreeds();
  }

  loadBreeds() {
    this.dogService.getDogBreeds().subscribe(breeds => {
      this.breeds = breeds;
      this.filteredBreeds = breeds;
      this.loading = false;
    });
  }

  onSearch() {
    this.filterBreeds();
  }

  onSizeFilter() {
    this.filterBreeds();
  }

  filterBreeds() {
    let filtered = this.breeds;

    if (this.searchQuery.trim()) {
      filtered = filtered.filter(breed =>
        breed.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        breed.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.selectedSize) {
      filtered = filtered.filter(breed => breed.size === this.selectedSize);
    }

    this.filteredBreeds = filtered;
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedSize = '';
    this.filteredBreeds = this.breeds;
  }
}
