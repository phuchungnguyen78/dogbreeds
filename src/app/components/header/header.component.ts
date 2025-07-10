import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DogCategory } from '../../models/dog.model';
import { AuthService } from '../../services/auth.service';
import { AuthModalComponent } from '../auth/auth-modal.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, AuthModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<DogCategory | null>();

  searchQuery = '';
  selectedCategory: DogCategory | null = null;
  isMobileMenuOpen = false;
  isAuthModalOpen = false;
  currentUser: User | null = null;
  mobileMenuOpen: boolean = false;

  categories = [
    { label: 'All', value: null },
    { label: 'Breeds', value: DogCategory.BREEDS },
    { label: 'Food', value: DogCategory.FOOD },
    { label: 'Environment', value: DogCategory.ENVIRONMENT },
    { label: 'Training', value: DogCategory.TRAINING },
    { label: 'Health', value: DogCategory.HEALTH },
    { label: 'Grooming', value: DogCategory.GROOMING }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  onSearch() {
    this.searchChange.emit(this.searchQuery);
  }

  onCategorySelect(category: DogCategory | null) {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.mobileMenuOpen = false;
  }

  openAuthModal(mode: 'login' | 'register') {
    this.isAuthModalOpen = true;
    this.closeMobileMenu();
  }

  closeAuthModal() {
    this.isAuthModalOpen = false;
  }

  logout() {
    this.authService.logout();
    this.closeMobileMenu();
  }

    onSearchSubmit() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

  showLoginModal() {
    // Implement login modal
    this.mobileMenuOpen = false;
  }

  showRegisterModal() {
    // Implement register modal
    this.mobileMenuOpen = false;
  }
}