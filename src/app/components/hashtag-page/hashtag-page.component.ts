import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { DogPost } from '../../models/dog.model';

@Component({
  selector: 'app-hashtag-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hashtag-page.component.html',
  styleUrls: ['./hashtag-page.component.css']
})
export class HashtagPageComponent implements OnInit {
  currentTag: string = '';
  hashtag: string = '';
  posts: DogPost[] = [];
  relatedHashtags: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentTag = params['tag'];
      this.hashtag = params['tag'];
      this.loadPostsByTag(this.currentTag);
    });
  }

  loadPostsByTag(tag: string) {
    this.dogService.getPostsByTag(tag).subscribe(posts => {
      this.posts = posts;
      // Extract related hashtags from posts
      this.relatedHashtags = this.extractRelatedHashtags(posts);
    });
  }

  private extractRelatedHashtags(posts: DogPost[]): string[] {
    const hashtags = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => {
        if (tag !== this.currentTag) {
          hashtags.add(tag);
        }
      });
    });
    return Array.from(hashtags).slice(0, 5); // Return first 5 related hashtags
  }
}