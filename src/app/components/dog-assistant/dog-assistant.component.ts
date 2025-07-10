import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-assistant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-assistant.component.html',
  styleUrls: ['./dog-assistant.component.css']
})
export class DogAssistantComponent implements OnInit {
  position = { x: 100, y: 100 };
  isActive = false;
  showMessage = false;
  currentMessage = '';

  messages = [
    "Woof! Welcome to DogBreeds Hub! 🐾",
    "Need help finding the perfect breed?",
    "Don't forget to check out our latest posts!",
    "Bark if you need assistance! 🐕",
    "Every dog deserves love and care! ❤️",
    "Explore different categories to learn more!"
  ];

  ngOnInit() {
    // Only start movement and messages in browser environment
    if (typeof window !== 'undefined') {
      this.startMovement();
      this.showRandomMessage();
    }
  }

  startMovement() {
    setInterval(() => {
      this.moveRandomly();
    }, 8000);
  }

  moveRandomly() {
    // Check if running in browser environment
    if (typeof window === 'undefined') {
      return;
    }

    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;

    this.position.x = Math.random() * Math.max(0, maxX);
    this.position.y = Math.random() * Math.max(0, maxY);

    this.isActive = true;
    setTimeout(() => {
      this.isActive = false;
    }, 600);
  }

  showRandomMessage() {
    // Only show messages in browser environment
    if (typeof window === 'undefined') {
      return;
    }

    setInterval(() => {
      this.currentMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 4000);
    }, 15000);
  }
}