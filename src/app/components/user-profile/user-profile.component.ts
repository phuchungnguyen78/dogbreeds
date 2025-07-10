
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DogService } from '../../services/dog.service';
import { UserProfile } from '../../models/user.model';
import { DogPost } from '../../models/dog.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile | null = null;
  userPosts: DogPost[] = [];
  isOwnProfile = false;
  isEditing = false;
  editForm: Partial<UserProfile> = {};

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private dogService: DogService
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.loadUserProfile(userId);
      this.loadUserPosts(userId);
      
      this.authService.currentUser$.subscribe(currentUser => {
        this.isOwnProfile = currentUser?.id === userId;
      });
    }
  }

  loadUserProfile(userId: string) {
    this.dogService.getUserProfile(userId).subscribe(profile => {
      this.userProfile = profile;
      this.editForm = { ...profile };
    });
  }

  loadUserPosts(userId: string) {
    this.dogService.getUserPosts(userId).subscribe(posts => {
      this.userPosts = posts;
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing && this.userProfile) {
      this.editForm = { ...this.userProfile };
    }
  }

  saveProfile() {
    if (this.userProfile && this.editForm) {
      this.dogService.updateUserProfile(this.userProfile.id, this.editForm).subscribe(
        updatedProfile => {
          this.userProfile = updatedProfile;
          this.isEditing = false;
        }
      );
    }
  }

  onFileSelect(event: any, type: 'user' | 'dog') {
    const file = event.target.files[0];
    if (file) {
      // In a real app, you'd upload to a server
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === 'user') {
          this.editForm.userAvatar = e.target?.result as string;
        } else {
          this.editForm.dogAvatar = e.target?.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  followUser() {
    if (this.userProfile) {
      this.dogService.followUser(this.userProfile.id).subscribe(() => {
        if (this.userProfile) {
          this.userProfile.stats.followers++;
        }
      });
    }
  }
}
