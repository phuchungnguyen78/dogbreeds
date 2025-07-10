
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, AuthResponse, LoginRequest, RegisterRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
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

  login(loginData: LoginRequest): Observable<AuthResponse> {
    // Mock login - in real app, this would call backend API
    const user = this.mockUsers.find(u => u.email === loginData.email);
    
    if (user && loginData.password === 'password') {
      const authResponse: AuthResponse = {
        user,
        token: 'mock-jwt-token'
      };
      
      this.setCurrentUser(user);
      return of(authResponse);
    } else {
      throw new Error('Invalid credentials');
    }
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
