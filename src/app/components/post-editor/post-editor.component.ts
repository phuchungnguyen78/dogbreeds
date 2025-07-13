import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { AuthService } from '../../services/auth.service';
import { DogPost, MediaItem } from '../../models/dog.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  @Input() postId?: string;
  @Input() mode: 'create' | 'edit' = 'create';
  @Output() postSaved = new EventEmitter<DogPost>();
  @Output() cancelled = new EventEmitter<void>();

  currentUser: User | null = null;
  isAdmin = false;

  post: Partial<DogPost> = {
    title: '',
    content: '',
    tags: [],
    media: [],
    status: 'draft',
    visibility: 'public',
    scheduledDate: undefined,
    metaDescription: '',
    focusKeyword: '',
    featuredImage: undefined,
    analytics: {
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0
    }
  };

  categories = [
    { id: 'training', name: 'Training' },
    { id: 'health', name: 'Health' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'behavior', name: 'Behavior' },
    { id: 'grooming', name: 'Grooming' },
    { id: 'general', name: 'General Discussion' }
  ];

  selectedCategory = '';
  tagsString = '';
  isLoading = false;
  showPreview = false;
  currentDate = new Date();
  editorToolbar = {
    bold: false,
    italic: false,
    underline: false,
    fontSize: '16px',
    fontFamily: 'Arial'
  };

  tagInput = '';
  symbolsModal = false;
  tableModal = false;

  constructor(
    private dogService: DogService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isAdmin = user?.role === 'admin';
    });

    if (this.mode === 'edit' && this.postId) {
      this.loadPost();
    }
  }

  loadPost() {
    if (!this.postId) return;

    this.isLoading = true;
    this.dogService.getPostById(this.postId).subscribe(post => {
      if (post) {
        this.post = { ...post };
        this.tagsString = post.tags?.join(', ') || '';
        this.selectedCategory = post.category || '';
      }
      this.isLoading = false;
    });
  }

  onFileSelect(event: any, type: 'image' | 'video') {
    const files = Array.from(event.target.files) as File[];

    files.forEach(file => {
      if ((type === 'image' && file.type.startsWith('image/')) ||
          (type === 'video' && file.type.startsWith('video/'))) {

        const reader = new FileReader();
        reader.onload = (e) => {
          const mediaItem: MediaItem = {
            id: Date.now().toString() + Math.random(),
            type: type,
            url: e.target?.result as string,
            caption: ''
          };

          if (!this.post.media) this.post.media = [];
          this.post.media.push(mediaItem);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  removeMedia(index: number) {
    if (this.post.media) {
      this.post.media.splice(index, 1);
    }
  }

  insertAtCursor(text: string) {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const content = this.post.content || '';

      this.post.content = content.substring(0, start) + text + content.substring(end);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + text.length, start + text.length);
      }, 0);
    }
  }

  formatText(command: string, value?: string) {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let formattedText = '';

    switch (command) {
      case 'bold':
        formattedText = `**${selectedText || 'Bold text'}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText || 'Italic text'}*`;
        break;
      case 'heading':
        formattedText = `\n## ${selectedText || 'Heading'}\n`;
        break;
      case 'link':
        const url = prompt('Enter URL:');
        if (url) {
          formattedText = `[${selectedText || 'Link text'}](${url})`;
        }
        break;
      case 'list':
        formattedText = `\n- ${selectedText || 'List item'}\n`;
        break;
    }

    if (formattedText) {
      this.insertAtCursor(formattedText);
    }
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
  }

  saveDraft() {
    this.post.status = 'draft';
    this.savePost();
  }

  publishPost() {
    this.post.status = this.isAdmin ? 'approved' : 'pending';
    this.savePost();
  }

  savePost() {
    if (!this.currentUser || !this.post.title || !this.post.content) {
      alert('Please fill in all required fields');
      return;
    }

    this.isLoading = true;

    const postData = {
      ...this.post,
      tags: this.tagsString.split(',').map(tag => tag.trim()).filter(tag => tag),
      category: this.selectedCategory,
      authorId: this.currentUser.id,
      author: {
        id: this.currentUser.id,
        name: this.currentUser.name,
        avatar: this.currentUser.avatar
      }
    };

    const request = this.mode === 'edit' && this.postId
      ? this.dogService.updatePost(this.postId, postData)
      : this.dogService.createPost(postData);

    request.subscribe(
      (savedPost: DogPost) => {
        this.isLoading = false;
        this.postSaved.emit(savedPost);
        alert(`Post ${this.mode === 'edit' ? 'updated' : 'created'} successfully!`);
      },
      (error: any) => {
        this.isLoading = false;
        alert('Error saving post. Please try again.');
      }
    );
  }

  deletePost() {
    if (!this.postId || !confirm('Are you sure you want to delete this post?')) return;

    this.dogService.deletePost(this.postId).subscribe(() => {
      alert('Post deleted successfully');
      this.cancelled.emit();
    });
  }

  cancel() {
    if (confirm('Are you sure? Any unsaved changes will be lost.')) {
      this.cancelled.emit();
    }
  }

  // Enhanced WYSIWYG Methods
  onContentChange(event: any) {
    this.post.content = event.target.innerHTML;
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';
    document.execCommand('insertText', false, text);
  }

  onKeyDown(event: KeyboardEvent) {
    // Handle keyboard shortcuts
    if (event.ctrlKey) {
      switch (event.key) {
        case 'b':
          event.preventDefault();
          this.formatText('bold');
          break;
        case 'i':
          event.preventDefault();
          this.formatText('italic');
          break;
        case 'u':
          event.preventDefault();
          this.formatText('underline');
          break;
      }
    }
  }

  applyFontFamily() {
    document.execCommand('fontName', false, this.editorToolbar.fontFamily);
  }

  applyFontSize() {
    document.execCommand('fontSize', false, this.editorToolbar.fontSize);
  }

  insertTable() {
    const rows = prompt('Number of rows:', '3');
    const cols = prompt('Number of columns:', '3');
    
    if (rows && cols) {
      let tableHTML = '<table border="1" style="border-collapse: collapse; width: 100%;">';
      for (let i = 0; i < parseInt(rows); i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < parseInt(cols); j++) {
          tableHTML += '<td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>';
        }
        tableHTML += '</tr>';
      }
      tableHTML += '</table><br>';
      this.insertHTMLAtCursor(tableHTML);
    }
  }

  insertImageFromUrl() {
    const url = prompt('Enter image URL:');
    if (url) {
      const imgHTML = `<img src="${url}" style="max-width: 100%; height: auto;" alt="Image">`;
      this.insertHTMLAtCursor(imgHTML);
    }
  }

  insertEmbed() {
    const embedCode = prompt('Enter embed code (YouTube, etc.):');
    if (embedCode) {
      this.insertHTMLAtCursor(embedCode);
    }
  }

  insertSymbol() {
    const symbols = ['©', '®', '™', '€', '£', '¥', '§', '¶', '†', '‡', '•', '…', '‰', '′', '″', '‹', '›', '«', '»', '‚', '"', '"', "'", "'"];
    const symbol = prompt('Choose a symbol:\n' + symbols.join(' '));
    if (symbol && symbols.includes(symbol)) {
      this.insertHTMLAtCursor(symbol);
    }
  }

  clearFormatting() {
    document.execCommand('removeFormat', false);
  }

  insertHTMLAtCursor(html: string) {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const div = document.createElement('div');
      div.innerHTML = html;
      const fragment = document.createDocumentFragment();
      while (div.firstChild) {
        fragment.appendChild(div.firstChild);
      }
      range.insertNode(fragment);
    }
  }

  insertInlineMedia(media: any) {
    let mediaHTML = '';
    if (media.type === 'image') {
      mediaHTML = `<img src="${media.url}" alt="${media.caption || ''}" style="max-width: 100%; height: auto; margin: 10px 0;">`;
    } else if (media.type === 'video') {
      mediaHTML = `<video src="${media.url}" controls style="max-width: 100%; height: auto; margin: 10px 0;"></video>`;
    }
    
    if (media.caption) {
      mediaHTML += `<p style="font-style: italic; text-align: center; margin: 5px 0;">${media.caption}</p>`;
    }
    
    this.insertHTMLAtCursor(mediaHTML);
  }

  editMediaCaption(index: number) {
    const newCaption = prompt('Enter caption:', this.post.media?.[index]?.caption || '');
    if (newCaption !== null && this.post.media) {
      this.post.media[index].caption = newCaption;
    }
  }

  updateMediaCaption(index: number) {
    // Auto-save caption changes
  }

  getCharacterCount(): number {
    const text = this.post.content?.replace(/<[^>]*>/g, '') || '';
    return text.length;
  }

  getWordCount(): number {
    const text = this.post.content?.replace(/<[^>]*>/g, '') || '';
    return text.split(/\s+/).filter(word => word.length > 0).length;
  }

  getReadingTime(): number {
    const wordsPerMinute = 200;
    const wordCount = this.getWordCount();
    return Math.ceil(wordCount / wordsPerMinute);
  }

  getCategoryName(categoryId: string): string {
    return this.categories.find(cat => cat.id === categoryId)?.name || '';
  }

  getTags(): string[] {
    return this.tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
  }

  addTag(event: KeyboardEvent) {
    event.preventDefault();
    if (this.tagInput.trim()) {
      const currentTags = this.getTags();
      if (!currentTags.includes(this.tagInput.trim())) {
        this.tagsString = currentTags.concat(this.tagInput.trim()).join(', ');
      }
      this.tagInput = '';
    }
  }

  removeTag(index: number) {
    const tags = this.getTags();
    tags.splice(index, 1);
    this.tagsString = tags.join(', ');
  }

  setFeaturedImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        (this.post as any).featuredImage = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeFeaturedImage() {
    (this.post as any).featuredImage = undefined;
  }

  getFormattedContent(): string {
    return this.post.content || '<p>No content yet...</p>';
  }

  openLogin() {
    window.dispatchEvent(new CustomEvent('openAuthModal', { detail: 'login' }));
  }

  onParagraphChange($event: any) {
    if($event) {
      this.formatText('heading', ($event.target as HTMLSelectElement).value)
    }
  }

  onBackgroundColourChange($event: any) {
    if ($event) {
      this.formatText('background', ($event.target as HTMLInputElement).value);
    }
  }

  onTextColourChange($event: any) {
    if ($event) {
      this.formatText('color', ($event.target as HTMLInputElement).value);
    }
  }

  onTagKeydown($event: any) {
    this.addTag($event as KeyboardEvent);
  }
}