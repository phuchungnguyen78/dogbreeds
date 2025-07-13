import './polyfills.server.mjs';
import {
  provideServerRendering
} from "./chunk-CASWMAOW.mjs";
import {
  AuthService,
  DefaultValueAccessor,
  DogCategory,
  DogService,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-7XKT5CNS.mjs";
import {
  ActivatedRoute,
  BehaviorSubject,
  CommonModule,
  DatePipe,
  EventEmitter,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  SlicePipe,
  TitleCasePipe,
  bootstrapApplication,
  mergeApplicationConfig,
  of,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HEBEAKTN.mjs";

// src/app/components/auth/auth-modal.component.ts
function AuthModalComponent_div_0_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9, 10);
    \u0275\u0275listener("ngSubmit", function AuthModalComponent_div_0_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onLogin());
    });
    \u0275\u0275elementStart(2, "div", 11)(3, "label", 12);
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 13);
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_0_form_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.loginData.email = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "label", 14);
    \u0275\u0275text(8, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_0_form_8_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.loginData.password = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275text(11, " Login ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const _r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.loginData.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.loginData.password);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !_r3.valid);
  }
}
function AuthModalComponent_div_0_form_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9, 17);
    \u0275\u0275listener("ngSubmit", function AuthModalComponent_div_0_form_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.onRegister());
    });
    \u0275\u0275elementStart(2, "div", 11)(3, "label", 18);
    \u0275\u0275text(4, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 19);
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_0_form_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r11 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r11.registerData.username = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "label", 20);
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 21);
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_0_form_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r12 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r12.registerData.email = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "label", 22);
    \u0275\u0275text(12, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 23);
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_0_form_9_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r13 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r13.registerData.password = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "label", 24);
    \u0275\u0275text(16, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 25);
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_0_form_9_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r14 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r14.registerData.confirmPassword = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 16);
    \u0275\u0275text(19, " Register ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const _r8 = \u0275\u0275reference(1);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.registerData.username);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.registerData.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.registerData.password);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.registerData.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !_r8.valid || ctx_r2.registerData.password !== ctx_r2.registerData.confirmPassword);
  }
}
function AuthModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function AuthModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function AuthModalComponent_div_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function AuthModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275template(8, AuthModalComponent_div_0_form_8_Template, 12, 3, "form", 6)(9, AuthModalComponent_div_0_form_9_Template, 20, 5, "form", 6);
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function AuthModalComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.toggleMode());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.isLoginMode ? "Login" : "Register");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoginMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoginMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoginMode ? "Need an account? Register" : "Already have an account? Login", " ");
  }
}
var _AuthModalComponent = class _AuthModalComponent {
  constructor(authService) {
    this.authService = authService;
    this.isOpen = false;
    this.close = new EventEmitter();
    this.isLoginMode = true;
    this.loginData = {
      email: "",
      password: ""
    };
    this.registerData = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  closeModal() {
    this.close.emit();
  }
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log("Login successful", response);
        this.closeModal();
      },
      error: (error) => {
        console.error("Login failed", error);
        alert("Login failed. Please check your credentials.");
      }
    });
  }
  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log("Registration successful", response);
        this.closeModal();
      },
      error: (error) => {
        console.error("Registration failed", error);
        alert("Registration failed. Please try again.");
      }
    });
  }
};
_AuthModalComponent.\u0275fac = function AuthModalComponent_Factory(t) {
  return new (t || _AuthModalComponent)(\u0275\u0275directiveInject(AuthService));
};
_AuthModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthModalComponent, selectors: [["app-auth-modal"]], inputs: { isOpen: "isOpen" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [3, "ngSubmit", 4, "ngIf"], [1, "form-footer"], [1, "link-btn", 3, "click"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["registerForm", "ngForm"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "reg-email"], ["type", "email", "id", "reg-email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "reg-password"], ["type", "password", "id", "reg-password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "confirm-password"], ["type", "password", "id", "confirm-password", "name", "confirmPassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function AuthModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AuthModalComponent_div_0_Template, 13, 4, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.isOpen);
  }
}, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 2rem;\n  cursor: pointer;\n  color: #999;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #333;\n  font-weight: 500;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: border-color 0.3s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  text-align: center;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #667eea;\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=auth-modal.component.css.map */"] });
var AuthModalComponent = _AuthModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthModalComponent, { className: "AuthModalComponent", filePath: "src/app/components/auth/auth-modal.component.ts", lineNumber: 15 });
})();

// src/app/components/header/header.component.ts
function HeaderComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275listener("click", function HeaderComponent_a_16_Template_a_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r9);
      const category_r7 = restoredCtx.$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onCategorySelect(category_r7.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.selectedCategory === category_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r7.label, " ");
  }
}
function HeaderComponent_div_23_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 8)(2, "button", 34);
    \u0275\u0275element(3, "img", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "a", 36);
    \u0275\u0275text(7, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HeaderComponent_div_23_a_8_Template, 2, 0, "a", 37);
    \u0275\u0275elementStart(9, "button", 32);
    \u0275\u0275listener("click", function HeaderComponent_div_23_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.logout());
    });
    \u0275\u0275text(10, "Logout");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.currentUser.avatar, \u0275\u0275sanitizeUrl)("alt", ctx_r1.currentUser.username);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentUser.username, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentUser.role === "admin");
  }
}
function HeaderComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.openAuthModal("login"));
    });
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 40);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.openAuthModal("register"));
    });
    \u0275\u0275text(3, "Register");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_a_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275listener("click", function HeaderComponent_a_47_Template_a_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r18);
      const category_r16 = restoredCtx.$implicit;
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.onCategorySelect(category_r16.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r16 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r4.selectedCategory === category_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r16.label, " ");
  }
}
function HeaderComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 39);
    \u0275\u0275listener("click", function HeaderComponent_div_48_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.openAuthModal("login"));
    });
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function HeaderComponent_div_48_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.openAuthModal("register"));
    });
    \u0275\u0275text(4, "Register");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_div_49_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275listener("click", function HeaderComponent_div_49_a_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r23 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r23.closeMobileMenu());
    });
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 33);
    \u0275\u0275element(2, "img", 35);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 43);
    \u0275\u0275listener("click", function HeaderComponent_div_49_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.closeMobileMenu());
    });
    \u0275\u0275text(6, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HeaderComponent_div_49_a_7_Template, 2, 0, "a", 44);
    \u0275\u0275elementStart(8, "button", 45);
    \u0275\u0275listener("click", function HeaderComponent_div_49_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r27 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r27.logout());
    });
    \u0275\u0275text(9, "Logout");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r6.currentUser.avatar, \u0275\u0275sanitizeUrl)("alt", ctx_r6.currentUser.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.currentUser.username);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r6.currentUser.role === "admin");
  }
}
var _c0 = () => ({ exact: true });
var _HeaderComponent = class _HeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.searchChange = new EventEmitter();
    this.categoryChange = new EventEmitter();
    this.searchQuery = "";
    this.selectedCategory = null;
    this.isMobileMenuOpen = false;
    this.isAuthModalOpen = false;
    this.currentUser = null;
    this.mobileMenuOpen = false;
    this.categories = [
      { label: "All", value: null },
      { label: "Breeds", value: DogCategory.BREEDS },
      { label: "Food", value: DogCategory.FOOD },
      { label: "Environment", value: DogCategory.ENVIRONMENT },
      { label: "Training", value: DogCategory.TRAINING },
      { label: "Health", value: DogCategory.HEALTH },
      { label: "Grooming", value: DogCategory.GROOMING }
    ];
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }
  onSearch() {
    this.searchChange.emit(this.searchQuery);
  }
  onCategorySelect(category) {
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
  openAuthModal(mode) {
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
      this.router.navigate(["/search"], { queryParams: { q: this.searchQuery } });
    }
  }
  showLoginModal() {
    this.mobileMenuOpen = false;
  }
  showRegisterModal() {
    this.mobileMenuOpen = false;
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { searchChange: "searchChange", categoryChange: "categoryChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 23, consts: [[1, "main-header"], [1, "header-container"], [1, "logo"], ["routerLink", "/"], [1, "desktop-nav"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/community", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropdown-btn"], [1, "dropdown-content"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], [1, "search-form", 3, "ngSubmit"], ["type", "text", "name", "searchQuery", "placeholder", "Search breeds, posts...", 1, "search-input", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "search-btn"], [1, "user-menu"], ["class", "user-info", 4, "ngIf", "ngIfElse"], ["authButtons", ""], [1, "mobile-overlay", 3, "click"], [1, "mobile-menu-btn", 3, "click"], [1, "mobile-nav"], [1, "mobile-search"], ["type", "text", "name", "searchQuery", "placeholder", "Search...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "mobile-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/all-breeds", 3, "click"], ["routerLink", "/community", "routerLinkActive", "active", 3, "click"], [1, "mobile-categories"], ["class", "mobile-auth", 4, "ngIf"], ["class", "mobile-user", 4, "ngIf"], [3, "isOpen", "close"], [3, "click"], [1, "user-info"], [1, "user-btn"], [1, "user-avatar", 3, "src", "alt"], ["routerLink", "/profile"], ["routerLink", "/admin", 4, "ngIf"], ["routerLink", "/admin"], [1, "auth-btn", "login-btn", 3, "click"], [1, "auth-btn", "register-btn", 3, "click"], [1, "mobile-auth"], [1, "mobile-user"], ["routerLink", "/profile", 3, "click"], ["routerLink", "/admin", 3, "click", 4, "ngIf"], [1, "logout-btn", 3, "click"], ["routerLink", "/admin", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1")(4, "a", 3);
    \u0275\u0275text(5, "\u{1F415} DogBreeds Hub");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "nav", 4)(7, "div", 5)(8, "a", 6);
    \u0275\u0275text(9, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7);
    \u0275\u0275text(11, "Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
    \u0275\u0275text(14, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275template(16, HeaderComponent_a_16_Template, 2, 3, "a", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12)(18, "form", 13);
    \u0275\u0275listener("ngSubmit", function HeaderComponent_Template_form_ngSubmit_18_listener() {
      return ctx.onSearchSubmit();
    });
    \u0275\u0275elementStart(19, "input", 14);
    \u0275\u0275listener("ngModelChange", function HeaderComponent_Template_input_ngModelChange_19_listener($event) {
      return ctx.searchQuery = $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 15);
    \u0275\u0275text(21, "\u{1F50D}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 16);
    \u0275\u0275template(23, HeaderComponent_div_23_Template, 11, 4, "div", 17)(24, HeaderComponent_ng_template_24_Template, 4, 0, "ng-template", null, 18, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275listener("click", function HeaderComponent_Template_div_click_26_listener() {
      return ctx.toggleMobileMenu();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 20);
    \u0275\u0275listener("click", function HeaderComponent_Template_button_click_27_listener() {
      return ctx.toggleMobileMenu();
    });
    \u0275\u0275element(28, "span")(29, "span")(30, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "form", 13);
    \u0275\u0275listener("ngSubmit", function HeaderComponent_Template_form_ngSubmit_33_listener() {
      return ctx.onSearchSubmit();
    });
    \u0275\u0275elementStart(34, "input", 23);
    \u0275\u0275listener("ngModelChange", function HeaderComponent_Template_input_ngModelChange_34_listener($event) {
      return ctx.searchQuery = $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 15);
    \u0275\u0275text(36, "\u{1F50D}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 24)(38, "a", 25);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_38_listener() {
      return ctx.closeMobileMenu();
    });
    \u0275\u0275text(39, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 26);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_40_listener() {
      return ctx.closeMobileMenu();
    });
    \u0275\u0275text(41, "\u{1F415} All Breeds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "a", 27);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_42_listener() {
      return ctx.closeMobileMenu();
    });
    \u0275\u0275text(43, "Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 28)(45, "h4");
    \u0275\u0275text(46, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, HeaderComponent_a_47_Template, 2, 3, "a", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, HeaderComponent_div_48_Template, 5, 0, "div", 29)(49, HeaderComponent_div_49_Template, 10, 4, "div", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "app-auth-modal", 31);
    \u0275\u0275listener("close", function HeaderComponent_Template_app_auth_modal_close_50_listener() {
      return ctx.closeAuthModal();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _r3 = \u0275\u0275reference(25);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx.categories);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.searchQuery);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.currentUser)("ngIfElse", _r3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("show", ctx.mobileMenuOpen);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.isMobileMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.isMobileMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.isMobileMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx.isMobileMenuOpen);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.searchQuery);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.isAuthModalOpen);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, RouterLinkActive, AuthModalComponent], styles: ["\n\n.main-header[_ngcontent-%COMP%] {\n  background: white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.header-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 700;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.desktop-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-btn[_ngcontent-%COMP%], .user-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #333;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n}\n.dropdown-btn[_ngcontent-%COMP%]:hover, .user-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background: white;\n  min-width: 200px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n  padding: 0.5rem 0;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #333;\n  padding: 0.75rem 1rem;\n  text-decoration: none;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.dropdown-content[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.search-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f8f9fa;\n  border-radius: 25px;\n  padding: 0.5rem;\n  min-width: 300px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: none;\n  padding: 0.5rem 1rem;\n  outline: none;\n  font-size: 1rem;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.3s ease;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.user-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.auth-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  border-radius: 25px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.login-btn[_ngcontent-%COMP%] {\n  background: none;\n  color: #667eea;\n  border: 2px solid #667eea;\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n}\n.register-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.register-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 3px;\n  background: #333;\n  margin: 3px 0;\n  transition: 0.3s;\n  border-radius: 2px;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(-45deg) translate(-5px, 6px);\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(45deg) translate(-5px, -6px);\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  background: white;\n  border-top: 1px solid #eee;\n  padding: 1rem;\n}\n.mobile-nav.open[_ngcontent-%COMP%] {\n  display: block;\n}\n.mobile-search[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mobile-search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n  min-width: auto;\n  width: 100%;\n}\n.mobile-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.mobile-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  padding: 1rem;\n  border-radius: 8px;\n  transition: background 0.3s ease;\n}\n.mobile-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.mobile-categories[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem;\n  color: #666;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.mobile-auth[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n}\n.mobile-auth[_ngcontent-%COMP%]   .auth-btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mobile-user[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n}\n.mobile-user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: #ff4757;\n  color: white;\n  border: none;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    top: 70px;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 70px);\n    background: white;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n    flex-direction: column;\n    padding: 2rem 0;\n    z-index: 1000;\n    overflow-y: auto;\n  }\n  .nav-links.show[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    border-bottom: 1px solid #f0f0f0;\n    font-size: 1.1rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .categories-dropdown[_ngcontent-%COMP%] {\n    position: static;\n    box-shadow: none;\n    background: #f8f9fa;\n    width: 100%;\n    border-radius: 0;\n  }\n  .categories-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 1rem 3rem;\n    border-left: 4px solid transparent;\n  }\n  .categories-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    border-left-color: #667eea;\n    background: #f0f0ff;\n  }\n  .user-menu-dropdown[_ngcontent-%COMP%] {\n    position: static;\n    box-shadow: none;\n    background: #f8f9fa;\n    width: 100%;\n    border-radius: 0;\n  }\n  .user-menu-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 1rem 3rem;\n  }\n  .mobile-overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 999;\n    display: none;\n  }\n  .mobile-overlay.show[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: white;\n  z-index: 1000;\n  padding: 2rem;\n  transform: translateX(-100%);\n  transition: transform 0.3s ease;\n  overflow-y: auto;\n}\n.mobile-menu[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 4rem;\n}\n.mobile-menu[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 1rem;\n  border-bottom: 1px solid #eee;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n.mobile-menu[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  z-index: 1001;\n  position: relative;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 17 });
})();

// src/app/components/dog-assistant/dog-assistant.component.ts
function DogAssistantComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r0.position.x + 60, "px")("top", ctx_r0.position.y - 10, "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentMessage, "\n");
  }
}
var _DogAssistantComponent = class _DogAssistantComponent {
  constructor() {
    this.position = { x: 100, y: 100 };
    this.isActive = false;
    this.showMessage = false;
    this.currentMessage = "";
    this.messages = [
      "Woof! Welcome to DogBreeds Hub! \u{1F43E}",
      "Need help finding the perfect breed?",
      "Don't forget to check out our latest posts!",
      "Bark if you need assistance! \u{1F415}",
      "Every dog deserves love and care! \u2764\uFE0F",
      "Explore different categories to learn more!"
    ];
  }
  ngOnInit() {
    if (typeof window !== "undefined") {
      this.startMovement();
      this.showRandomMessage();
    }
  }
  startMovement() {
    setInterval(() => {
      this.moveRandomly();
    }, 8e3);
  }
  moveRandomly() {
    if (typeof window === "undefined") {
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
    if (typeof window === "undefined") {
      return;
    }
    setInterval(() => {
      this.currentMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 4e3);
    }, 15e3);
  }
};
_DogAssistantComponent.\u0275fac = function DogAssistantComponent_Factory(t) {
  return new (t || _DogAssistantComponent)();
};
_DogAssistantComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DogAssistantComponent, selectors: [["app-dog-assistant"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 7, consts: [[1, "dog-assistant"], ["class", "dog-message", 3, "left", "top", 4, "ngIf"], [1, "dog-message"]], template: function DogAssistantComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " \u{1F415}\n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DogAssistantComponent_div_2_Template, 2, 5, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("left", ctx.position.x, "px")("top", ctx.position.y, "px");
    \u0275\u0275classProp("active", ctx.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showMessage);
  }
}, dependencies: [CommonModule, NgIf], styles: ['\n\n.dog-assistant[_ngcontent-%COMP%] {\n  position: fixed;\n  font-size: 3rem;\n  cursor: pointer;\n  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  z-index: 1000;\n  -webkit-user-select: none;\n  user-select: none;\n  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));\n}\n.dog-assistant.active[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(10deg);\n  animation: _ngcontent-%COMP%_bounce 0.6s ease-in-out;\n}\n.dog-message[_ngcontent-%COMP%] {\n  position: fixed;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  max-width: 250px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n  animation: _ngcontent-%COMP%_fadeInScale 0.5s ease-out;\n}\n.dog-message[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -8px;\n  top: 20px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 8px 8px 8px 0;\n  border-color: transparent #667eea transparent transparent;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: scale(1.2) translateY(0);\n  }\n  40% {\n    transform: scale(1.2) translateY(-20px);\n  }\n  60% {\n    transform: scale(1.2) translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInScale {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=dog-assistant.component.css.map */'] });
var DogAssistantComponent = _DogAssistantComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DogAssistantComponent, { className: "DogAssistantComponent", filePath: "src/app/components/dog-assistant/dog-assistant.component.ts", lineNumber: 11 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor(dogService, router) {
    this.dogService = dogService;
    this.router = router;
    this.title = "Dog Breeds Hub";
    this.breeds = [];
    this.posts = [];
    this.filteredBreeds = [];
    this.filteredPosts = [];
  }
  ngOnInit() {
    this.loadBreeds();
    this.loadPosts();
  }
  loadBreeds() {
    this.dogService.getDogBreeds().subscribe((breeds) => {
      this.breeds = breeds;
      this.filteredBreeds = breeds;
    });
  }
  loadPosts() {
    this.dogService.getDogPosts().subscribe((posts) => {
      this.posts = posts;
      this.filteredPosts = posts;
    });
  }
  onSearchChange(query) {
    if (query.trim() !== "") {
      this.router.navigate(["/search"], { queryParams: { q: query } });
    }
  }
  onCategoryChange(category) {
    if (category === null) {
      this.filteredBreeds = this.breeds;
      this.filteredPosts = this.posts;
    } else {
      this.dogService.getBreedsByCategory(category).subscribe((breeds) => {
        this.filteredBreeds = breeds;
      });
      this.dogService.getPostsByCategory(category).subscribe((posts) => {
        this.filteredPosts = posts;
      });
    }
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(DogService), \u0275\u0275directiveInject(Router));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[3, "searchChange", "categoryChange"], [1, "footer"], [1, "footer-content"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-header", 0);
    \u0275\u0275listener("searchChange", function AppComponent_Template_app_header_searchChange_0_listener($event) {
      return ctx.onSearchChange($event);
    })("categoryChange", function AppComponent_Template_app_header_categoryChange_0_listener($event) {
      return ctx.onCategoryChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementStart(2, "footer", 1)(3, "div", 2)(4, "p");
    \u0275\u0275text(5, "\xA9 2024 Dog Breeds Hub. Made with \u2764\uFE0F for dog lovers.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(6, "app-dog-assistant");
  }
}, dependencies: [
  CommonModule,
  RouterOutlet,
  HeaderComponent,
  DogAssistantComponent
], styles: ['\n\n[_nghost-%COMP%] {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: block;\n  min-height: 100vh;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #f5f5f5;\n}\n.main-content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 200px);\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.footer[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  padding: 2rem 0;\n  text-align: center;\n  margin-top: 3rem;\n}\n.footer-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 1.5rem 0;\n  }\n  .footer-content[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */'] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 22 });
})();

// src/app/components/dog-breeds/dog-breeds.component.ts
function DogBreedsComponent_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trait_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trait_r4);
  }
}
var _c02 = (a1) => ["/breed", a1];
function DogBreedsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275elementStart(2, "div", 6)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275template(8, DogBreedsComponent_div_4_span_8_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "label");
    \u0275\u0275text(12, "Size:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "span", 13);
    \u0275\u0275text(17, "Energy Level:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
    \u0275\u0275text(22, "Grooming Needs:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const breed_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c02, breed_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", breed_r2.image, \u0275\u0275sanitizeUrl)("alt", breed_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(breed_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(breed_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", breed_r2.temperament);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(breed_r2.size);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", breed_r2.energyLevel || 3, "/5");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", breed_r2.groomingNeeds || 3, "/5");
  }
}
function DogBreedsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2, "No breeds found. Try adjusting your search or filters.");
    \u0275\u0275elementEnd()();
  }
}
var _DogBreedsComponent = class _DogBreedsComponent {
  constructor() {
    this.breeds = [];
  }
};
_DogBreedsComponent.\u0275fac = function DogBreedsComponent_Factory(t) {
  return new (t || _DogBreedsComponent)();
};
_DogBreedsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DogBreedsComponent, selectors: [["app-dog-breeds"]], inputs: { breeds: "breeds" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [[1, "breeds-section"], [1, "breeds-grid"], ["class", "breed-card", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "no-breeds", 4, "ngIf"], [1, "breed-card", 3, "routerLink"], [1, "breed-image", 3, "src", "alt"], [1, "breed-info"], [1, "breed-description"], [1, "breed-traits"], ["class", "trait-tag", 4, "ngFor", "ngForOf"], [1, "breed-stats"], [1, "stat"], [1, "breed-stat"], [1, "stat-label"], [1, "trait-tag"], [1, "no-breeds"]], template: function DogBreedsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2, "Dog Breeds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275template(4, DogBreedsComponent_div_4_Template, 25, 11, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DogBreedsComponent_div_5_Template, 3, 0, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.breeds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.breeds.length === 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n.breeds-section[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.breeds-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #333;\n  font-size: 2rem;\n}\n.breeds-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.breed-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n.breed-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.breed-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.breed-info[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.breed-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: #333;\n  font-size: 1.5rem;\n}\n.breed-description[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 1rem;\n  line-height: 1.6;\n}\n.breed-traits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.trait-tag[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.breed-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 0.25rem;\n}\n.stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 500;\n}\n.no-breeds[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .breeds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 0.5rem;\n  }\n  .breed-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .stat[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=dog-breeds.component.css.map */"] });
var DogBreedsComponent = _DogBreedsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DogBreedsComponent, { className: "DogBreedsComponent", filePath: "src/app/components/dog-breeds/dog-breeds.component.ts", lineNumber: 13 });
})();

// src/app/components/latest-posts/latest-posts.component.ts
function LatestPostsComponent_div_1_article_1_img_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const post_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", post_r4.image, \u0275\u0275sanitizeUrl)("alt", post_r4.title);
  }
}
var _c03 = (a1) => ["/hashtag", a1];
function LatestPostsComponent_div_1_article_1_div_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c03, tag_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r10, " ");
  }
}
function LatestPostsComponent_div_1_article_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, LatestPostsComponent_div_1_article_1_div_20_span_1_Template, 2, 4, "span", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", post_r4.tags);
  }
}
function LatestPostsComponent_div_1_article_1_div_38_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275element(2, "img", 36);
    \u0275\u0275elementStart(3, "div", 37)(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 41)(12, "button", 42);
    \u0275\u0275listener("click", function LatestPostsComponent_div_1_article_1_div_38_div_3_Template_button_click_12_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r17);
      const comment_r15 = restoredCtx.$implicit;
      const ctx_r16 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r16.likeComment(comment_r15.id));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r15 = ctx.$implicit;
    const ctx_r12 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", comment_r15.authorAvatar, \u0275\u0275sanitizeUrl)("alt", comment_r15.authorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r15.authorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, comment_r15.createdAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r15.content);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("liked", ctx_r12.hasLikedComment(comment_r15.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F44D} ", comment_r15.likes || 0, " ");
  }
}
function LatestPostsComponent_div_1_article_1_div_38_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "textarea", 44);
    \u0275\u0275listener("ngModelChange", function LatestPostsComponent_div_1_article_1_div_38_div_5_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const post_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r18 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r18.newComments[post_r4.id] = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275listener("click", function LatestPostsComponent_div_1_article_1_div_38_div_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r19);
      const post_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r21 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r21.addComment(post_r4.id));
    });
    \u0275\u0275text(3, " Post Comment ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r13.newComments[post_r4.id]);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r13.newComments[post_r4.id] || !ctx_r13.newComments[post_r4.id].trim());
  }
}
function LatestPostsComponent_div_1_article_1_div_38_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "p");
    \u0275\u0275text(2, "Please ");
    \u0275\u0275elementStart(3, "a", 47);
    \u0275\u0275listener("click", function LatestPostsComponent_div_1_article_1_div_38_div_6_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r24 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r24.showLogin());
    });
    \u0275\u0275text(4, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " to add comments.");
    \u0275\u0275elementEnd()();
  }
}
function LatestPostsComponent_div_1_article_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h5");
    \u0275\u0275text(2, "Recent Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LatestPostsComponent_div_1_article_1_div_38_div_3_Template, 14, 11, "div", 31);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275template(5, LatestPostsComponent_div_1_article_1_div_38_div_5_Template, 4, 2, "div", 32)(6, LatestPostsComponent_div_1_article_1_div_38_div_6_Template, 6, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(4, 3, ctx_r7.getPostComments(post_r4.id), 0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r7.isAuthenticated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r7.isAuthenticated);
  }
}
var _c1 = (a1) => ["/post", a1];
function LatestPostsComponent_div_1_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementStart(4, "div", 9)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "h3")(14, "a", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, LatestPostsComponent_div_1_article_1_img_19_Template, 1, 2, "img", 15)(20, LatestPostsComponent_div_1_article_1_div_20_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "span", 19)(24, "i", 20);
    \u0275\u0275text(25, "\u{1F44D}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 19)(28, "i", 21);
    \u0275\u0275text(29, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 19)(32, "i", 22);
    \u0275\u0275text(33, "\u{1F440}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 23)(36, "button", 24);
    \u0275\u0275text(37, " Read More ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, LatestPostsComponent_div_1_article_1_div_38_Template, 7, 7, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r4 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r4.authorAvatar, \u0275\u0275sanitizeUrl)("alt", post_r4.authorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r4.authorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 18, post_r4.createdAt, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(post_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r4.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c1, post_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(18, 21, post_r4.content, 0, 200), "", post_r4.content.length > 200 ? "..." : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", post_r4.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", post_r4.tags.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", post_r4.likes || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCommentsCount(post_r4.id), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", post_r4.views || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c1, post_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.getPostComments(post_r4.id).length > 0);
  }
}
function LatestPostsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, LatestPostsComponent_div_1_article_1_Template, 39, 29, "article", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.posts)("ngForTrackBy", ctx_r0.trackByPostId);
  }
}
function LatestPostsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No posts yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Be the first to share something with the community!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 50);
    \u0275\u0275text(8, "Create Post");
    \u0275\u0275elementEnd()();
  }
}
var _LatestPostsComponent = class _LatestPostsComponent {
  constructor(authService) {
    this.authService = authService;
    this.posts = [];
    this.currentUser = null;
    this.isAuthenticated = false;
    this.newComments = {};
    this.comments = {
      "1": [
        {
          id: "c1",
          content: "Great article! Very helpful information.",
          authorName: "John Doe",
          authorAvatar: "\u{1F468}",
          createdAt: /* @__PURE__ */ new Date("2024-01-16"),
          likes: 5
        }
      ],
      "2": [
        {
          id: "c2",
          content: "This helped me create a better space for my dog.",
          authorName: "Jane Smith",
          authorAvatar: "\u{1F469}",
          createdAt: /* @__PURE__ */ new Date("2024-01-11"),
          likes: 3
        }
      ]
    };
    this.likedComments = /* @__PURE__ */ new Set();
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.isAuthenticated = !!user;
    });
  }
  trackByPostId(index, post) {
    return post.id;
  }
  getCommentsCount(postId) {
    return this.comments[postId]?.length || 0;
  }
  getPostComments(postId) {
    return this.comments[postId] || [];
  }
  likeComment(commentId) {
    if (this.likedComments.has(commentId)) {
      this.likedComments.delete(commentId);
    } else {
      this.likedComments.add(commentId);
    }
  }
  hasLikedComment(commentId) {
    return this.likedComments.has(commentId);
  }
  addComment(postId) {
    const content = this.newComments[postId];
    if (!content || !content.trim() || !this.currentUser)
      return;
    const newComment = {
      id: `c${Date.now()}`,
      content: content.trim(),
      authorName: this.currentUser.name || this.currentUser.username,
      authorAvatar: this.currentUser.avatar || "\u{1F464}",
      createdAt: /* @__PURE__ */ new Date(),
      likes: 0
    };
    if (!this.comments[postId]) {
      this.comments[postId] = [];
    }
    this.comments[postId].push(newComment);
    this.newComments[postId] = "";
  }
  showLogin() {
    console.log("Show login modal");
  }
};
_LatestPostsComponent.\u0275fac = function LatestPostsComponent_Factory(t) {
  return new (t || _LatestPostsComponent)(\u0275\u0275directiveInject(AuthService));
};
_LatestPostsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LatestPostsComponent, selectors: [["app-latest-posts"]], inputs: { posts: "posts" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "latest-posts"], ["class", "posts-grid", 4, "ngIf", "ngIfElse"], ["noPosts", ""], [1, "posts-grid"], ["class", "post-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "post-card"], [1, "post-header"], [1, "author-info"], [1, "author-avatar", 3, "src", "alt"], [1, "author-details"], [1, "post-date"], [1, "status-badge"], [1, "post-content"], [3, "routerLink"], [1, "post-excerpt"], ["class", "post-image", 3, "src", "alt", 4, "ngIf"], ["class", "post-tags", 4, "ngIf"], [1, "post-footer"], [1, "post-stats"], [1, "stat"], [1, "icon-like"], [1, "icon-comment"], [1, "icon-view"], [1, "post-actions"], [1, "action-btn", 3, "routerLink"], ["class", "comments-section", 4, "ngIf"], [1, "post-image", 3, "src", "alt"], [1, "post-tags"], ["class", "tag", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "tag", 3, "routerLink"], [1, "comments-section"], ["class", "comment", 4, "ngFor", "ngForOf"], ["class", "add-comment", 4, "ngIf"], ["class", "login-prompt", 4, "ngIf"], [1, "comment"], [1, "comment-header"], [1, "comment-avatar", 3, "src", "alt"], [1, "comment-info"], [1, "comment-author"], [1, "comment-date"], [1, "comment-content"], [1, "comment-actions"], [1, "like-btn", 3, "click"], [1, "add-comment"], ["placeholder", "Add a comment...", "rows", "2", 1, "comment-input", 3, "ngModel", "ngModelChange"], [1, "comment-btn", 3, "disabled", "click"], [1, "login-prompt"], ["href", "#", 3, "click"], [1, "no-posts"], [1, "no-posts-icon"], ["routerLink", "/community", 1, "create-post-btn"]], template: function LatestPostsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, LatestPostsComponent_div_1_Template, 2, 2, "div", 1)(2, LatestPostsComponent_ng_template_2_Template, 9, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.posts.length > 0)("ngIfElse", _r2);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.latest-posts[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border: 1px solid #f0f0f0;\n}\n.post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.post-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 0;\n}\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.author-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-weight: 600;\n}\n.post-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.rejected[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.post-content[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.post-excerpt[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.post-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.tag[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: opacity 0.3s ease;\n}\n.tag[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.post-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.comments-section[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  background: #f8f9fa;\n}\n.comments-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: #333;\n  font-weight: 600;\n}\n.comment[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.comment-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.comment-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.comment-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.8rem;\n}\n.comment-content[_ngcontent-%COMP%] {\n  color: #555;\n  line-height: 1.5;\n  margin: 0.5rem 0;\n}\n.comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.like-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #666;\n  cursor: pointer;\n  font-size: 0.8rem;\n  transition: color 0.3s ease;\n}\n.like-btn[_ngcontent-%COMP%]:hover, .like-btn.liked[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.add-comment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-end;\n}\n.comment-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  resize: vertical;\n  font-family: inherit;\n  transition: border-color 0.3s ease;\n}\n.comment-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.comment-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: background 0.3s ease;\n}\n.comment-btn[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.comment-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #5a6fd8;\n}\n.login-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  color: #666;\n}\n.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.no-posts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n}\n.no-posts-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-posts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n}\n.create-post-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1rem 2rem;\n  border-radius: 25px;\n  text-decoration: none;\n  font-weight: 600;\n  margin-top: 1rem;\n  transition: transform 0.3s ease;\n}\n.create-post-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .posts-grid[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n  }\n  .post-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .post-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .add-comment[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .comment-btn[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=latest-posts.component.css.map */"] });
var LatestPostsComponent = _LatestPostsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LatestPostsComponent, { className: "LatestPostsComponent", filePath: "src/app/components/latest-posts/latest-posts.component.ts", lineNumber: 26 });
})();

// src/app/components/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor(dogService) {
    this.dogService = dogService;
    this.breeds = [];
    this.posts = [];
    this.filteredBreeds = [];
    this.filteredPosts = [];
    this.categories = [
      {
        id: "small-breeds",
        name: "Small Breeds",
        description: "Perfect companions for apartments",
        icon: "\u{1F415}\u200D\u{1F9BA}"
      },
      {
        id: "large-breeds",
        name: "Large Breeds",
        description: "Majestic and loyal guardians",
        icon: "\u{1F415}\u200D\u{1F9AE}"
      },
      {
        id: "working-dogs",
        name: "Working Dogs",
        description: "Intelligent and purpose-driven",
        icon: "\u{1F9B4}"
      },
      {
        id: "family-dogs",
        name: "Family Dogs",
        description: "Great with children and families",
        icon: "\u{1F43E}"
      },
      {
        id: "training",
        name: "Training Tips",
        description: "Expert advice for dog training",
        icon: "\u{1F3BE}"
      },
      {
        id: "health",
        name: "Health & Care",
        description: "Keep your dog healthy and happy",
        icon: "\u{1F3E5}"
      }
    ];
  }
  ngOnInit() {
    this.loadBreeds();
    this.loadPosts();
  }
  loadBreeds() {
    this.dogService.getDogBreeds().subscribe((breeds) => {
      this.breeds = breeds;
      this.filteredBreeds = breeds;
    });
  }
  loadPosts() {
    this.dogService.getDogPosts().subscribe((posts) => {
      this.posts = posts;
      this.filteredPosts = posts;
    });
  }
  onSearchChange(query) {
    if (query.trim() === "") {
      this.filteredBreeds = this.breeds;
    } else {
      this.dogService.searchBreeds(query).subscribe((breeds) => {
        this.filteredBreeds = breeds;
      });
    }
  }
  onCategoryChange(category) {
    if (category === null) {
      this.filteredBreeds = this.breeds;
      this.filteredPosts = this.posts;
    } else {
      this.dogService.getBreedsByCategory(category).subscribe((breeds) => {
        this.filteredBreeds = breeds;
      });
      this.dogService.getPostsByCategory(category).subscribe((posts) => {
        this.filteredPosts = posts;
      });
    }
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(DogService));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 2, consts: [[1, "home-page"], [1, "hero"], [1, "hero-content"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/community", 1, "cta-btn", "primary"], ["routerLink", "/breeds", 1, "cta-btn", "secondary"], [1, "hero-image"], [1, "floating-emojis"], [1, "emoji"], [1, "featured-section"], [1, "section-header"], [3, "breeds"], [1, "posts-section"], [3, "posts"], [1, "features"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
    \u0275\u0275text(4, "\u{1F415} Welcome to DogBreeds Hub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Your ultimate destination for everything about dog breeds, care tips, and community discussions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
    \u0275\u0275text(9, "Join Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 6);
    \u0275\u0275text(11, "Explore Breeds");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "span", 9);
    \u0275\u0275text(15, "\u{1F415}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 9);
    \u0275\u0275text(17, "\u{1F436}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19, "\u{1F9B4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 9);
    \u0275\u0275text(21, "\u{1F3BE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 9);
    \u0275\u0275text(23, "\u2764\uFE0F");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "section", 10)(25, "div", 11)(26, "h2");
    \u0275\u0275text(27, "\u{1F415} Top Dog Breeds \u{1F3BE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Discover popular and unique dog breeds perfect for your lifestyle");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "app-dog-breeds", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "section", 13)(32, "div", 11)(33, "h2");
    \u0275\u0275text(34, "Latest Community Posts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36, "See what fellow dog lovers are sharing");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "app-latest-posts", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "section", 15)(39, "div", 16)(40, "div", 17)(41, "div", 18);
    \u0275\u0275text(42, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h3");
    \u0275\u0275text(44, "Breed Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46, "Find the perfect dog breed that matches your lifestyle and preferences.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 17)(48, "div", 18);
    \u0275\u0275text(49, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h3");
    \u0275\u0275text(51, "Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53, "Connect with fellow dog lovers, share experiences, and get advice.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 17)(55, "div", 18);
    \u0275\u0275text(56, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "h3");
    \u0275\u0275text(58, "Care Guides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p");
    \u0275\u0275text(60, "Access comprehensive guides on dog care, training, and health.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 17)(62, "div", 18);
    \u0275\u0275text(63, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "h3");
    \u0275\u0275text(65, "Expert Advice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p");
    \u0275\u0275text(67, "Get professional advice from veterinarians and dog experts.");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(30);
    \u0275\u0275property("breeds", ctx.filteredBreeds);
    \u0275\u0275advance(7);
    \u0275\u0275property("posts", ctx.filteredPosts);
  }
}, dependencies: [CommonModule, RouterLink, DogBreedsComponent, LatestPostsComponent], styles: ["\n\n.home-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 4rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  position: relative;\n  overflow: hidden;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  text-align: center;\n  z-index: 2;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n  font-weight: 700;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-radius: 30px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  display: inline-block;\n}\n.cta-btn.primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n}\n.cta-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);\n}\n.cta-btn.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid white;\n}\n.cta-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #667eea;\n}\n.hero-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n.floating-emojis[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.emoji[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2rem;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n  opacity: 0.3;\n}\n.emoji[_ngcontent-%COMP%]:nth-child(1) {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.emoji[_ngcontent-%COMP%]:nth-child(2) {\n  top: 60%;\n  right: 15%;\n  animation-delay: 1s;\n}\n.emoji[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 30%;\n  left: 20%;\n  animation-delay: 2s;\n}\n.emoji[_ngcontent-%COMP%]:nth-child(4) {\n  top: 30%;\n  right: 30%;\n  animation-delay: 3s;\n}\n.emoji[_ngcontent-%COMP%]:nth-child(5) {\n  bottom: 20%;\n  right: 10%;\n  animation-delay: 4s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.featured-section[_ngcontent-%COMP%], .posts-section[_ngcontent-%COMP%] {\n  padding: 4rem 1rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n  font-weight: 700;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #666;\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.features[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 4rem 1rem;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 15px;\n  text-align: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  display: block;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n}\n.explore-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n.explore-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1rem 2rem;\n  border-radius: 15px;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n}\n.explore-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);\n}\n@media (max-width: 768px) {\n  .home-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .explore-btn[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/components/home/home.component.ts", lineNumber: 16 });
})();

// src/app/components/category-page/category-page.component.ts
function CategoryPageComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const breed_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", breed_r4.image, \u0275\u0275sanitizeUrl)("alt", breed_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(breed_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(7, 6, breed_r4.description, 0, 100), "...");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(breed_r4.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(breed_r4.origin);
  }
}
function CategoryPageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2, "Related Dog Breeds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275template(4, CategoryPageComponent_div_7_div_4_Template, 13, 10, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.breeds);
  }
}
var _c04 = (a1) => ["/hashtag", a1];
function CategoryPageComponent_div_8_article_4_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27)(1, "a", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c04, tag_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r8, "");
  }
}
var _c12 = (a1) => ["/post", a1];
function CategoryPageComponent_div_8_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275element(3, "img", 19);
    \u0275\u0275elementStart(4, "div")(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "time");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 20)(11, "h3")(12, "a", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275template(18, CategoryPageComponent_div_8_article_4_span_18_Template, 3, 4, "span", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "span", 25);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 26);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r6.author.avatar, \u0275\u0275sanitizeUrl)("alt", post_r6.author.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r6.author.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, post_r6.createdAt));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c12, post_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(16, 13, post_r6.content, 0, 200), "", post_r6.content.length > 200 ? "..." : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", post_r6.tags);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", post_r6.likes, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", post_r6.commentsCount || 0, "");
  }
}
function CategoryPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2, "Related Posts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275template(4, CategoryPageComponent_div_8_article_4_Template, 24, 19, "article", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.posts);
  }
}
function CategoryPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h2");
    \u0275\u0275text(2, "No content found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "We're working on adding more content for this category.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 29);
    \u0275\u0275text(6, "\u2190 Back to Home");
    \u0275\u0275elementEnd()();
  }
}
var _CategoryPageComponent = class _CategoryPageComponent {
  constructor(route, dogService) {
    this.route = route;
    this.dogService = dogService;
    this.category = "";
    this.categoryTitle = "";
    this.categoryDescription = "";
    this.breeds = [];
    this.posts = [];
    this.categoryConfig = {
      "small-breeds": {
        title: "Small Dog Breeds",
        description: "Discover adorable small dog breeds perfect for apartments and families."
      },
      "large-breeds": {
        title: "Large Dog Breeds",
        description: "Explore majestic large dog breeds known for their loyalty and strength."
      },
      "working-dogs": {
        title: "Working Dogs",
        description: "Learn about intelligent working dog breeds and their special abilities."
      },
      "family-dogs": {
        title: "Family Dogs",
        description: "Find the best family-friendly dog breeds for homes with children."
      },
      "training": {
        title: "Dog Training",
        description: "Tips, techniques, and guides for training your beloved companion."
      },
      "health": {
        title: "Dog Health",
        description: "Essential health information to keep your dog happy and healthy."
      },
      "nutrition": {
        title: "Dog Nutrition",
        description: "Learn about proper nutrition and feeding for optimal dog health."
      },
      "grooming": {
        title: "Dog Grooming",
        description: "Professional grooming tips and techniques for all breeds."
      }
    };
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params["category"];
      this.setupCategory();
      this.loadCategoryContent();
    });
  }
  setupCategory() {
    const config2 = this.categoryConfig[this.category];
    if (config2) {
      this.categoryTitle = config2.title;
      this.categoryDescription = config2.description;
    } else {
      this.categoryTitle = this.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
      this.categoryDescription = `Explore everything related to ${this.categoryTitle.toLowerCase()}.`;
    }
  }
  loadCategoryContent() {
    this.dogService.getBreedsByCategory(this.category).subscribe((breeds) => {
      this.breeds = breeds;
    });
    this.dogService.getPostsByCategory(this.category).subscribe((posts) => {
      this.posts = posts;
    });
  }
};
_CategoryPageComponent.\u0275fac = function CategoryPageComponent_Factory(t) {
  return new (t || _CategoryPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DogService));
};
_CategoryPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryPageComponent, selectors: [["app-category-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 5, consts: [[1, "category-page"], [1, "category-header"], [1, "category-content"], ["class", "content-section", 4, "ngIf"], ["class", "no-content", 4, "ngIf"], [1, "content-section"], [1, "breeds-grid"], ["class", "breed-card", 4, "ngFor", "ngForOf"], [1, "breed-card"], [1, "breed-image", 3, "src", "alt"], [1, "breed-info"], [1, "breed-details"], [1, "size-badge"], [1, "origin"], [1, "posts-grid"], ["class", "post-card", 4, "ngFor", "ngForOf"], [1, "post-card"], [1, "post-header"], [1, "author-info"], [1, "author-avatar", 3, "src", "alt"], [1, "post-content"], [3, "routerLink"], [1, "post-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "post-actions"], [1, "likes"], [1, "comments"], [1, "tag"], [1, "no-content"], ["routerLink", "/", 1, "back-home"]], template: function CategoryPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2);
    \u0275\u0275template(7, CategoryPageComponent_div_7_Template, 5, 1, "div", 3)(8, CategoryPageComponent_div_8_Template, 5, 1, "div", 3)(9, CategoryPageComponent_div_9_Template, 7, 0, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.categoryTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.categoryDescription);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.breeds.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.posts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.breeds.length === 0 && ctx.posts.length === 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, RouterLink], styles: ["\n\n.category-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.category-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 12px;\n}\n.category-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 2.5rem;\n}\n.content-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.content-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  border-bottom: 3px solid #667eea;\n  padding-bottom: 0.5rem;\n  margin-bottom: 2rem;\n}\n.breeds-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.breed-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease;\n}\n.breed-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.breed-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.breed-info[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.breed-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.breed-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n  align-items: center;\n}\n.size-badge[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n}\n.origin[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  transition: transform 0.3s ease;\n}\n.post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.post-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.author-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n.author-info[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.post-tags[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tag[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #667eea;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.tag[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n  color: #666;\n}\n.no-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #666;\n}\n.back-home[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 1rem;\n  padding: 0.75rem 1.5rem;\n  background: #667eea;\n  color: white;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: background 0.3s ease;\n}\n.back-home[_ngcontent-%COMP%]:hover {\n  background: #5a6fd8;\n}\n@media (max-width: 768px) {\n  .category-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .category-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .breeds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=category-page.component.css.map */"] });
var CategoryPageComponent = _CategoryPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryPageComponent, { className: "CategoryPageComponent", filePath: "src/app/components/category-page/category-page.component.ts", lineNumber: 286 });
})();

// src/app/components/search-page/search-page.component.ts
function SearchPageComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Showing results for: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', ctx_r0.searchQuery, '"');
  }
}
function SearchPageComponent_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const breed_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", breed_r5.image, \u0275\u0275sanitizeUrl)("alt", breed_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(breed_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(breed_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(breed_r5.size);
  }
}
function SearchPageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275template(4, SearchPageComponent_div_6_div_4_Template, 9, 5, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Dog Breeds (", ctx_r1.breeds.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.breeds);
  }
}
var _c05 = (a1) => ["/hashtag", a1];
function SearchPageComponent_div_7_article_4_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "a", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c05, tag_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r9, "");
  }
}
var _c13 = (a1) => ["/post", a1];
function SearchPageComponent_div_7_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "img", 18);
    \u0275\u0275elementStart(4, "div")(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "time");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 19)(11, "h3")(12, "a", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 21);
    \u0275\u0275template(18, SearchPageComponent_div_7_article_4_span_18_Template, 3, 4, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 23)(20, "span", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 25);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r7.author.avatar, \u0275\u0275sanitizeUrl)("alt", post_r7.author.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r7.author.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, post_r7.createdAt));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c13, post_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(16, 13, post_r7.content, 0, 200), "", post_r7.content.length > 200 ? "..." : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", post_r7.tags);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", post_r7.likes, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", post_r7.commentsCount || 0, "");
  }
}
function SearchPageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275template(4, SearchPageComponent_div_7_article_4_Template, 24, 19, "article", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Posts (", ctx_r2.posts.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.posts);
  }
}
function SearchPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h2");
    \u0275\u0275text(2, "No results found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try searching with different keywords or browse our categories.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 28);
    \u0275\u0275text(6, "\u2190 Back to Home");
    \u0275\u0275elementEnd()();
  }
}
var _SearchPageComponent = class _SearchPageComponent {
  constructor(route, dogService) {
    this.route = route;
    this.dogService = dogService;
    this.searchQuery = "";
    this.breeds = [];
    this.posts = [];
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params["q"] || "";
      if (this.searchQuery) {
        this.performSearch();
      }
    });
  }
  performSearch() {
    this.dogService.searchBreeds(this.searchQuery).subscribe((breeds) => {
      this.breeds = breeds;
    });
    this.dogService.searchPosts(this.searchQuery).subscribe((posts) => {
      this.posts = posts;
    });
  }
};
_SearchPageComponent.\u0275fac = function SearchPageComponent_Factory(t) {
  return new (t || _SearchPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DogService));
};
_SearchPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPageComponent, selectors: [["app-search-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "search-page"], [1, "search-header"], [4, "ngIf"], [1, "search-results"], ["class", "results-section", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], [1, "results-section"], [1, "breeds-grid"], ["class", "breed-card", 4, "ngFor", "ngForOf"], [1, "breed-card"], [1, "breed-image", 3, "src", "alt"], [1, "breed-info"], [1, "size-badge"], [1, "posts-grid"], ["class", "post-card", 4, "ngFor", "ngForOf"], [1, "post-card"], [1, "post-header"], [1, "author-info"], [1, "author-avatar", 3, "src", "alt"], [1, "post-content"], [3, "routerLink"], [1, "post-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "post-actions"], [1, "likes"], [1, "comments"], [1, "tag"], [1, "no-results"], ["routerLink", "/", 1, "back-home"]], template: function SearchPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
    \u0275\u0275text(3, "Search Results");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SearchPageComponent_p_4_Template, 4, 1, "p", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275template(6, SearchPageComponent_div_6_Template, 5, 2, "div", 4)(7, SearchPageComponent_div_7_Template, 5, 2, "div", 4)(8, SearchPageComponent_div_8_Template, 7, 0, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.breeds.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.posts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.breeds.length === 0 && ctx.posts.length === 0 && ctx.searchQuery);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, RouterLink], styles: ["\n\n.search-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.search-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.search-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.results-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.results-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  border-bottom: 3px solid #667eea;\n  padding-bottom: 0.5rem;\n  margin-bottom: 2rem;\n}\n.breeds-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.breed-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease;\n}\n.breed-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.breed-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.breed-info[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.breed-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.size-badge[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  transition: transform 0.3s ease;\n}\n.post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.post-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.author-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n.author-info[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.post-tags[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tag[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #667eea;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.tag[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n  color: #666;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #666;\n}\n.back-home[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 1rem;\n  padding: 0.75rem 1.5rem;\n  background: #667eea;\n  color: white;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: background 0.3s ease;\n}\n.back-home[_ngcontent-%COMP%]:hover {\n  background: #5a6fd8;\n}\n@media (max-width: 768px) {\n  .search-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .breeds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=search-page.component.css.map */"] });
var SearchPageComponent = _SearchPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPageComponent, { className: "SearchPageComponent", filePath: "src/app/components/search-page/search-page.component.ts", lineNumber: 263 });
})();

// src/app/components/hashtag-page/hashtag-page.component.ts
function HashtagPageComponent_div_9_div_2_img_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", post_r5.image, \u0275\u0275sanitizeUrl)("alt", post_r5.title);
  }
}
var _c06 = (a1) => ["/hashtag", a1];
function HashtagPageComponent_div_9_div_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c06, tag_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r9, " ");
  }
}
var _c14 = (a1) => ["/post", a1];
function HashtagPageComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "img", 14);
    \u0275\u0275elementStart(4, "div", 15)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 17)(11, "h3")(12, "a", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, HashtagPageComponent_div_9_div_2_img_17_Template, 1, 2, "img", 20);
    \u0275\u0275elementStart(18, "div", 21);
    \u0275\u0275template(19, HashtagPageComponent_div_9_div_2_span_19_Template, 2, 4, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "span", 24);
    \u0275\u0275element(22, "i", 25);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 24);
    \u0275\u0275element(25, "i", 26);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r5.author.avatar, \u0275\u0275sanitizeUrl)("alt", post_r5.author.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r5.author.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 12, post_r5.createdAt, "short"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c14, post_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(16, 15, post_r5.content, 0, 150), "", post_r5.content.length > 150 ? "..." : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", post_r5.image);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", post_r5.tags);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", post_r5.likes || 0, " likes ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", post_r5.comments || 0, " comments ");
  }
}
function HashtagPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275template(2, HashtagPageComponent_div_9_div_2_Template, 27, 21, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.posts);
  }
}
function HashtagPageComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Be the first to create a post with this hashtag!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 30);
    \u0275\u0275text(6, "Create Post");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("No posts found for #", ctx_r1.hashtag, "");
  }
}
function HashtagPageComponent_div_12_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const related_r11 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c06, related_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", related_r11, " ");
  }
}
function HashtagPageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h3");
    \u0275\u0275text(2, "Related Hashtags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275template(4, HashtagPageComponent_div_12_a_4_Template, 2, 4, "a", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.relatedHashtags);
  }
}
var _HashtagPageComponent = class _HashtagPageComponent {
  constructor(route, dogService) {
    this.route = route;
    this.dogService = dogService;
    this.currentTag = "";
    this.hashtag = "";
    this.posts = [];
    this.relatedHashtags = [];
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentTag = params["tag"];
      this.hashtag = params["tag"];
      this.loadPostsByTag(this.currentTag);
    });
  }
  loadPostsByTag(tag) {
    this.dogService.getPostsByTag(tag).subscribe((posts) => {
      this.posts = posts;
      this.relatedHashtags = this.extractRelatedHashtags(posts);
    });
  }
  extractRelatedHashtags(posts) {
    const hashtags = /* @__PURE__ */ new Set();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        if (tag !== this.currentTag) {
          hashtags.add(tag);
        }
      });
    });
    return Array.from(hashtags).slice(0, 5);
  }
};
_HashtagPageComponent.\u0275fac = function HashtagPageComponent_Factory(t) {
  return new (t || _HashtagPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DogService));
};
_HashtagPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HashtagPageComponent, selectors: [["app-hashtag-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "hashtag-page"], [1, "hashtag-header"], [1, "hashtag-description"], [1, "hashtag-stats"], [1, "post-count"], ["class", "posts-container", 4, "ngIf", "ngIfElse"], ["noPosts", ""], ["class", "related-hashtags", 4, "ngIf"], [1, "posts-container"], [1, "post-grid"], ["class", "post-card", 4, "ngFor", "ngForOf"], [1, "post-card"], [1, "post-header"], [1, "author-info"], [1, "author-avatar", 3, "src", "alt"], [1, "author-details"], [1, "post-date"], [1, "post-content"], [3, "routerLink"], [1, "post-excerpt"], ["class", "post-image", 3, "src", "alt", 4, "ngIf"], [1, "post-tags"], ["class", "tag", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "post-stats"], [1, "stat"], [1, "icon-like"], [1, "icon-comment"], [1, "post-image", 3, "src", "alt"], [1, "tag", 3, "routerLink"], [1, "no-posts"], ["routerLink", "/community", 1, "create-post-btn"], [1, "related-hashtags"], [1, "hashtag-cloud"], ["class", "hashtag-link", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "hashtag-link", 3, "routerLink"]], template: function HashtagPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3)(7, "span", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, HashtagPageComponent_div_9_Template, 3, 1, "div", 5)(10, HashtagPageComponent_ng_template_10_Template, 7, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(12, HashtagPageComponent_div_12_Template, 5, 1, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ctx.hashtag, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Posts tagged with #", ctx.hashtag, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.posts.length, " posts");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.posts.length > 0)("ngIfElse", _r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.relatedHashtags.length > 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, RouterLink], styles: ["\n\n.hashtag-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.hashtag-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 15px;\n}\n.hashtag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin: 0 0 1rem 0;\n  font-weight: 700;\n}\n.hashtag-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n  opacity: 0.9;\n}\n.hashtag-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n.post-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.posts-container[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.post-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n.post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.post-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 0;\n}\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.author-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n.post-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.post-content[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.post-excerpt[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.post-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tag[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: opacity 0.3s ease;\n}\n.tag[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.post-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #eee;\n  color: #666;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.no-posts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n}\n.no-posts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.create-post-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1rem 2rem;\n  border-radius: 25px;\n  text-decoration: none;\n  font-weight: 600;\n  margin-top: 1rem;\n  transition: transform 0.3s ease;\n}\n.create-post-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.related-hashtags[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 2rem;\n  border-radius: 15px;\n}\n.related-hashtags[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n.hashtag-cloud[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem;\n}\n.hashtag-link[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  text-decoration: none;\n  border: 2px solid #667eea;\n  transition: all 0.3s ease;\n}\n.hashtag-link[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n}\n@media (max-width: 768px) {\n  .hashtag-page[_ngcontent-%COMP%] {\n    padding: 1rem 0.5rem;\n  }\n  .hashtag-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .hashtag-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .post-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=hashtag-page.component.css.map */"] });
var HashtagPageComponent = _HashtagPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HashtagPageComponent, { className: "HashtagPageComponent", filePath: "src/app/components/hashtag-page/hashtag-page.component.ts", lineNumber: 15 });
})();

// src/app/services/comments.service.ts
var _CommentsService = class _CommentsService {
  constructor() {
    this.commentsSubject = new BehaviorSubject([]);
    this.comments$ = this.commentsSubject.asObservable();
    this.mockComments = [
      {
        id: "1",
        postId: "1",
        userId: "1",
        userName: "dogLover123",
        userAvatar: "\u{1F415}",
        content: "Great article! My Golden Retriever loves the recommended food.",
        date: /* @__PURE__ */ new Date("2024-01-16"),
        likes: 5,
        likedBy: [],
        replies: [],
        level: 0,
        shares: 0
      },
      {
        id: "2",
        postId: "2",
        userId: "1",
        userName: "dogLover123",
        userAvatar: "\u{1F415}",
        content: "These tips really helped me create a safer environment for my puppy.",
        date: /* @__PURE__ */ new Date("2024-01-11"),
        likes: 3,
        likedBy: [],
        replies: [],
        level: 0,
        shares: 0
      }
    ];
    this.commentsSubject.next(this.mockComments);
  }
  getCommentsByPostId(postId) {
    const postComments = this.mockComments.filter((comment) => comment.postId === postId);
    return of(postComments);
  }
  addComment(postId, content, userId, userName, userAvatar) {
    const newComment = {
      id: Date.now().toString(),
      postId,
      userId,
      userName,
      userAvatar: userAvatar || "\u{1F436}",
      content,
      date: /* @__PURE__ */ new Date(),
      likes: 0,
      likedBy: [],
      replies: [],
      level: 0,
      shares: 0
    };
    this.mockComments.push(newComment);
    this.commentsSubject.next([...this.mockComments]);
    return of(newComment);
  }
  addReply(postId, content, parentId, userId, userName, userAvatar) {
    const parentComment = this.mockComments.find((c) => c.id === parentId);
    const parentLevel = parentComment ? parentComment.level : 0;
    const newReply = {
      id: Date.now().toString(),
      postId,
      userId,
      userName,
      userAvatar: userAvatar || "\u{1F436}",
      content,
      date: /* @__PURE__ */ new Date(),
      likes: 0,
      likedBy: [],
      parentId,
      replies: [],
      level: Math.min(parentLevel + 1, 2),
      // Max 3 levels (0, 1, 2)
      shares: 0
    };
    this.mockComments.push(newReply);
    this.commentsSubject.next([...this.mockComments]);
    return of(newReply);
  }
  likeComment(commentId) {
    const comment = this.mockComments.find((c) => c.id === commentId);
    if (comment) {
      comment.likes++;
      this.commentsSubject.next([...this.mockComments]);
      return of(comment);
    }
    throw new Error("Comment not found");
  }
};
_CommentsService.\u0275fac = function CommentsService_Factory(t) {
  return new (t || _CommentsService)();
};
_CommentsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommentsService, factory: _CommentsService.\u0275fac, providedIn: "root" });
var CommentsService = _CommentsService;

// src/app/components/post-detail/post-detail.component.ts
var _c07 = (a1) => ["/hashtag", a1];
function PostDetailComponent_div_0_a_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c07, tag_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r5, " ");
  }
}
function PostDetailComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "textarea", 26);
    \u0275\u0275listener("ngModelChange", function PostDetailComponent_div_0_div_26_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.newComment = $event);
    });
    \u0275\u0275text(6, "          ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function PostDetailComponent_div_0_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r8 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r8.addComment());
    });
    \u0275\u0275text(8, " Post Comment ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentUser.avatar || "\u{1F464}", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.newComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.newComment || !ctx_r2.newComment.trim());
  }
}
function PostDetailComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2, "Please ");
    \u0275\u0275elementStart(3, "a", 29);
    \u0275\u0275text(4, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " to leave a comment.");
    \u0275\u0275elementEnd()();
  }
}
function PostDetailComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33)(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37)(13, "button", 38);
    \u0275\u0275listener("click", function PostDetailComponent_div_0_div_29_Template_button_click_13_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r11);
      const comment_r9 = restoredCtx.$implicit;
      const ctx_r10 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r10.likeComment(comment_r9.id));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const comment_r9 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", comment_r9.userAvatar || "\u{1F464}", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comment_r9.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, comment_r9.date, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r9.content);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("liked", ctx_r4.hasLikedComment(comment_r9.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F44D} ", comment_r9.likes, " ");
  }
}
function PostDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "article", 2)(2, "div", 3)(3, "h1", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275element(15, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "span", 14);
    \u0275\u0275text(21, "Tags:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, PostDetailComponent_div_0_a_22_Template, 2, 4, "a", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "h3");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, PostDetailComponent_div_0_div_26_Template, 9, 3, "div", 17)(27, PostDetailComponent_div_0_div_27_Template, 6, 0, "div", 18);
    \u0275\u0275elementStart(28, "div", 19);
    \u0275\u0275template(29, PostDetailComponent_div_0_div_29_Template, 15, 10, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.post.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("By ", ctx_r0.post.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 14, ctx_r0.post.date, "fullDate"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("category-" + ctx_r0.post.category);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 17, ctx_r0.post.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.post.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.post.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.post.content, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.post.tags);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Comments (", ctx_r0.comments.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.currentUser);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.comments);
  }
}
var _PostDetailComponent = class _PostDetailComponent {
  constructor(route, router, dogService, commentsService, authService) {
    this.route = route;
    this.router = router;
    this.dogService = dogService;
    this.commentsService = commentsService;
    this.authService = authService;
    this.post = null;
    this.comments = [];
    this.newComment = "";
    this.currentUser = null;
    this.likedComments = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    this.route.params.subscribe((params) => {
      const postId = params["id"];
      this.loadPost(postId);
      this.loadComments(postId);
    });
  }
  loadPost(postId) {
    this.dogService.getPostById(postId).subscribe((post) => {
      this.post = post;
    });
  }
  loadComments(postId) {
    this.commentsService.getCommentsByPostId(postId).subscribe((comments) => {
      this.comments = comments;
    });
  }
  addComment() {
    if (!this.newComment.trim() || !this.currentUser || !this.post)
      return;
    this.commentsService.addComment(this.post.id, this.newComment, this.currentUser.id, this.currentUser.username, this.currentUser.avatar).subscribe((comment) => {
      this.comments.push(comment);
      this.newComment = "";
    });
  }
  likeComment(commentId) {
    this.commentsService.likeComment(commentId).subscribe(() => {
      this.likedComments.add(commentId);
      const comment = this.comments.find((c) => c.id === commentId);
      if (comment) {
        comment.likes++;
      }
    });
  }
  hasLikedComment(commentId) {
    return this.likedComments.has(commentId);
  }
};
_PostDetailComponent.\u0275fac = function PostDetailComponent_Factory(t) {
  return new (t || _PostDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DogService), \u0275\u0275directiveInject(CommentsService), \u0275\u0275directiveInject(AuthService));
};
_PostDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostDetailComponent, selectors: [["app-post-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "post-detail-container", 4, "ngIf"], [1, "post-detail-container"], [1, "post-article"], [1, "post-header"], [1, "post-title"], [1, "post-meta"], [1, "author"], [1, "date"], [1, "category-badge"], [1, "post-image-container"], [1, "post-image", 3, "src", "alt"], [1, "post-content"], [1, "post-body"], [1, "post-tags"], [1, "tags-label"], ["class", "tag-link", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "comments-section"], ["class", "add-comment", 4, "ngIf"], ["class", "login-prompt", 4, "ngIf"], [1, "comments-list"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "tag-link", 3, "routerLink"], [1, "add-comment"], [1, "comment-form"], [1, "user-avatar"], [1, "input-container"], ["placeholder", "Write a comment...", "rows", "3", 1, "comment-input", 3, "ngModel", "ngModelChange"], [1, "comment-btn", 3, "disabled", "click"], [1, "login-prompt"], ["href", "#", 1, "login-link"], [1, "comment"], [1, "comment-avatar"], [1, "comment-content"], [1, "comment-header"], [1, "comment-author"], [1, "comment-date"], [1, "comment-text"], [1, "comment-actions"], [1, "like-btn", 3, "click"]], template: function PostDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PostDetailComponent_div_0_Template, 30, 19, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.post);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.post-detail-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.post-article[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.post-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 1px solid #eee;\n}\n.post-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 1rem 0;\n  color: #333;\n  line-height: 1.2;\n}\n.post-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.author[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.category-badge[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.8rem;\n  border-radius: 15px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n}\n.category-breeds[_ngcontent-%COMP%] {\n  background: #667eea;\n}\n.category-food[_ngcontent-%COMP%] {\n  background: #f093fb;\n}\n.category-environment[_ngcontent-%COMP%] {\n  background: #4facfe;\n}\n.category-training[_ngcontent-%COMP%] {\n  background: #43e97b;\n}\n.category-health[_ngcontent-%COMP%] {\n  background: #fa709a;\n}\n.category-grooming[_ngcontent-%COMP%] {\n  background: #ffcd3c;\n}\n.post-image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n}\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.post-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.post-body[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: #444;\n  margin-bottom: 2rem;\n}\n.post-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n}\n.tags-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #666;\n}\n.tag-link[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 0.3rem 0.8rem;\n  border-radius: 15px;\n  text-decoration: none;\n  color: #667eea;\n  font-size: 0.9rem;\n  transition: all 0.3s;\n}\n.tag-link[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n}\n.comments-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  padding: 2rem;\n}\n.comments-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  color: #333;\n}\n.add-comment[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.comment-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n.input-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.comment-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  resize: vertical;\n  font-family: inherit;\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n.comment-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.comment-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: opacity 0.3s;\n}\n.comment-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n}\n.login-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n}\n.comments-list[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.comment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.comment[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.comment-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.comment-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.comment-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.comment-date[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.9rem;\n}\n.comment-text[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #555;\n  line-height: 1.5;\n}\n.comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.like-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #888;\n  padding: 0.3rem 0.8rem;\n  border-radius: 6px;\n  transition: all 0.3s;\n}\n.like-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.like-btn.liked[_ngcontent-%COMP%] {\n  color: #667eea;\n  background: #f0f0ff;\n}\n@media (max-width: 768px) {\n  .post-detail-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .post-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .post-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=post-detail.component.css.map */"] });
var PostDetailComponent = _PostDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostDetailComponent, { className: "PostDetailComponent", filePath: "src/app/components/post-detail/post-detail.component.ts", lineNumber: 18 });
})();

// src/app/components/community/community.component.ts
function CommunityComponent_div_6_div_3_div_16_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
  if (rf & 2) {
    const media_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", media_r8.url, \u0275\u0275sanitizeUrl)("alt", media_r8.caption);
  }
}
function CommunityComponent_div_6_div_3_div_16_div_1_video_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 33);
  }
  if (rf & 2) {
    const media_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", media_r8.url, \u0275\u0275sanitizeUrl);
  }
}
function CommunityComponent_div_6_div_3_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, CommunityComponent_div_6_div_3_div_16_div_1_img_1_Template, 1, 2, "img", 28)(2, CommunityComponent_div_6_div_3_div_16_div_1_video_2_Template, 1, 1, "video", 29);
    \u0275\u0275elementStart(3, "button", 30);
    \u0275\u0275listener("click", function CommunityComponent_div_6_div_3_div_16_div_1_Template_button_click_3_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r15);
      const i_r9 = restoredCtx.index;
      const ctx_r14 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r14.removeMedia(i_r9));
    });
    \u0275\u0275text(4, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const media_r8 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", media_r8.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", media_r8.type === "video");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r7.getMediaIcon(media_r8.type));
  }
}
function CommunityComponent_div_6_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, CommunityComponent_div_6_div_3_div_16_div_1_Template, 7, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r6.newPost.media);
  }
}
function CommunityComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "\u{1F4DD} Share with the Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 13);
    \u0275\u0275listener("ngSubmit", function CommunityComponent_div_6_div_3_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r16 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r16.submitPost());
    });
    \u0275\u0275elementStart(4, "div", 14)(5, "label", 15);
    \u0275\u0275text(6, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 16);
    \u0275\u0275listener("ngModelChange", function CommunityComponent_div_6_div_3_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r18 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r18.newPost.title = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "label", 17);
    \u0275\u0275text(10, "Content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 18);
    \u0275\u0275listener("ngModelChange", function CommunityComponent_div_6_div_3_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r19 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r19.newPost.content = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "label", 19);
    \u0275\u0275text(14, "Photos & Videos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 20);
    \u0275\u0275listener("change", function CommunityComponent_div_6_div_3_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r20 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r20.onMediaSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CommunityComponent_div_6_div_3_div_16_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "label", 22);
    \u0275\u0275text(19, "Tags (comma-separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 23);
    \u0275\u0275listener("ngModelChange", function CommunityComponent_div_6_div_3_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r21 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r21.newPost.tagsString = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 24);
    \u0275\u0275text(22, " \u{1F680} Submit Post for Review ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r5.newPost.title);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r5.newPost.content);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r5.newPost.media.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r5.newPost.tagsString);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r5.newPost.title || !ctx_r5.newPost.content);
  }
}
function CommunityComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275listener("click", function CommunityComponent_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.showCreatePost = !ctx_r22.showCreatePost);
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CommunityComponent_div_6_div_3_Template, 23, 5, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.showCreatePost ? "\u274C Cancel" : "\u2728 Create New Post", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showCreatePost);
  }
}
function CommunityComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "h2");
    \u0275\u0275text(2, "\u{1F510} Join Our Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Please log in to share your posts and connect with other dog lovers.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275text(6, "Log In");
    \u0275\u0275elementEnd()();
  }
}
function CommunityComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function CommunityComponent_button_9_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r26);
      const status_r24 = restoredCtx.$implicit;
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.filterByStatus(status_r24.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedStatus === status_r24.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r24.label, " ");
  }
}
function CommunityComponent_article_11_img_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    const post_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", post_r27.image, \u0275\u0275sanitizeUrl)("alt", post_r27.title);
  }
}
function CommunityComponent_article_11_div_22_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
  if (rf & 2) {
    const media_r37 = \u0275\u0275nextContext().$implicit;
    const post_r27 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", media_r37.url, \u0275\u0275sanitizeUrl)("alt", media_r37.caption || post_r27.title);
  }
}
function CommunityComponent_article_11_div_22_div_1_video_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "video", 65);
    \u0275\u0275listener("play", function CommunityComponent_article_11_div_22_div_1_video_2_Template_video_play_0_listener() {
      \u0275\u0275restoreView(_r44);
      const post_r27 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r42 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r42.trackVideoView(post_r27));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", media_r37.url, \u0275\u0275sanitizeUrl);
  }
}
function CommunityComponent_article_11_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, CommunityComponent_article_11_div_22_div_1_img_1_Template, 1, 2, "img", 60)(2, CommunityComponent_article_11_div_22_div_1_video_2_Template, 1, 1, "video", 61);
    \u0275\u0275elementStart(3, "div", 62)(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const media_r37 = ctx.$implicit;
    const ctx_r36 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", media_r37.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", media_r37.type === "video");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r36.getMediaIcon(media_r37.type));
  }
}
function CommunityComponent_article_11_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, CommunityComponent_article_11_div_22_div_1_Template, 6, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", post_r27.media);
  }
}
var _c08 = (a1) => ["/hashtag", a1];
function CommunityComponent_article_11_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66)(1, "a", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r47 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c08, tag_r47));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r47, "");
  }
}
function CommunityComponent_article_11_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3A5} ", post_r27.videoViews, "");
  }
}
function CommunityComponent_article_11_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementStart(2, "div", 69)(3, "textarea", 70);
    \u0275\u0275listener("ngModelChange", function CommunityComponent_article_11_div_39_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r50);
      const post_r27 = \u0275\u0275nextContext().$implicit;
      const ctx_r49 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r49.newComments[post_r27.id] = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_39_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r50);
      const post_r27 = \u0275\u0275nextContext().$implicit;
      const ctx_r52 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r52.addComment(post_r27.id));
    });
    \u0275\u0275text(5, " Post ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r32 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r32.currentUser.avatar, \u0275\u0275sanitizeUrl)("alt", ctx_r32.currentUser.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r32.newComments[post_r27.id]);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r32.newComments[post_r27.id] || !ctx_r32.newComments[post_r27.id].trim());
  }
}
function CommunityComponent_article_11_div_41_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r61);
      const comment_r55 = \u0275\u0275nextContext().$implicit;
      const ctx_r59 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r59.toggleReply(comment_r55.id));
    });
    \u0275\u0275text(1, " \u{1F4AC} Reply ");
    \u0275\u0275elementEnd();
  }
}
function CommunityComponent_article_11_div_41_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "textarea", 86);
    \u0275\u0275listener("ngModelChange", function CommunityComponent_article_11_div_41_div_16_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r63);
      const comment_r55 = \u0275\u0275nextContext().$implicit;
      const ctx_r62 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r62.replyTexts[comment_r55.id] = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 87)(3, "button", 88);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r63);
      const comment_r55 = \u0275\u0275nextContext().$implicit;
      const post_r27 = \u0275\u0275nextContext().$implicit;
      const ctx_r65 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r65.addReply(comment_r55.id, post_r27.id));
    });
    \u0275\u0275text(4, " Reply ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 89);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r63);
      const comment_r55 = \u0275\u0275nextContext().$implicit;
      const ctx_r68 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r68.toggleReply(comment_r55.id));
    });
    \u0275\u0275text(6, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r55 = \u0275\u0275nextContext().$implicit;
    const ctx_r57 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r57.replyTexts[comment_r55.id]);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r57.replyTexts[comment_r55.id] || !ctx_r57.replyTexts[comment_r55.id].trim());
  }
}
function CommunityComponent_article_11_div_41_div_17_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_div_17_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r77);
      const reply_r71 = \u0275\u0275nextContext().$implicit;
      const ctx_r75 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r75.toggleReply(reply_r71.id));
    });
    \u0275\u0275text(1, " \u{1F4AC} Reply ");
    \u0275\u0275elementEnd();
  }
}
function CommunityComponent_article_11_div_41_div_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "textarea", 86);
    \u0275\u0275listener("ngModelChange", function CommunityComponent_article_11_div_41_div_17_div_15_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r79);
      const reply_r71 = \u0275\u0275nextContext().$implicit;
      const ctx_r78 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r78.replyTexts[reply_r71.id] = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 87)(3, "button", 88);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_div_17_div_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r79);
      const reply_r71 = \u0275\u0275nextContext().$implicit;
      const post_r27 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r81 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r81.addReply(reply_r71.id, post_r27.id));
    });
    \u0275\u0275text(4, " Reply ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 89);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_div_17_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r79);
      const reply_r71 = \u0275\u0275nextContext().$implicit;
      const ctx_r84 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r84.toggleReply(reply_r71.id));
    });
    \u0275\u0275text(6, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reply_r71 = \u0275\u0275nextContext().$implicit;
    const ctx_r73 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r73.replyTexts[reply_r71.id]);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r73.replyTexts[reply_r71.id] || !ctx_r73.replyTexts[reply_r71.id].trim());
  }
}
function CommunityComponent_article_11_div_41_div_17_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementStart(2, "div", 74)(3, "div", 75)(4, "span", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "time", 77);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 78);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 79)(12, "button", 80);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_div_17_div_16_Template_button_click_12_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r89);
      const subReply_r87 = restoredCtx.$implicit;
      const ctx_r88 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r88.likeComment(subReply_r87));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const subReply_r87 = ctx.$implicit;
    const ctx_r74 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("data-level", subReply_r87.level);
    \u0275\u0275advance();
    \u0275\u0275property("src", subReply_r87.userAvatar || "\u{1F464}", \u0275\u0275sanitizeUrl)("alt", subReply_r87.userName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(subReply_r87.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 10, subReply_r87.date, "MMM d, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subReply_r87.content);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("liked", ctx_r74.isCommentLiked(subReply_r87));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r74.isCommentLiked(subReply_r87) ? "\u2764\uFE0F" : "\u{1F90D}", " ", subReply_r87.likes, " ");
  }
}
function CommunityComponent_article_11_div_41_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementStart(2, "div", 74)(3, "div", 75)(4, "span", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "time", 77);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 78);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 79)(12, "button", 80);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_div_17_Template_button_click_12_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r91);
      const reply_r71 = restoredCtx.$implicit;
      const ctx_r90 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r90.likeComment(reply_r71));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CommunityComponent_article_11_div_41_div_17_button_14_Template, 2, 0, "button", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CommunityComponent_article_11_div_41_div_17_div_15_Template, 7, 2, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CommunityComponent_article_11_div_41_div_17_div_16_Template, 14, 13, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reply_r71 = ctx.$implicit;
    const ctx_r58 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-level", reply_r71.level);
    \u0275\u0275advance();
    \u0275\u0275property("src", reply_r71.userAvatar || "\u{1F464}", \u0275\u0275sanitizeUrl)("alt", reply_r71.userName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(reply_r71.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 13, reply_r71.date, "MMM d, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reply_r71.content);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("liked", ctx_r58.isCommentLiked(reply_r71));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r58.isCommentLiked(reply_r71) ? "\u2764\uFE0F" : "\u{1F90D}", " ", reply_r71.likes, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reply_r71.level < 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r58.replyingTo[reply_r71.id] && ctx_r58.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", reply_r71.replies);
  }
}
function CommunityComponent_article_11_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "img", 68);
    \u0275\u0275elementStart(3, "div", 74)(4, "div", 75)(5, "span", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "time", 77);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 78);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 79)(13, "button", 80);
    \u0275\u0275listener("click", function CommunityComponent_article_11_div_41_Template_button_click_13_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r93);
      const comment_r55 = restoredCtx.$implicit;
      const ctx_r92 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r92.likeComment(comment_r55));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CommunityComponent_article_11_div_41_button_15_Template, 2, 0, "button", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CommunityComponent_article_11_div_41_div_16_Template, 7, 2, "div", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CommunityComponent_article_11_div_41_div_17_Template, 17, 16, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r55 = ctx.$implicit;
    const ctx_r33 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-level", comment_r55.level);
    \u0275\u0275advance();
    \u0275\u0275property("src", comment_r55.userAvatar || "\u{1F464}", \u0275\u0275sanitizeUrl)("alt", comment_r55.userName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comment_r55.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 13, comment_r55.date, "MMM d, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r55.content);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("liked", ctx_r33.isCommentLiked(comment_r55));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r33.isCommentLiked(comment_r55) ? "\u2764\uFE0F" : "\u{1F90D}", " ", comment_r55.likes, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r55.level < 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r33.replyingTo[comment_r55.id] && ctx_r33.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", comment_r55.replies);
  }
}
function CommunityComponent_article_11_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p");
    \u0275\u0275text(2, "Please ");
    \u0275\u0275elementStart(3, "a", 93);
    \u0275\u0275text(4, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " to add comments.");
    \u0275\u0275elementEnd()();
  }
}
var _c15 = (a1) => ["/profile", a1];
var _c2 = (a1) => ["/post", a1];
function CommunityComponent_article_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 37)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "div", 40);
    \u0275\u0275element(6, "img", 41);
    \u0275\u0275elementStart(7, "div")(8, "h4")(9, "a", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "time");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 43)(15, "h3")(16, "a", 42);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, CommunityComponent_article_11_img_21_Template, 1, 2, "img", 44)(22, CommunityComponent_article_11_div_22_Template, 2, 1, "div", 45);
    \u0275\u0275elementStart(23, "div", 46);
    \u0275\u0275template(24, CommunityComponent_article_11_span_24_Template, 3, 4, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 48)(26, "div", 49)(27, "button", 50);
    \u0275\u0275listener("click", function CommunityComponent_article_11_Template_button_click_27_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r95);
      const post_r27 = restoredCtx.$implicit;
      const ctx_r94 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r94.likePost(post_r27));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 51);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 51);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, CommunityComponent_article_11_span_33_Template, 2, 1, "span", 52);
    \u0275\u0275elementStart(34, "button", 53);
    \u0275\u0275listener("click", function CommunityComponent_article_11_Template_button_click_34_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r95);
      const post_r27 = restoredCtx.$implicit;
      const ctx_r96 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r96.sharePost(post_r27));
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 54)(37, "h5");
    \u0275\u0275text(38, "\u{1F4AC} Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, CommunityComponent_article_11_div_39_Template, 6, 4, "div", 55);
    \u0275\u0275elementStart(40, "div", 56);
    \u0275\u0275template(41, CommunityComponent_article_11_div_41_Template, 18, 16, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, CommunityComponent_article_11_div_42_Template, 6, 0, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r27 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(post_r27.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 26, post_r27.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", post_r27.author.avatar, \u0275\u0275sanitizeUrl)("alt", post_r27.author.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(35, _c15, post_r27.author.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r27.author.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 28, post_r27.createdAt, "MMM d, h:mm a"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(37, _c2, post_r27.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r27.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(20, 31, post_r27.content, 0, 200), "", post_r27.content.length > 200 ? "..." : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", post_r27.image && post_r27.media.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", post_r27.media.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", post_r27.tags);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("liked", ctx_r3.isPostLiked(post_r27));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r3.isPostLiked(post_r27) ? "\u2764\uFE0F" : "\u{1F90D}", " ", post_r27.likes, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", post_r27.commentsCount || 0, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F441}\uFE0F ", post_r27.views || 0, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", post_r27.videoViews);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F517} ", post_r27.shares || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.currentUser);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.postComments[post_r27.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.currentUser);
  }
}
function CommunityComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "p");
    \u0275\u0275text(2, "No posts found with the selected filter.");
    \u0275\u0275elementEnd()();
  }
}
var _CommunityComponent = class _CommunityComponent {
  constructor(dogService, authService, commentsService) {
    this.dogService = dogService;
    this.authService = authService;
    this.commentsService = commentsService;
    this.currentUser = null;
    this.communityPosts = [];
    this.filteredPosts = [];
    this.selectedStatus = "approved";
    this.showCreatePost = false;
    this.newPost = {
      title: "",
      content: "",
      tagsString: "",
      media: []
    };
    this.postComments = {};
    this.newComments = {};
    this.replyingTo = {};
    this.replyTexts = {};
    this.statusFilters = [
      { value: "approved", label: "Approved Posts" },
      { value: "all", label: "All Posts" },
      { value: "pending", label: "Pending Review" }
    ];
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    this.loadCommunityPosts();
  }
  loadCommunityPosts() {
    this.dogService.getCommunityPosts().subscribe((posts) => {
      this.communityPosts = posts;
      this.filterByStatus(this.selectedStatus);
      posts.forEach((post) => {
        this.loadPostComments(post.id);
      });
    });
  }
  loadPostComments(postId) {
    this.commentsService.getCommentsByPostId(postId).subscribe((comments) => {
      this.postComments[postId] = this.organizeComments(comments);
    });
  }
  organizeComments(comments) {
    const commentMap = /* @__PURE__ */ new Map();
    const rootComments = [];
    comments.forEach((comment) => {
      comment.replies = [];
      commentMap.set(comment.id, comment);
    });
    comments.forEach((comment) => {
      if (comment.parentId && commentMap.has(comment.parentId)) {
        const parent = commentMap.get(comment.parentId);
        if (parent.level < 2) {
          comment.level = parent.level + 1;
          parent.replies.push(comment);
        }
      } else {
        comment.level = 0;
        rootComments.push(comment);
      }
    });
    return rootComments;
  }
  filterByStatus(status) {
    this.selectedStatus = status;
    if (status === "all") {
      this.filteredPosts = this.communityPosts;
    } else {
      this.filteredPosts = this.communityPosts.filter((post) => post.status === status);
    }
  }
  onMediaSelect(event) {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const mediaItem = {
          id: Date.now().toString() + Math.random(),
          type: file.type.startsWith("video/") ? "video" : "image",
          url: e.target?.result,
          caption: ""
        };
        this.newPost.media.push(mediaItem);
      };
      reader.readAsDataURL(file);
    });
  }
  removeMedia(index) {
    this.newPost.media.splice(index, 1);
  }
  submitPost() {
    if (!this.currentUser || !this.newPost.title || !this.newPost.content)
      return;
    const tags = this.newPost.tagsString.split(",").map((tag) => tag.trim()).filter((tag) => tag);
    const postData = {
      title: this.newPost.title,
      content: this.newPost.content,
      tags,
      media: this.newPost.media,
      authorId: this.currentUser.id,
      status: "pending"
    };
    this.dogService.submitCommunityPost(postData).subscribe((post) => {
      this.communityPosts.unshift(post);
      this.filterByStatus(this.selectedStatus);
      this.newPost = {
        title: "",
        content: "",
        tagsString: "",
        media: []
      };
      this.showCreatePost = false;
      alert("Your post has been submitted for review!");
    });
  }
  likePost(post) {
    if (!this.currentUser)
      return;
    this.dogService.likePost(post.id, this.currentUser.id).subscribe((updatedPost) => {
      const index = this.filteredPosts.findIndex((p) => p.id === post.id);
      if (index !== -1) {
        this.filteredPosts[index] = updatedPost;
      }
    });
  }
  sharePost(post) {
    if (!this.currentUser)
      return;
    this.dogService.sharePost(post.id, this.currentUser.id).subscribe(() => {
      post.shares++;
      navigator.share?.({
        title: post.title,
        text: post.content,
        url: window.location.origin + "/post/" + post.id
      }).catch(() => {
        navigator.clipboard.writeText(window.location.origin + "/post/" + post.id);
        alert("Link copied to clipboard!");
      });
    });
  }
  addComment(postId) {
    const content = this.newComments[postId];
    if (!content || !content.trim() || !this.currentUser)
      return;
    this.commentsService.addComment(postId, content, this.currentUser.id, this.currentUser.name, this.currentUser.avatar).subscribe((comment) => {
      if (!this.postComments[postId]) {
        this.postComments[postId] = [];
      }
      this.postComments[postId].push(comment);
      this.newComments[postId] = "";
    });
  }
  addReply(parentCommentId, postId) {
    const content = this.replyTexts[parentCommentId];
    if (!content || !content.trim() || !this.currentUser)
      return;
    this.commentsService.addReply(postId, content, parentCommentId, this.currentUser.id, this.currentUser.name, this.currentUser.avatar).subscribe((reply) => {
      this.loadPostComments(postId);
      this.replyTexts[parentCommentId] = "";
      this.replyingTo[parentCommentId] = false;
    });
  }
  likeComment(comment) {
    if (!this.currentUser)
      return;
    this.commentsService.likeComment(comment.id).subscribe((updatedComment) => {
      Object.assign(comment, updatedComment);
    });
  }
  trackVideoView(post) {
    this.dogService.trackVideoView(post.id).subscribe(() => {
      post.videoViews = (post.videoViews || 0) + 1;
    });
  }
  isPostLiked(post) {
    return this.currentUser ? post.likedBy.includes(this.currentUser.id) : false;
  }
  isCommentLiked(comment) {
    return this.currentUser ? comment.likedBy.includes(this.currentUser.id) : false;
  }
  toggleReply(commentId) {
    this.replyingTo[commentId] = !this.replyingTo[commentId];
  }
  getMediaIcon(type) {
    return type === "video" ? "\u{1F3A5}" : "\u{1F4F7}";
  }
};
_CommunityComponent.\u0275fac = function CommunityComponent_Factory(t) {
  return new (t || _CommunityComponent)(\u0275\u0275directiveInject(DogService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommentsService));
};
_CommunityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityComponent, selectors: [["app-community"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [[1, "community-page"], [1, "community-header"], ["class", "create-post-section", 4, "ngIf"], ["class", "login-prompt", 4, "ngIf"], [1, "posts-filter"], ["class", "filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "posts-grid"], ["class", "post-card", 4, "ngFor", "ngForOf"], ["class", "no-posts", 4, "ngIf"], [1, "create-post-section"], [1, "create-post-btn", 3, "click"], ["class", "create-post-form", 4, "ngIf"], [1, "create-post-form"], [3, "ngSubmit"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "placeholder", "Give your post a catchy title...", "required", "", 3, "ngModel", "ngModelChange"], ["for", "content"], ["id", "content", "name", "content", "placeholder", "Share your story, tips, or ask questions...", "rows", "5", "required", "", 3, "ngModel", "ngModelChange"], ["for", "media"], ["type", "file", "id", "media", "multiple", "", "accept", "image/*,video/*", 1, "media-input", 3, "change"], ["class", "media-preview", 4, "ngIf"], ["for", "tags"], ["type", "text", "id", "tags", "name", "tags", "placeholder", "puppy, training, health, breed-specific...", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "media-preview"], ["class", "media-item", 4, "ngFor", "ngForOf"], [1, "media-item"], [3, "src", "alt", 4, "ngIf"], ["controls", "", 3, "src", 4, "ngIf"], ["type", "button", 1, "remove-media", 3, "click"], [1, "media-type"], [3, "src", "alt"], ["controls", "", 3, "src"], [1, "login-prompt"], [1, "login-btn"], [1, "filter-btn", 3, "click"], [1, "post-card"], [1, "post-status"], [1, "post-header"], [1, "author-info"], [1, "author-avatar", 3, "src", "alt"], [3, "routerLink"], [1, "post-content"], ["class", "post-image", 3, "src", "alt", 4, "ngIf"], ["class", "media-gallery", 4, "ngIf"], [1, "post-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "post-actions"], [1, "action-stats"], [1, "action-btn", "like-btn", 3, "click"], [1, "stat"], ["class", "stat", 4, "ngIf"], [1, "action-btn", "share-btn", 3, "click"], [1, "comments-section"], ["class", "add-comment", 4, "ngIf"], [1, "comments-list"], ["class", "comment-thread", 4, "ngFor", "ngForOf"], [1, "post-image", 3, "src", "alt"], [1, "media-gallery"], ["class", "media-content", 3, "src", "alt", 4, "ngIf"], ["controls", "", "class", "media-content", 3, "src", "play", 4, "ngIf"], [1, "media-overlay"], [1, "media-type-badge"], [1, "media-content", 3, "src", "alt"], ["controls", "", 1, "media-content", 3, "src", "play"], [1, "tag"], [1, "add-comment"], [1, "comment-avatar", 3, "src", "alt"], [1, "comment-input-container"], ["placeholder", "Write a comment...", "rows", "2", 1, "comment-input", 3, "ngModel", "ngModelChange"], [1, "post-comment-btn", 3, "disabled", "click"], [1, "comment-thread"], [1, "comment"], [1, "comment-content"], [1, "comment-header"], [1, "comment-author"], [1, "comment-time"], [1, "comment-text"], [1, "comment-actions"], [1, "like-btn", 3, "click"], ["class", "reply-btn", 3, "click", 4, "ngIf"], ["class", "reply-form", 4, "ngIf"], ["class", "comment reply-level-1", 4, "ngFor", "ngForOf"], [1, "reply-btn", 3, "click"], [1, "reply-form"], ["placeholder", "Write a reply...", "rows", "2", 1, "reply-input", 3, "ngModel", "ngModelChange"], [1, "reply-actions"], [1, "submit-reply-btn", 3, "disabled", "click"], [1, "cancel-reply-btn", 3, "click"], [1, "comment", "reply-level-1"], ["class", "comment reply-level-2", 4, "ngFor", "ngForOf"], [1, "comment", "reply-level-2"], ["href", "#", 1, "login-link"], [1, "no-posts"]], template: function CommunityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
    \u0275\u0275text(3, "\u{1F415} Dog Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Share your dog stories, photos, and videos with fellow dog lovers!");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CommunityComponent_div_6_Template, 4, 2, "div", 2)(7, CommunityComponent_div_7_Template, 7, 0, "div", 3);
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275template(9, CommunityComponent_button_9_Template, 2, 3, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 6);
    \u0275\u0275template(11, CommunityComponent_article_11_Template, 43, 39, "article", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CommunityComponent_div_12_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.currentUser);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.statusFilters);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.filteredPosts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredPosts.length === 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, TitleCasePipe, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ['\n\n.community-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.community-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 3rem 2rem;\n  border-radius: 20px;\n}\n.community-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 2.5rem;\n}\n.create-post-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.create-post-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 25px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  display: block;\n  margin: 0 auto 2rem auto;\n}\n.create-post-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.create-post-form[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  padding: 2rem;\n  margin-top: 1rem;\n}\n.create-post-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 2rem 0;\n  color: #333;\n  text-align: center;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e1e5e9;\n  border-radius: 12px;\n  font-size: 1rem;\n  transition: border-color 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.media-input[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 2px dashed #e1e5e9;\n  border-radius: 12px;\n  cursor: pointer;\n  text-align: center;\n}\n.media-preview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.media-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.media-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-item[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.remove-media[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n.media-type[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  left: 0.5rem;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2ed573 0%,\n      #26d065 100%);\n  color: white;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 25px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  display: block;\n  margin: 0 auto;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-prompt[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  padding: 3rem;\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.login-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 25px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.posts-filter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #667eea;\n  background: white;\n  color: #667eea;\n  border-radius: 25px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.filter-btn.active[_ngcontent-%COMP%], .filter-btn[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n  transform: translateY(-2px);\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n.post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  padding: 0;\n  overflow: hidden;\n  transition: transform 0.3s ease;\n  position: relative;\n}\n.post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.post-status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  z-index: 10;\n}\n.post-status.approved[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2ed573,\n      #26d065);\n  color: white;\n}\n.post-status.pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffa502,\n      #ff6348);\n  color: white;\n}\n.post-status.rejected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff4757,\n      #ff3742);\n  color: white;\n}\n.post-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 0 1.5rem;\n}\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.author-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n.author-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease;\n}\n.author-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.author-info[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.post-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.post-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin: 1rem 0;\n}\n.media-gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  margin: 1rem 0;\n}\n.media-gallery[_ngcontent-%COMP%]   .media-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 16/9;\n}\n.media-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.media-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n.media-type-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 1rem;\n}\n.post-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin: 1rem 0;\n}\n.tag[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: opacity 0.3s ease;\n}\n.tag[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.post-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.action-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  border-radius: 20px;\n  transition: all 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #e8e8e8;\n}\n.like-btn.liked[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.comments-section[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  background: #f8f9fa;\n}\n.comments-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  color: #333;\n  font-weight: 600;\n}\n.add-comment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.comment-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.comment-input-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.comment-input[_ngcontent-%COMP%], .reply-input[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e1e5e9;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  resize: vertical;\n  min-height: 60px;\n}\n.comment-input[_ngcontent-%COMP%]:focus, .reply-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.post-comment-btn[_ngcontent-%COMP%], .submit-reply-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  align-self: flex-start;\n}\n.post-comment-btn[_ngcontent-%COMP%]:disabled, .submit-reply-btn[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.comments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.comment-thread[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1rem;\n}\n.comment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.comment[data-level="0"][_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.comment[data-level="1"][_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  border-left: 3px solid #e1e5e9;\n  padding-left: 1rem;\n}\n.comment[data-level="2"][_ngcontent-%COMP%] {\n  margin-left: 4rem;\n  border-left: 3px solid #c1c5c9;\n  padding-left: 1rem;\n}\n.comment-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n  align-items: baseline;\n}\n.comment-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.comment-time[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.8rem;\n}\n.comment-text[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  color: #555;\n  line-height: 1.5;\n}\n.comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.like-btn[_ngcontent-%COMP%], .reply-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8rem;\n  color: #666;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.like-btn[_ngcontent-%COMP%]:hover, .reply-btn[_ngcontent-%COMP%]:hover {\n  background: #e8e8e8;\n}\n.like-btn.liked[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.reply-form[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-left: 3rem;\n}\n.reply-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.cancel-reply-btn[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #666;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.login-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.no-posts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #666;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .community-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .community-header[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .community-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .posts-filter[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .media-gallery[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .action-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n  .comment[data-level="1"][_ngcontent-%COMP%] {\n    margin-left: 1rem;\n  }\n  .comment[data-level="2"][_ngcontent-%COMP%] {\n    margin-left: 2rem;\n  }\n  .reply-form[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n  }\n}\n/*# sourceMappingURL=community.component.css.map */'] });
var CommunityComponent = _CommunityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityComponent, { className: "CommunityComponent", filePath: "src/app/components/community/community.component.ts", lineNumber: 18 });
})();

// src/app/components/admin/admin.component.ts
function AdminComponent_div_0_button_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r8.pendingPosts.length);
  }
}
function AdminComponent_div_0_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AdminComponent_div_0_button_28_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r10);
      const tab_r7 = restoredCtx.$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.setActiveTab(tab_r7.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminComponent_div_0_button_28_span_2_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.activeTab === tab_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r7.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r7.id === "pending");
  }
}
function AdminComponent_div_0_div_29_div_3_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r17, "");
  }
}
var _c09 = (a1) => ["/post", a1];
function AdminComponent_div_0_div_29_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275element(3, "img", 20);
    \u0275\u0275elementStart(4, "div")(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "time");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21);
    \u0275\u0275template(16, AdminComponent_div_0_div_29_div_3_div_1_span_16_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "button", 24);
    \u0275\u0275listener("click", function AdminComponent_div_0_div_29_div_3_div_1_Template_button_click_18_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r19);
      const post_r15 = restoredCtx.$implicit;
      const ctx_r18 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r18.approvePost(post_r15.id));
    });
    \u0275\u0275text(19, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function AdminComponent_div_0_div_29_div_3_div_1_Template_button_click_20_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r19);
      const post_r15 = restoredCtx.$implicit;
      const ctx_r20 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r20.rejectPost(post_r15.id));
    });
    \u0275\u0275text(21, "Reject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 26)(23, "a", 27);
    \u0275\u0275text(24, "View Full");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const post_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r15.author.avatar, \u0275\u0275sanitizeUrl)("alt", post_r15.author.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r15.author.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, post_r15.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(14, 11, post_r15.content, 0, 200), "", post_r15.content.length > 200 ? "..." : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", post_r15.tags);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c09, post_r15.id));
  }
}
function AdminComponent_div_0_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, AdminComponent_div_0_div_29_div_3_div_1_Template, 25, 17, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r11.pendingPosts);
  }
}
function AdminComponent_div_0_div_29_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2, "No posts pending review.");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h2");
    \u0275\u0275text(2, "Posts Pending Review");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminComponent_div_0_div_29_div_3_Template, 2, 1, "div", 13)(4, AdminComponent_div_0_div_29_ng_template_4_Template, 3, 0, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _r13 = \u0275\u0275reference(5);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r4.pendingPosts.length > 0)("ngIfElse", _r13);
  }
}
function AdminComponent_div_0_div_30_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "h3");
    \u0275\u0275text(2, "Create New Post");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 36);
    \u0275\u0275listener("ngSubmit", function AdminComponent_div_0_div_30_div_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r23 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r23.createNewPost());
    });
    \u0275\u0275elementStart(4, "div", 37)(5, "label");
    \u0275\u0275text(6, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 38);
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_0_div_30_div_6_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r25 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r25.newPost.title = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 37)(9, "label");
    \u0275\u0275text(10, "Content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 39);
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_0_div_30_div_6_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r26 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r26.newPost.content = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label");
    \u0275\u0275text(14, "Tags (comma-separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 40);
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_0_div_30_div_6_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r27 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r27.newPost.tagsString = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label");
    \u0275\u0275text(18, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 41);
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_0_div_30_div_6_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r28 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r28.newPost.image = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "button", 43);
    \u0275\u0275text(22, "Create Post");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r21 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r21.newPost.title);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r21.newPost.content);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r21.newPost.tagsString);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r21.newPost.image);
  }
}
function AdminComponent_div_0_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 23)(10, "button", 47);
    \u0275\u0275listener("click", function AdminComponent_div_0_div_30_div_8_Template_button_click_10_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r31);
      const post_r29 = restoredCtx.$implicit;
      const ctx_r30 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r30.editPost(post_r29));
    });
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 48);
    \u0275\u0275listener("click", function AdminComponent_div_0_div_30_div_8_Template_button_click_12_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r31);
      const post_r29 = restoredCtx.$implicit;
      const ctx_r32 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r32.deletePost(post_r29.id));
    });
    \u0275\u0275text(13, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r29 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r29.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", post_r29.author.name, " \u2022 ", \u0275\u0275pipeBind1(6, 6, post_r29.createdAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(post_r29.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r29.status);
  }
}
function AdminComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 30)(2, "h2");
    \u0275\u0275text(3, "All Posts Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function AdminComponent_div_0_div_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r33 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r33.showCreatePost = !ctx_r33.showCreatePost);
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminComponent_div_0_div_30_div_6_Template, 23, 4, "div", 32);
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275template(8, AdminComponent_div_0_div_30_div_8_Template, 14, 8, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r5.showCreatePost ? "Cancel" : "Create New Post", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.showCreatePost);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.totalPosts);
  }
}
function AdminComponent_div_0_div_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "img", 52);
    \u0275\u0275elementStart(2, "div", 53)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 55)(12, "button", 56);
    \u0275\u0275listener("click", function AdminComponent_div_0_div_31_div_4_Template_button_click_12_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r38);
      const user_r36 = restoredCtx.$implicit;
      const ctx_r37 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r37.toggleUserRole(user_r36));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r36 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r36.avatar, \u0275\u0275sanitizeUrl)("alt", user_r36.username);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r36.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", user_r36.username, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r36.email);
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r36.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r36.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r36.role === "admin" ? "Remove Admin" : "Make Admin", " ");
  }
}
function AdminComponent_div_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h2");
    \u0275\u0275text(2, "Users Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49);
    \u0275\u0275template(4, AdminComponent_div_0_div_31_div_4_Template, 14, 9, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r6.users);
  }
}
function AdminComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1");
    \u0275\u0275text(3, "Admin Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Manage posts, users, and community content");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Pending Posts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 5)(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Approved Posts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 5)(18, "h3");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Total Users");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 5)(23, "h3");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Total Posts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 6);
    \u0275\u0275template(28, AdminComponent_div_0_button_28_Template, 3, 4, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, AdminComponent_div_0_div_29_Template, 6, 2, "div", 8)(30, AdminComponent_div_0_div_30_Template, 9, 3, "div", 8)(31, AdminComponent_div_0_div_31_Template, 5, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.pendingPosts.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.approvedPosts.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalUsers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalPosts.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.tabs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "posts");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "users");
  }
}
function AdminComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "h1");
    \u0275\u0275text(2, "Access Denied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You don't have permission to access this page.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 58);
    \u0275\u0275text(6, "Return to Home");
    \u0275\u0275elementEnd()();
  }
}
var _AdminComponent = class _AdminComponent {
  constructor(dogService, authService) {
    this.dogService = dogService;
    this.authService = authService;
    this.currentUser = null;
    this.isAdmin = false;
    this.activeTab = "pending";
    this.totalPosts = [];
    this.pendingPosts = [];
    this.approvedPosts = [];
    this.users = [];
    this.totalUsers = 0;
    this.showCreatePost = false;
    this.newPost = {
      title: "",
      content: "",
      tagsString: "",
      image: ""
    };
    this.tabs = [
      { id: "pending", label: "Pending Posts" },
      { id: "posts", label: "All Posts" },
      { id: "users", label: "Users" }
    ];
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.isAdmin = user?.role === "admin" || false;
      if (this.isAdmin) {
        this.loadAdminData();
      }
    });
  }
  loadAdminData() {
    this.dogService.getDogPosts().subscribe((posts) => {
      this.totalPosts = posts;
      this.pendingPosts = posts.filter((p) => p.status === "pending");
      this.approvedPosts = posts.filter((p) => p.status === "approved");
    });
    this.dogService.getAllUsers().subscribe((users) => {
      this.users = users;
      this.totalUsers = users.length;
    });
  }
  setActiveTab(tabId) {
    this.activeTab = tabId;
  }
  approvePost(postId) {
    this.dogService.updatePostStatus(postId, "approved").subscribe(() => {
      this.loadAdminData();
    });
  }
  rejectPost(postId) {
    this.dogService.updatePostStatus(postId, "rejected").subscribe(() => {
      this.loadAdminData();
    });
  }
  createNewPost() {
    if (!this.newPost.title || !this.newPost.content)
      return;
    const tags = this.newPost.tagsString.split(",").map((tag) => tag.trim()).filter((tag) => tag);
    const postData = {
      title: this.newPost.title,
      content: this.newPost.content,
      tags,
      image: this.newPost.image,
      authorId: this.currentUser?.id || "",
      status: "approved"
    };
    this.dogService.createPost(postData).subscribe(() => {
      this.loadAdminData();
      this.showCreatePost = false;
      this.newPost = { title: "", content: "", tagsString: "", image: "" };
    });
  }
  editPost(post) {
    console.log("Edit post:", post);
  }
  deletePost(postId) {
    if (confirm("Are you sure you want to delete this post?")) {
      this.dogService.deletePost(postId).subscribe(() => {
        this.loadAdminData();
      });
    }
  }
  toggleUserRole(user) {
    const newRole = user.role === "admin" ? "user" : "admin";
    this.dogService.updateUserRole(user.id, newRole).subscribe(() => {
      this.loadAdminData();
    });
  }
};
_AdminComponent.\u0275fac = function AdminComponent_Factory(t) {
  return new (t || _AdminComponent)(\u0275\u0275directiveInject(DogService), \u0275\u0275directiveInject(AuthService));
};
_AdminComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["class", "admin-page", 4, "ngIf", "ngIfElse"], ["notAuthorized", ""], [1, "admin-page"], [1, "admin-header"], [1, "stats-grid"], [1, "stat-card"], [1, "admin-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [1, "tab-btn", 3, "click"], ["class", "badge", 4, "ngIf"], [1, "badge"], [1, "tab-content"], ["class", "posts-grid", 4, "ngIf", "ngIfElse"], ["noPendingPosts", ""], [1, "posts-grid"], ["class", "admin-post-card", 4, "ngFor", "ngForOf"], [1, "admin-post-card"], [1, "post-info"], [1, "author-info"], [1, "author-avatar", 3, "src", "alt"], [1, "post-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "post-actions"], [1, "approve-btn", 3, "click"], [1, "reject-btn", 3, "click"], [1, "view-btn"], [3, "routerLink"], [1, "tag"], [1, "no-content"], [1, "section-header"], [1, "add-btn", 3, "click"], ["class", "create-post-form", 4, "ngIf"], [1, "posts-list"], ["class", "admin-post-item", 4, "ngFor", "ngForOf"], [1, "create-post-form"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["name", "content", "rows", "5", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "tags", 3, "ngModel", "ngModelChange"], ["type", "url", "name", "image", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "submit-btn"], [1, "admin-post-item"], [1, "post-summary"], [1, "status-badge"], [1, "edit-btn", 3, "click"], [1, "delete-btn", 3, "click"], [1, "users-grid"], ["class", "user-card", 4, "ngFor", "ngForOf"], [1, "user-card"], [1, "user-avatar", 3, "src", "alt"], [1, "user-info"], [1, "role-badge"], [1, "user-actions"], [1, "role-btn", 3, "click"], [1, "not-authorized"], ["routerLink", "/"]], template: function AdminComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminComponent_div_0_Template, 32, 8, "div", 0)(1, AdminComponent_ng_template_1_Template, 7, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", ctx.isAdmin)("ngIfElse", _r2);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.admin-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  text-align: center;\n}\n.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 0.5rem 0;\n}\n.admin-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  border-bottom-color: #667eea;\n  color: #667eea;\n}\n.badge[_ngcontent-%COMP%] {\n  background: #ff4757;\n  color: white;\n  border-radius: 50%;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.8rem;\n  margin-left: 0.5rem;\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.admin-post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  display: flex;\n  gap: 1.5rem;\n}\n.post-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.author-avatar[_ngcontent-%COMP%], .user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 120px;\n}\n.approve-btn[_ngcontent-%COMP%], .submit-btn[_ngcontent-%COMP%] {\n  background: #2ed573;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.reject-btn[_ngcontent-%COMP%], .delete-btn[_ngcontent-%COMP%] {\n  background: #ff4757;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.view-btn[_ngcontent-%COMP%], .edit-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.view-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.add-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.create-post-form[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 2rem;\n  border-radius: 12px;\n  margin-bottom: 2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n}\n.posts-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.admin-post-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #eee;\n  border-radius: 8px;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.status-badge[_ngcontent-%COMP%], .role-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.status-badge.approved[_ngcontent-%COMP%], .role-badge.admin[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.rejected[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.role-badge.user[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n}\n.users-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.user-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  text-align: center;\n}\n.role-btn[_ngcontent-%COMP%] {\n  background: #ffa502;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.no-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #666;\n}\n.not-authorized[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n@media (max-width: 768px) {\n  .admin-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .admin-post-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .admin-tabs[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
var AdminComponent = _AdminComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/components/admin/admin.component.ts", lineNumber: 17 });
})();

// src/app/components/breed-detail/breed-detail.component.ts
function BreedDetailComponent_div_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trait_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trait_r7);
  }
}
function BreedDetailComponent_div_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trait_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trait_r8);
  }
}
function BreedDetailComponent_div_0_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2B50");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r9 <= ctx_r5.breed.energyLevel);
  }
}
function BreedDetailComponent_div_0_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F527}");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r10 <= ctx_r6.breed.groomingNeeds);
  }
}
var _c010 = () => [1, 2, 3, 4, 5];
function BreedDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275element(3, "img", 6);
    \u0275\u0275elementStart(4, "div", 7)(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 9)(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "h3");
    \u0275\u0275text(17, "\u{1F3AF} Temperament");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275template(19, BreedDetailComponent_div_0_span_19_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 13)(21, "h3");
    \u0275\u0275text(22, "\u2728 Key Traits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14);
    \u0275\u0275template(24, BreedDetailComponent_div_0_span_24_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "h4");
    \u0275\u0275text(28, "\u{1F4CF} Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 18)(32, "h4");
    \u0275\u0275text(33, "\u23F0 Life Span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 18)(37, "h4");
    \u0275\u0275text(38, "\u26A1 Energy Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 19);
    \u0275\u0275template(40, BreedDetailComponent_div_0_span_40_Template, 2, 2, "span", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 18)(42, "h4");
    \u0275\u0275text(43, "\u2702\uFE0F Grooming Needs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 19);
    \u0275\u0275template(45, BreedDetailComponent_div_0_span_45_Template, 2, 2, "span", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 21)(47, "a", 22);
    \u0275\u0275text(48, "\u{1F519} Back to All Breeds");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.breed.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.breed.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.breed.size);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.breed.name, " \u{1F415}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} Origin: ", ctx_r0.breed.origin, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.breed.description);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.breed.temperament);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.breed.traits);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.breed.size);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.breed.lifeSpan);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(12, _c010));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c010));
  }
}
function BreedDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p");
    \u0275\u0275text(2, "\u{1F415} Loading breed details...");
    \u0275\u0275elementEnd()();
  }
}
function BreedDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2");
    \u0275\u0275text(2, "\u{1F6AB} Breed Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Sorry, we couldn't find that breed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 22);
    \u0275\u0275text(6, "\u{1F519} Back to All Breeds");
    \u0275\u0275elementEnd()();
  }
}
var _BreedDetailComponent = class _BreedDetailComponent {
  constructor(route, dogService) {
    this.route = route;
    this.dogService = dogService;
    this.breed = null;
    this.loading = true;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const breedId = params["id"];
      this.loadBreed(breedId);
    });
  }
  loadBreed(id) {
    this.dogService.getBreedById(id).subscribe((breed) => {
      this.breed = breed;
      this.loading = false;
    });
  }
};
_BreedDetailComponent.\u0275fac = function BreedDetailComponent_Factory(t) {
  return new (t || _BreedDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DogService));
};
_BreedDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreedDetailComponent, selectors: [["app-breed-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["class", "breed-detail", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], [1, "breed-detail"], [1, "breed-header"], [1, "breed-image-container"], [1, "breed-hero-image", 3, "src", "alt"], [1, "breed-badge"], [1, "size-badge"], [1, "breed-info"], [1, "breed-origin"], [1, "breed-description"], [1, "breed-details"], [1, "detail-section"], [1, "trait-tags"], ["class", "trait-tag", 4, "ngFor", "ngForOf"], ["class", "trait-tag secondary", 4, "ngFor", "ngForOf"], [1, "stats-grid"], [1, "stat-card"], [1, "rating"], [3, "active", 4, "ngFor", "ngForOf"], [1, "back-section"], ["routerLink", "/all-breeds", 1, "back-btn"], [1, "trait-tag"], [1, "trait-tag", "secondary"], [1, "loading"], [1, "not-found"]], template: function BreedDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BreedDetailComponent_div_0_Template, 49, 14, "div", 0)(1, BreedDetailComponent_div_1_Template, 3, 0, "div", 1)(2, BreedDetailComponent_div_2_Template, 7, 0, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.loading && ctx.breed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.breed);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n.breed-detail[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.breed-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  margin-bottom: 3rem;\n  align-items: center;\n}\n.breed-image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.breed-hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.breed-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n.size-badge[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: bold;\n}\n.breed-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #333;\n  margin-bottom: 1rem;\n}\n.breed-origin[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #666;\n  margin-bottom: 1.5rem;\n}\n.breed-description[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #555;\n}\n.breed-details[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n.detail-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n}\n.trait-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.trait-tag[_ngcontent-%COMP%] {\n  background: #f0f8ff;\n  color: #667eea;\n  padding: 0.5rem 1rem;\n  border-radius: 15px;\n  border: 2px solid #667eea;\n  font-weight: 500;\n}\n.trait-tag.secondary[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  color: #e53e3e;\n  border-color: #e53e3e;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.stat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #333;\n  font-size: 1.1rem;\n}\n.rating[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  margin: 0 0.1rem;\n}\n.rating[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.back-section[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  text-align: center;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #667eea;\n  color: white;\n  padding: 1rem 2rem;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: bold;\n  transition: all 0.3s ease;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #5a6fd8;\n  transform: translateY(-2px);\n}\n.loading[_ngcontent-%COMP%], .not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .breed-detail[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .breed-header[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .breed-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=breed-detail.component.css.map */"] });
var BreedDetailComponent = _BreedDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreedDetailComponent, { className: "BreedDetailComponent", filePath: "src/app/components/breed-detail/breed-detail.component.ts", lineNumber: 15 });
})();

// src/app/components/all-breeds/all-breeds.component.ts
function AllBreedsComponent_div_21_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trait_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trait_r6);
  }
}
var _c011 = (a1) => ["/breed", a1];
function AllBreedsComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "img", 19);
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23)(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 24);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 25);
    \u0275\u0275template(16, AllBreedsComponent_div_21_div_1_span_16_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const breed_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c011, breed_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", breed_r4.image, \u0275\u0275sanitizeUrl)("alt", breed_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(breed_r4.size.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(breed_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", breed_r4.origin, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u26A1 ", breed_r4.energyLevel, "/5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2702\uFE0F ", breed_r4.groomingNeeds, "/5");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", breed_r4.temperament.slice(0, 2));
  }
}
function AllBreedsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, AllBreedsComponent_div_21_div_1_Template, 17, 11, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredBreeds);
  }
}
function AllBreedsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2, "\u{1F415} Loading amazing breeds...");
    \u0275\u0275elementEnd()();
  }
}
function AllBreedsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "h3");
    \u0275\u0275text(2, "\u{1F6AB} No breeds found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try adjusting your search or filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function AllBreedsComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.clearFilters());
    });
    \u0275\u0275text(6, "\u{1F504} Show All Breeds");
    \u0275\u0275elementEnd()();
  }
}
var _AllBreedsComponent = class _AllBreedsComponent {
  constructor(dogService) {
    this.dogService = dogService;
    this.breeds = [];
    this.filteredBreeds = [];
    this.searchQuery = "";
    this.selectedSize = "";
    this.loading = true;
  }
  ngOnInit() {
    this.loadBreeds();
  }
  loadBreeds() {
    this.dogService.getDogBreeds().subscribe((breeds) => {
      this.breeds = breeds;
      this.filteredBreeds = breeds;
      this.loading = false;
    });
  }
  onSearch() {
    this.filterBreeds();
  }
  onSizeFilter() {
    this.filterBreeds();
  }
  filterBreeds() {
    let filtered = this.breeds;
    if (this.searchQuery.trim()) {
      filtered = filtered.filter((breed) => breed.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || breed.description.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    if (this.selectedSize) {
      filtered = filtered.filter((breed) => breed.size === this.selectedSize);
    }
    this.filteredBreeds = filtered;
  }
  clearFilters() {
    this.searchQuery = "";
    this.selectedSize = "";
    this.filteredBreeds = this.breeds;
  }
};
_AllBreedsComponent.\u0275fac = function AllBreedsComponent_Factory(t) {
  return new (t || _AllBreedsComponent)(\u0275\u0275directiveInject(DogService));
};
_AllBreedsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllBreedsComponent, selectors: [["app-all-breeds"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 5, consts: [[1, "all-breeds-page"], [1, "page-header"], [1, "filters-section"], [1, "search-box"], ["type", "text", "placeholder", "\u{1F50D} Search breeds...", 1, "search-input", 3, "ngModel", "ngModelChange", "input"], [1, "filter-controls"], [1, "size-filter", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "Small"], ["value", "Medium"], ["value", "Large"], [1, "clear-btn", 3, "click"], ["class", "breeds-grid", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], [1, "breeds-grid"], ["class", "breed-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "breed-card", 3, "routerLink"], [1, "breed-avatar"], [1, "breed-image", 3, "src", "alt"], [1, "size-indicator"], [1, "breed-info"], [1, "breed-origin"], [1, "breed-stats"], [1, "stat"], [1, "breed-traits"], ["class", "trait", 4, "ngFor", "ngForOf"], [1, "trait"], [1, "loading"], [1, "no-results"]], template: function AllBreedsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
    \u0275\u0275text(3, "\u{1F415} All Dog Breeds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Discover amazing dog breeds with their unique characteristics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "input", 4);
    \u0275\u0275listener("ngModelChange", function AllBreedsComponent_Template_input_ngModelChange_8_listener($event) {
      return ctx.searchQuery = $event;
    })("input", function AllBreedsComponent_Template_input_input_8_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "select", 6);
    \u0275\u0275listener("ngModelChange", function AllBreedsComponent_Template_select_ngModelChange_10_listener($event) {
      return ctx.selectedSize = $event;
    })("change", function AllBreedsComponent_Template_select_change_10_listener() {
      return ctx.onSizeFilter();
    });
    \u0275\u0275elementStart(11, "option", 7);
    \u0275\u0275text(12, "\u{1F4CF} All Sizes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 8);
    \u0275\u0275text(14, "\u{1F415}\u200D\u{1F9BA} Small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 9);
    \u0275\u0275text(16, "\u{1F415} Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 10);
    \u0275\u0275text(18, "\u{1F415}\u200D\u{1F9AE} Large");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function AllBreedsComponent_Template_button_click_19_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275text(20, "\u{1F5D1}\uFE0F Clear");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, AllBreedsComponent_div_21_Template, 2, 1, "div", 12)(22, AllBreedsComponent_div_22_Template, 3, 0, "div", 13)(23, AllBreedsComponent_div_23_Template, 7, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.selectedSize);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredBreeds.length === 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.all-breeds-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #333;\n  margin-bottom: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #666;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 3rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 2px solid #e1e5e9;\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: border-color 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.size-filter[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 2px solid #e1e5e9;\n  border-radius: 10px;\n  font-size: 1rem;\n  background: white;\n  cursor: pointer;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: #ff6b6b;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: all 0.3s ease;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background: #ff5252;\n  transform: translateY(-2px);\n}\n.breeds-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 2rem;\n}\n.breed-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n.breed-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.breed-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.breed-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 15px;\n}\n.size-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #667eea;\n  color: white;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.breed-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.breed-origin[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n}\n.breed-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 0.25rem 0.5rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  color: #495057;\n}\n.breed-traits[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.trait[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.loading[_ngcontent-%COMP%], .no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .all-breeds-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .breeds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=all-breeds.component.css.map */"] });
var AllBreedsComponent = _AllBreedsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllBreedsComponent, { className: "AllBreedsComponent", filePath: "src/app/components/all-breeds/all-breeds.component.ts", lineNumber: 16 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "category/:category", component: CategoryPageComponent },
  { path: "search", component: SearchPageComponent },
  { path: "hashtag/:tag", component: HashtagPageComponent },
  { path: "post/:id", component: PostDetailComponent },
  { path: "community", component: CommunityComponent },
  { path: "admin", component: AdminComponent },
  { path: "breed/:id", component: BreedDetailComponent },
  { path: "all-breeds", component: AllBreedsComponent },
  { path: "profile/:id", loadComponent: () => import("./chunk-ILJ5GDGN.mjs").then((m) => m.UserProfileComponent) },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-NN543TZR.mjs.map
