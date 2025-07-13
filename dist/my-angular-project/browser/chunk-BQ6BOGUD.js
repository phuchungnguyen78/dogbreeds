import {
  ActivatedRoute,
  AuthService,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  DogService,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  RouterLink,
  SlicePipe,
  __spreadValues,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K5PA6ZLF.js";

// src/app/components/user-profile/user-profile.component.ts
function UserProfileComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.userProfile == null ? null : ctx_r0.userProfile.location, "");
  }
}
function UserProfileComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "a", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.userProfile == null ? null : ctx_r1.userProfile.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F310} ", ctx_r1.userProfile == null ? null : ctx_r1.userProfile.website, "");
  }
}
function UserProfileComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function UserProfileComponent_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.toggleEdit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing ? "Cancel" : "Edit Profile", " ");
  }
}
function UserProfileComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function UserProfileComponent_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.followUser());
    });
    \u0275\u0275text(1, " Follow ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "h2");
    \u0275\u0275text(2, "Edit Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 28);
    \u0275\u0275listener("ngSubmit", function UserProfileComponent_div_43_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.saveProfile());
    });
    \u0275\u0275elementStart(4, "div", 29)(5, "label", 30);
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 31);
    \u0275\u0275listener("ngModelChange", function UserProfileComponent_div_43_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.editForm.name = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 32);
    \u0275\u0275text(10, "Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 33);
    \u0275\u0275listener("ngModelChange", function UserProfileComponent_div_43_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.editForm.bio = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 29)(13, "label", 34);
    \u0275\u0275text(14, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 35);
    \u0275\u0275listener("ngModelChange", function UserProfileComponent_div_43_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r14 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r14.editForm.location = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 29)(17, "label", 36);
    \u0275\u0275text(18, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 37);
    \u0275\u0275listener("ngModelChange", function UserProfileComponent_div_43_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.editForm.website = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 38)(21, "div", 39)(22, "label");
    \u0275\u0275text(23, "User Avatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 40);
    \u0275\u0275listener("change", function UserProfileComponent_div_43_Template_input_change_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.onFileSelect($event, "user"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 39)(26, "label");
    \u0275\u0275text(27, "Dog Avatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 40);
    \u0275\u0275listener("change", function UserProfileComponent_div_43_Template_input_change_28_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.onFileSelect($event, "dog"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 41)(30, "button", 42);
    \u0275\u0275text(31, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 43);
    \u0275\u0275listener("click", function UserProfileComponent_div_43_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.toggleEdit());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r4.editForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r4.editForm.bio);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r4.editForm.location);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r4.editForm.website);
  }
}
var _c0 = (a1) => ["/post", a1];
function UserProfileComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "img", 45);
    \u0275\u0275elementStart(2, "div", 46)(3, "h3")(4, "a", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 48)(10, "span", 49);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 50);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 51);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const post_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", post_r19.image, \u0275\u0275sanitizeUrl)("alt", post_r19.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, post_r19.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r19.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(8, 8, post_r19.content, 0, 150), "...");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, post_r19.date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", post_r19.likes, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", post_r19.commentsCount, "");
  }
}
var _UserProfileComponent = class _UserProfileComponent {
  constructor(route, authService, dogService) {
    this.route = route;
    this.authService = authService;
    this.dogService = dogService;
    this.userProfile = null;
    this.userPosts = [];
    this.isOwnProfile = false;
    this.isEditing = false;
    this.editForm = {};
  }
  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get("id");
    if (userId) {
      this.loadUserProfile(userId);
      this.loadUserPosts(userId);
      this.authService.currentUser$.subscribe((currentUser) => {
        this.isOwnProfile = currentUser?.id === userId;
      });
    }
  }
  loadUserProfile(userId) {
    this.dogService.getUserProfile(userId).subscribe((profile) => {
      this.userProfile = profile;
      this.editForm = __spreadValues({}, profile);
    });
  }
  loadUserPosts(userId) {
    this.dogService.getUserPosts(userId).subscribe((posts) => {
      this.userPosts = posts;
    });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing && this.userProfile) {
      this.editForm = __spreadValues({}, this.userProfile);
    }
  }
  saveProfile() {
    if (this.userProfile && this.editForm) {
      this.dogService.updateUserProfile(this.userProfile.id, this.editForm).subscribe((updatedProfile) => {
        this.userProfile = updatedProfile;
        this.isEditing = false;
      });
    }
  }
  onFileSelect(event, type) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === "user") {
          this.editForm.userAvatar = e.target?.result;
        } else {
          this.editForm.dogAvatar = e.target?.result;
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
};
_UserProfileComponent.\u0275fac = function UserProfileComponent_Factory(t) {
  return new (t || _UserProfileComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DogService));
};
_UserProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 21, consts: [[1, "user-profile-page"], [1, "profile-header"], [1, "profile-hero"], [1, "profile-info"], [1, "avatar-section"], [1, "user-avatar", 3, "src", "alt"], [1, "dog-avatar", 3, "src", "alt"], [1, "profile-details"], [1, "username"], [1, "bio"], ["class", "location", 4, "ngIf"], ["class", "website", 4, "ngIf"], [1, "member-since"], [1, "profile-actions"], ["class", "edit-btn", 3, "click", 4, "ngIf"], ["class", "follow-btn", 3, "click", 4, "ngIf"], [1, "profile-stats"], [1, "stat"], ["class", "edit-form", 4, "ngIf"], [1, "user-posts"], [1, "posts-grid"], ["class", "post-card", 4, "ngFor", "ngForOf"], [1, "location"], [1, "website"], ["target", "_blank", 3, "href"], [1, "edit-btn", 3, "click"], [1, "follow-btn", 3, "click"], [1, "edit-form"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", 3, "ngModel", "ngModelChange"], ["for", "bio"], ["id", "bio", "name", "bio", 3, "ngModel", "ngModelChange"], ["for", "location"], ["type", "text", "id", "location", "name", "location", 3, "ngModel", "ngModelChange"], ["for", "website"], ["type", "url", "id", "website", "name", "website", 3, "ngModel", "ngModelChange"], [1, "avatar-uploads"], [1, "upload-section"], ["type", "file", "accept", "image/*", 3, "change"], [1, "form-actions"], ["type", "submit", 1, "save-btn"], ["type", "button", 1, "cancel-btn", 3, "click"], [1, "post-card"], [1, "post-image", 3, "src", "alt"], [1, "post-content"], [3, "routerLink"], [1, "post-meta"], [1, "date"], [1, "likes"], [1, "comments"]], template: function UserProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5)(6, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserProfileComponent_p_14_Template, 2, 1, "p", 10)(15, UserProfileComponent_p_15_Template, 3, 2, "p", 11);
    \u0275\u0275elementStart(16, "p", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275template(20, UserProfileComponent_button_20_Template, 2, 1, "button", 14)(21, UserProfileComponent_button_21_Template, 2, 0, "button", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Posts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 17)(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Followers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 17)(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Following");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 17)(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Likes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(43, UserProfileComponent_div_43_Template, 34, 4, "div", 18);
    \u0275\u0275elementStart(44, "div", 19)(45, "h2");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 20);
    \u0275\u0275template(48, UserProfileComponent_div_48_Template, 17, 16, "div", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx.userProfile == null ? null : ctx.userProfile.userAvatar, \u0275\u0275sanitizeUrl)("alt", ctx.userProfile == null ? null : ctx.userProfile.name);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx.userProfile == null ? null : ctx.userProfile.dogAvatar, \u0275\u0275sanitizeUrl)("alt", (ctx.userProfile == null ? null : ctx.userProfile.name) + " dog");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.userProfile == null ? null : ctx.userProfile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", ctx.userProfile == null ? null : ctx.userProfile.username, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.userProfile == null ? null : ctx.userProfile.bio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.userProfile == null ? null : ctx.userProfile.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.userProfile == null ? null : ctx.userProfile.website);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Member since ", \u0275\u0275pipeBind1(18, 19, ctx.userProfile == null ? null : ctx.userProfile.dateJoined), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isOwnProfile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isOwnProfile);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx.userProfile == null ? null : ctx.userProfile.stats == null ? null : ctx.userProfile.stats.posts) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx.userProfile == null ? null : ctx.userProfile.stats == null ? null : ctx.userProfile.stats.followers) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx.userProfile == null ? null : ctx.userProfile.stats == null ? null : ctx.userProfile.stats.following) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx.userProfile == null ? null : ctx.userProfile.stats == null ? null : ctx.userProfile.stats.likes) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isEditing);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Posts (", (ctx.userPosts == null ? null : ctx.userPosts.length) || 0, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.userPosts);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.profile-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.cover-photo[_ngcontent-%COMP%] {\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  position: relative;\n}\n.profile-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.profile-info[_ngcontent-%COMP%] {\n  padding: 0 2rem 2rem 2rem;\n  margin-top: -60px;\n  position: relative;\n}\n.avatars-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.user-avatar[_ngcontent-%COMP%], .dog-avatar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid white;\n  object-fit: cover;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.avatar-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.5rem;\n  font-weight: 600;\n  color: #666;\n}\n.file-input[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n}\n.user-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #333;\n}\n.username[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 1rem 0;\n}\n.bio[_ngcontent-%COMP%] {\n  color: #555;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.edit-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.edit-input[_ngcontent-%COMP%], .edit-textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 1rem;\n}\n.edit-textarea[_ngcontent-%COMP%] {\n  min-height: 100px;\n  resize: vertical;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.count[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333;\n}\n.label[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.follow-btn[_ngcontent-%COMP%], .message-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.follow-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n}\n.message-btn[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #333;\n  border: 2px solid #e1e5e9;\n}\n.profile-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  padding: 2rem;\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 1rem;\n}\n.post-preview[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 16/9;\n}\n.post-preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n}\n.post-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.post-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\n  color: white;\n  padding: 1rem;\n}\n.post-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1rem;\n}\n.post-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .avatars-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n  }\n  .stats[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .posts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=user-profile.component.css.map */"] });
var UserProfileComponent = _UserProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src/app/components/user-profile/user-profile.component.ts", lineNumber: 18 });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=chunk-BQ6BOGUD.js.map
