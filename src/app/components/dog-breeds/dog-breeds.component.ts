import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DogBreed } from '../../models/dog.model';

@Component({
  selector: 'app-dog-breeds',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dog-breeds.component.html',
  styleUrls: ['./dog-breeds.component.css']
})
export class DogBreedsComponent {
  @Input() breeds: DogBreed[] = [];
}