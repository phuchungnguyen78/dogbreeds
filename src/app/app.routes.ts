import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HashtagPageComponent } from './components/hashtag-page/hashtag-page.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommunityComponent } from './components/community/community.component';
import { AdminComponent } from './components/admin/admin.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';
import { AllBreedsComponent } from './components/all-breeds/all-breeds.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: CategoryPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'hashtag/:tag', component: HashtagPageComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'breed/:id', component: BreedDetailComponent },
  { path: 'all-breeds', component: AllBreedsComponent },
  { path: 'profile/:id', loadComponent: () => import('./components/user-profile/user-profile.component').then(m => m.UserProfileComponent) },
  { path: '**', redirectTo: '' }
];