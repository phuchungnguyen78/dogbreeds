
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { DogBreed } from '../../models/dog.model';

@Component({
  selector: 'app-breed-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit {
  breed: DogBreed | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const breedId = params['id'];
      this.loadBreed(breedId);
    });
  }

  loadBreed(id: string) {
    this.dogService.getBreedById(id).subscribe(breed => {
      this.breed = breed;
      this.loading = false;
    });
  }
}
