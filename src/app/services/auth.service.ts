import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User, AuthResponse, LoginRequest, RegisterRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Sample admin account
  private sampleAdmin: User = {
    id: 'admin-001',
    username: 'admin',
    name: 'Admin User',
    email: 'admin@doghub.com',
    avatar: '👤',
    role: 'admin',
    dateJoined: new Date('2024-01-01'),
    createdAt: new Date(),
    bio: 'DogHub Administrator',
    location: 'DogHub HQ',
    joinDate: new Date('2024-01-01'),
    postsCount: 0,
    followersCount: 0,
    followingCount: 0
  };

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Mock users for demonstration
  private mockUsers: User[] = [
    {
      id: '1',
      username: 'dogLover123',
      email: 'doglover@example.com',
      name: 'Dog Lover',
      avatar: '🐕',
      dateJoined: new Date('2023-01-15'),
      role: 'user'
    },
    {
      id: '2',
      username: 'admin',
      email: 'admin@dogbreedshub.com',
      name: 'Admin User',
      avatar: '👤',
      dateJoined: new Date('2023-01-01'),
      role: 'admin'
    }
  ];

  constructor() {
    // Check if user is logged in on service initialization
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
      }
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    // Mock login - replace with real API call
    return new Observable<AuthResponse>((observer) => {
      setTimeout(() => {
        // Check for admin credentials
        if (credentials.email === 'admin@doghub.com' && credentials.password === 'admin123') {
          const response: AuthResponse = {
            user: this.sampleAdmin,
            token: 'mock-admin-jwt-token',
            expiresIn: 3600
          };

          this.currentUserSubject.next(this.sampleAdmin);
          localStorage.setItem('currentUser', JSON.stringify(this.sampleAdmin));
          observer.next(response);
          observer.complete();
        }
        // Check for regular user credentials
        else if (credentials.email === 'test@example.com' && credentials.password === 'password') {
          const user: User = {
            id: '1',
            username: 'testuser',
            name: 'Test User',
            email: credentials.email,
            avatar: '👤',
            role: 'user',
            dateJoined: new Date(),
            createdAt: new Date(),
            bio: 'Dog lover and enthusiast',
            location: 'Dog City',
            joinDate: new Date(),
            postsCount: 5,
            followersCount: 42,
            followingCount: 18
          };

          const response: AuthResponse = {
            user,
            token: 'mock-jwt-token',
            expiresIn: 3600
          };

          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          observer.next(response);
          observer.complete();
        } else {
          observer.error(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  register(registerData: RegisterRequest): Observable<AuthResponse> {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      username: registerData.username,
      email: registerData.email,
      name: registerData.username,
      avatar: '🐶',
      dateJoined: new Date(),
      role: 'user'
    };

    this.mockUsers.push(newUser);

    const authResponse: AuthResponse = {
      user: newUser,
      token: 'mock-jwt-token'
    };

    this.setCurrentUser(newUser);
    return of(authResponse);
  }

  logout(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('authToken');
    }
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  private setCurrentUser(user: User): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('authToken', 'mock-jwt-token');
    }
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}