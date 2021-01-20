(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n              <h2 class=\"heading\">About Me</h2>\n          </div>\n          <div class=\"col-md-9\">\n              <p>\n                  {{about}}\n              </p>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(dataService) {
        this.dataService = dataService;
        this.about = this.dataService.getAbout();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/achievements/achievements.component.html":
/*!**********************************************************!*\
  !*** ./src/app/achievements/achievements.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"achievements\">\n  <h2 class=\"heading\">Achievements</h2>\n  \n<ng-container *ngFor=\"let achievement of achievements\">\n  <div class=\"education-block\" *ngIf=\"achievement.isActive\">\n    \n    <h3>{{achievement.title}}</h3>\n    <span class=\"education-date\">{{achievement.year}}</span>\n    \n    <h4 style=\"font-size: 14px; margin-top: 32px;\">{{achievement.description}}</h4>\n\n  </div>\n</ng-container>\n</div>"

/***/ }),

/***/ "./src/app/achievements/achievements.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/achievements/achievements.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/achievements/achievements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent(dataService) {
        this.dataService = dataService;
        this.achievements = this.dataService.getAchievements();
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-achievements',
            template: __webpack_require__(/*! ./achievements.component.html */ "./src/app/achievements/achievements.component.html"),
            styles: [__webpack_require__(/*! ./achievements.component.scss */ "./src/app/achievements/achievements.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"mobile-menu-open\" class=\"shadow-large\">\n  <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n</div> -->\n<!-- End #mobile-menu-toggle -->\n\n<router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _lead_lead_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lead/lead.component */ "./src/app/lead/lead.component.ts");
/* harmony import */ var _current_projects_current_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./current-projects/current-projects.component */ "./src/app/current-projects/current-projects.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: 'project-detail/:id', component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProjectDetailComponent"] },
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"], pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _lead_lead_component__WEBPACK_IMPORTED_MODULE_13__["LeadComponent"],
                _current_projects_current_projects_component__WEBPACK_IMPORTED_MODULE_14__["CurrentProjectsComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
                _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_16__["AchievementsComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_17__["CoursesComponent"],
                _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProjectDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"getInTouch\" style=\"text-align: center;\" >\n    <h2>Get in Touch</h2>\n  \n  \n    <ul style=\"margin-left: -45px; list-style-type: none;\">\n      \n    <li> <a id=\"email\" (click)=\"copyEmail();\" href=\"javascript:void(0);\" class=\"email\"></a> </li>\n\n    <div id=\"snackbar\">Copied Email Address</div>\n          \n    <li> <a href=\"{{linkedin}}\" target=\"blank\" class=\"linkedin\"></a> </li>\n  \n  \n    <li> <a href=\"{{hackerrank}}\" target=\"blank\" class=\"hackerrank\"></a> </li>\n  \n  \n    <li>   <a href=\"{{github}}\" target=\"blank\" class=\"github\"></a>   </li>\n  \n\n  </ul>  \n  \n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  font-size: 18px;\n  color: black;\n  padding: 0px;\n  display: inline-block;\n  margin-bottom: 25px; }\n\na {\n  position: relative;\n  right: 0;\n  transition: right ease 0.25s; }\n\na:hover {\n  right: -25px; }\n\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #e6e6e6;\n  /* Black background color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \n    However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\na.email::before {\n  content: 'Email'; }\n\na.email:hover:before {\n  content: 'Copy Email Address'; }\n\na.linkedin:after {\n  content: 'LinkedIn'; }\n\na.github:after {\n  content: 'GitHub'; }\n\na.hackerrank:after {\n  content: 'Hackerrank'; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(dataService) {
        this.dataService = dataService;
        this.linkedin = this.dataService.getLinkedInUrl();
        this.github = this.dataService.getGithubUrl();
        this.hackerrank = this.dataService.getHackerrankUrl();
    }
    ContactComponent.prototype.copyEmail = function () {
        var el = document.createElement('textarea');
        el.value = "kushagrakasliwal47@gmail.com";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000);
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"courses\" class=\"background-alt\">\n  <h2 >Courses and Certificates</h2>\n  <div class=\"container\">\n      <div class=\"row\">\n\n        <ng-container *ngFor=\"let course of courses\">\n          <div class=\"project shadow-large\" *ngIf=\"course.isActive\">\n              <div class=\"project-image\">\n                  <img style=\"width: 200px;\" src=\"{{course.titleImage}}\" />\n              </div>\n              <!-- End .project-image -->\n              <div class=\"project-info\">\n                  <h3 style=\"text-align: left;\">{{course.title}}</h3>\n                  <p style=\"text-align: left;\">\n                      {{course.description}}\n                  </p>\n\n                <p style=\"text-align: left;\" >  <a target=\"blank\" href=\"{{course.courseLink}}\">Certificate</a> </p>\n\n\n              </div>\n              <!-- End .project-info -->\n          </div>\n          <!-- End .project -->\n        </ng-container>\n      </div>\n  </div>\n  <div class=\"card-container\">\n\n  <div class=\"card card-small\" style=\"padding: 24px; padding-right: 16px; background-color: white;\" (click)=\"toggleViewMore()\">\n    <span>{{ showAll ? 'Show Less' : 'Show More' }}  &nbsp; <i class=\"{{showAll ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}}\" aria-hidden=\"true\" id=\"lead-chevron\" ></i></span>\n  </div>\n  </div>\n</div>\n<!-- End #projects -->"

/***/ }),

/***/ "./src/app/courses/courses.component.scss":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(dataService) {
        this.dataService = dataService;
        this.showAll = false;
        this.max = 2;
        this.allCourses = this.dataService.getCourses();
        this.courses = this.allCourses.slice(0, Math.min(this.max, this.allCourses.length));
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent.prototype.toggleViewMore = function () {
        this.showAll = !this.showAll;
        if (this.showAll) {
            this.courses = this.allCourses;
        }
        else {
            this.courses = this.allCourses.slice(0, Math.min(this.max, this.allCourses.length));
        }
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/courses/courses.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/current-projects/current-projects.component.html":
/*!******************************************************************!*\
  !*** ./src/app/current-projects/current-projects.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"current-projects\" class=\"background-alt\">\n  <h2 class=\"heading\">Recent Projects</h2>\n  <div class=\"container\">\n      <div class=\"row\">\n\n          <div class=\"project shadow-large\">\n              <div routerLink=\"/projects/full-scale-music\" routerLinkActive=\"active\" class=\"project-image\">\n                  <img src=\"/assets/projects/full-scale-music/logo.jpg\" />\n              </div>\n              <!-- End .project-image -->\n              <div class=\"project-info\">\n                  <h3 routerLink=\"/projects/full-scale-music\" routerLinkActive=\"active\">Building A Full-Scale Music Streaming Site</h3>\n                  <p>\n                    An upcoming music streaming platform built with Angular, ASP.NET Core, Redux, and the YouTube API. \n                  </p>\n                  <br>\n                  <p>\n                    The website is built upon an innovative new approach to playlist management known as <i>tags</i>.\n                      Tags allow you to make very complex playlists that give full control over shuffling algorithms. \n                      Instead of being limited to shuffling songs, you can shuffle by albums, artists, and genres all mixed in the same playlist.\n                  </p>\n\n                  <a href=\"/assets/projects/full-scale-music/initial-document.pdf\">Project Specification Document</a> --\n                  <a routerLink=\"/projects/full-scale-music\" routerLinkActive=\"active\">Full Project Details</a> --\n                  <a href=\"https://jam-head.firebaseapp.com\" target=\"_blank\">Live Website</a> \n              </div>\n              <!-- End .project-info -->\n          </div>\n          <!-- End .project -->\n\n          <div class=\"project shadow-large\">\n              <div routerLink=\"/projects/achilles\" routerLinkActive=\"active\" class=\"project-image\">\n                  <img src=\"/assets/projects/achilles/logo.jpg\" />\n              </div>\n              <!-- End .project-image -->\n              <div class=\"project-info\">\n                  <h3 routerLink=\"/projects/achilles\" routerLinkActive=\"active\">Achilles Rupture Recovery Application</h3>\n                  \n                  <p>\n                    A mobile application which aids patients through the recovery process of an achilles tendon rupture, similar to a fitness application.                     \n                    Currently being built as a team of four developers, with myself as lead front-end developer, in association with the NHS.\n                  </p>\n                  <br>\n                  <p>\n                    The cross-platform mobile application is being built using the Ionic framework, with ASP.NET as our back-end framework of choice.\n                  </p>\n                  <a href=\"/assets/projects/achilles/initial-document.pdf\">Project Specification Document</a> --\n                  <a routerLink=\"/projects/achilles\" routerLinkActive=\"active\">Full Project Details</a> \n              </div>\n              <!-- End .project-info -->\n          </div>\n          <!-- End .project -->\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/current-projects/current-projects.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/current-projects/current-projects.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/current-projects/current-projects.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/current-projects/current-projects.component.ts ***!
  \****************************************************************/
/*! exports provided: CurrentProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentProjectsComponent", function() { return CurrentProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentProjectsComponent = /** @class */ (function () {
    function CurrentProjectsComponent() {
    }
    CurrentProjectsComponent.prototype.ngOnInit = function () {
    };
    CurrentProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-projects',
            template: __webpack_require__(/*! ./current-projects.component.html */ "./src/app/current-projects/current-projects.component.html"),
            styles: [__webpack_require__(/*! ./current-projects.component.scss */ "./src/app/current-projects/current-projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrentProjectsComponent);
    return CurrentProjectsComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getName = function () {
        return "Kushagra Kasliwal";
    };
    DataService.prototype.getProfession = function () {
        return "Software Engineer";
    };
    DataService.prototype.getLinkedInUrl = function () {
        return "https://www.linkedin.com/in/kushagra-kasliwal-a5b188158/";
    };
    DataService.prototype.getHackerrankUrl = function () {
        return "https://www.hackerrank.com/kushagrakasliwa1";
    };
    DataService.prototype.getGithubUrl = function () {
        return "https://github.com/KushagraK123";
    };
    DataService.prototype.getCourses = function () {
        return [
            {
                "id": 1,
                "isActive": true,
                "title": "Problem Solving Advanced",
                "titleImage": "/assets/courses/hackerrank.jpeg",
                "description": "This covers topics like Data Structures such as Trees, Graph Traversal, using Dynamic Programming and Specialized Algorithms",
                "courseLink": "https://www.hackerrank.com/certificates/802a24538a6d"
            },
            {
                "id": 2,
                "isActive": true,
                "title": "Machine Learning A-Z",
                "titleImage": "/assets/courses/udemy.jpeg",
                "description": "In this course I learnt building robust Machine Learning model using python and handling specific topics like Reinforcement Learning, NLP and Deep Learning",
                "courseLink": "https://www.udemy.com/certificate/UC-9WD21G3C/"
            },
            {
                "id": 3,
                "isActive": true,
                "title": "Java Intermediate",
                "titleImage": "/assets/courses/hackerrank.jpeg",
                "description": "This covers topics like Multithreading in Java, Working with Networking in Java, and Collections and Serialization.",
                "courseLink": "https://www.hackerrank.com/certificates/32919b504c32"
            },
            {
                "id": 4,
                "isActive": true,
                "title": "Data Analysis and Visualization",
                "titleImage": "/assets/courses/udemy.jpeg",
                "description": "In this course I learnt about numpy library to create and manipulate arrays, pandas module to create and structure data and creating data visualizations using matplotlib with python.",
                "courseLink": "https://www.udemy.com/certificate/UC-ZJ63EA6Q/"
            }
        ];
    };
    DataService.prototype.getAbout = function () {
        return "I am a Software Developer with a strong passion for improvement, and good problem solving skills, strong hold on data-structures and algorithms and always ready to learn. ";
    };
    DataService.prototype.getExperiences = function () {
        return [
            {
                "id": 1,
                "isActive": true,
                "companyName": "Tata Consultancy Servies, Bengaluru, India",
                "year": "August 2020 - Current",
                "jobTitle": "Full Stack Developer",
                "description": ["Angular8, SpringBoot MySQL"],
                "companyWebsite": "https://www.tcs.com"
            },
            {
                "id": 2,
                "isActive": true,
                "companyName": "GetBasis Technologies, Bengaluru, India",
                "year": "January 2020 - August 2020",
                "jobTitle": "Android Developer Intern",
                "description": ["* Added several features on Basis Android App to increase user engagement", "* Added analytics on all the existing features to extract meaningful data from user activity.", "* Quality analyzed Basis Android App and Web App to make sure they are bug and defect free.", "* Technologies used:- MvRx Architecture by Airbnb (MVVM), Koin, Retrofit, Epoxy, Firebase, Kotlin"],
                "companyWebsite": "https://www.getbasis.co"
            },
            {
                "id": 3,
                "isActive": true,
                "companyName": "Tata Consultancy Servies, Mumbai, India",
                "year": "June 2019 - July 2019",
                "jobTitle": "Software Developer Intern",
                "description": ["* Created a model for local stores price comparison application.", "* Worked on front-end of a banking website using Angular 7."],
                "companyWebsite": "https://www.tcs.com"
            }
        ];
    };
    //education
    DataService.prototype.getEducations = function () {
        return [
            {
                "id": 1,
                "isActive": true,
                "collegeName": "SGGSIE&T, Nanded",
                "year": "August 2016 - October 2020",
                "courseName": "B.Tech in Information Technology",
                "description": "A government aided autonomous institute, where I learnt basics and fundamentals of Software Engineering.",
                "grade": "7.86 CPGA"
            }
        ];
    };
    //skills
    DataService.prototype.getSkills = function () {
        return ["Spring Boot", "Android Development", "Angular", "Java", "Python", "C++", "HTML/CSS", "Bootstrap", "Javascript"];
    };
    DataService.prototype.getProjectWithId = function (id) {
        return this.getProjects().filter(function (project) { return project.id === id; })[0];
    };
    DataService.prototype.getProjects = function () {
        return [
            {
                "id": 1,
                "isActive": true,
                "title": "Reminder Android Application",
                "technologiesUsed": ["Android Studio", "Java", "SQLLite Database"],
                "titleImage": "/assets/projects/reminder/title.png",
                "screenshots": ["/assets/projects/reminder/ss1.png", "/assets/projects/reminder/ss2.png", "/assets/projects/reminder/ss3.png", "/assets/projects/reminder/ss4.png"],
                "description": "It is a very easy to use Reminder app, which will never let you miss a event."
            },
            {
                "id": 2,
                "isActive": true,
                "title": "Bouncy Ball Android Game",
                "technologiesUsed": ["Unity3D Studio", "C#"],
                "titleImage": "/assets/projects/bouncyball/title.png",
                "screenshots": ["/assets/projects/bouncyball/ss1.jpg", "/assets/projects/bouncyball/ss2.jpg", "/assets/projects/bouncyball/ss3.jpg", "/assets/projects/bouncyball/ss4.jpg"],
                "description": "An endless arcade game where players need to drag their finger on the screen and jump on the tiles to bounce around in space and make sure you don't fall off the edge."
            },
            {
                "id": 3,
                "isActive": true,
                "title": "Currency Convertor Android Application",
                "technologiesUsed": ["Android Studio", "Java"],
                "titleImage": "/assets/projects/currencyconvertor/title.png",
                "screenshots": ["/assets/projects/currencyconvertor/ss1.jpg", "/assets/projects/currencyconvertor/ss2.jpg"],
                "description": "Convert any currency with live exchange rates. Supports currencies for every country including the dollar, rupee, euro, pound, yen, yuan, won, franc, ruble, dinar, peso, rupee, shilling, rial, kwacha, dirham, florin, guinea, krona, krone, riyal, colon, som, leu, virtual currencies like Bitcoin, plus precious metals like gold, silver."
            }
        ];
    };
    DataService.prototype.getAchievements = function () {
        return [
            {
                "id": 1,
                "isActive": true,
                "year": "27 February 2019",
                "title": "'Code is less’ programming competition",
                "description": "Secured 2nd prize in ‘Code is less’ programming competition held by Pragyaa (A national level Technical Fiesta)."
            },
            {
                "id": 2,
                "isActive": true,
                "year": "17 March 2018",
                "title": "‘C Brain’ programming competition",
                "description": "Secured 3rd prize in ‘C Brain’ programming competition held by Pragyaa (A national level Technical Fiesta)."
            }
        ];
    };
    return DataService;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"education\">\n  <h2 class=\"heading\">Education</h2>\n  \n<ng-container *ngFor=\"let education of educations\" >\n  <div class=\"education-block\" *ngIf=\"education.isActive\">\n    \n    <h3>{{education.collegeName}}</h3>\n    <span class=\"education-date\">{{ education.year }}</span>\n    \n    <h4>{{education.courseName}}</h4>\n\n    <span class=\"education-date\" style=\"display: block;\"> {{education.grade}} </span>\n\n    <p style=\"margin-right: 125px; display: block;\">\n        {{education.description}}\n    </p>\n  </div>\n</ng-container>\n</div>"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationComponent = /** @class */ (function () {
    function EducationComponent(dataService) {
        this.dataService = dataService;
        this.educations = this.dataService.getEducations();
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"experience\" class=\"background-alt\">\n  <h2 class=\"heading\">Experience</h2>\n  <div id=\"experience-timeline\">\n\n    <ng-container *ngFor=\"let experience of experiences\">\n      <ng-container *ngIf=\"experience.isActive\">\n    <div class=\"vtimeline-point\"><div class=\"vtimeline-icon\"><i class=\"fa fa-map-marker\"></i></div>\n    <div class=\"vtimeline-block\"><span class=\"vtimeline-date\">{{experience.year}}</span>\n      <div data-date=\"July 2018 – Present\" class=\"vtimeline-content\">\n        <h3><a href=\"{{experience.companyWebsite}}\" target=\"_blank\">{{experience.companyName}}</a></h3>\n        <h4>{{experience.jobTitle}}</h4>\n        <ng-container *ngFor=\"let des of experience.description\">\n          <p>\n            {{des}}\n          </p>\n        </ng-container>\n        \n    </div>\n  </div>\n</div>\n</ng-container>\n    </ng-container>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/experience/experience.component.scss":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#current-projects-link {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(dataService) {
        this.dataService = dataService;
        this.experiences = this.dataService.getExperiences();
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/experience/experience.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"background\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-5 copyright\">\n              <p>\n                  Copyright &copy; {{ currentYear }} {{ name }}\n              </p>\n          </div>\n          <div class=\"col-sm-2 top\">\n              <span id=\"to-top\" [scrollTo]=\"'#lead'\" [scrollDuration]=\"500\">\n                  <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n              </span>\n          </div>\n  \n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentYear = new Date().getFullYear();
        this.email = "kushagrakasliwal47@gmail.com";
        this.name = "Kushagra Kasliwal";
        this.githubLink = "hwsak";
        this.linkedinLink = "hwsak";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div id=\"mobile-menu-close\">\n      <span>Close</span> <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </div>\n  <ul id=\"menu\" class=\"shadow\">\n      <li>\n          <a id=\"about-button\" [scrollTo]=\"'#about'\" [scrollDuration]=\"500\">About</a>\n      </li>\n      <li>\n          <a id=\"experience-button\" [scrollTo]=\"'#experience'\" [scrollDuration]=\"500\">Experience</a>\n      </li>\n      <li>\n          <a id=\"education-button\" [scrollTo]=\"'#education'\" [scrollDuration]=\"500\">Education</a>\n      </li>\n      <li>\n          <a id=\"projects-button\" [scrollTo]=\"'#projects'\" [scrollDuration]=\"500\">Projects</a>\n      </li>\n      <li>\n        <a id=\"contact-button\" [scrollTo]=\"'#achievements'\" [scrollDuration]=\"500\">Achievements</a>\n    </li>\n    <li>\n        <a id=\"contact-button\" [scrollTo]=\"'#courses'\" [scrollDuration]=\"500\">Courses & Certificates</a>\n    </li>\n      <li>\n          <a id=\"skills-button\" [scrollTo]=\"'#skills'\" [scrollDuration]=\"500\">Skills</a>\n      </li>\n      <li>\n          <a id=\"contact-button\" [scrollTo]=\"'#getInTouch'\" [scrollDuration]=\"500\">Contact</a>\n      </li>\n  </ul>\n</header>\n<!-- End header -->"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <button class=\"btn btn-primary\" [scrollTo]=\"'#place1'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-100\">Place 1</button> -->\n\n<app-header></app-header>\n\n\n\n\n<app-lead></app-lead>\n\n<app-about></app-about>\n\n<app-experience></app-experience>\n\n<app-education></app-education>\n\n<app-projects></app-projects>\n\n<app-achievements></app-achievements>\n\n<app-courses></app-courses>\n\n<app-skills></app-skills>\n\n<app-contact></app-contact>\n\n<app-footer></app-footer>\n<div id=\"place1\"></div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/lead/lead.component.html":
/*!******************************************!*\
  !*** ./src/app/lead/lead.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"lead\">\n  \n  <div id=\"lead-content\">\n      <h2 style=\"color:white; font-size: 64px; font-weight: bold;\">{{ name }}</h2>\n      <h2> {{ description }}</h2>\n      <a href=\"/assets/kushagra_kasliwal_CV.pdf\" target=\"blank\" class=\"btn-rounded-white\">View Resume</a>\n  </div>\n\n  <div class=\"bg-circle-1 bg-circle\"></div>\n  <div class=\"bg-circle-2 bg-circle\"></div>\n  <div class=\"bg-circle-3 bg-circle\"></div>\n  <div class=\"bg-circle-4 bg-circle\"></div>\n\n  <div id=\"lead-down\" [scrollTo]=\"'#about'\" [scrollDuration]=\"500\" >\n    <span>\n      <i class=\"fa fa-chevron-down\" aria-hidden=\"true\" id=\"lead-chevron\" ></i>\n    </span>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/lead/lead.component.scss":
/*!******************************************!*\
  !*** ./src/app/lead/lead.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lead {\n  position: relative;\n  overflow: hidden;\n  padding-top: calc(7rem + 72px);\n  padding-bottom: 7rem;\n  background: linear-gradient(0deg, #1d6fa5 0%, #3498db 100%);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 100vh;\n  min-height: 500px;\n  max-height: 600px; }\n  @media only screen and (max-width: 992px) {\n    #lead {\n      height: auto;\n      min-height: auto;\n      max-height: auto;\n      padding: 100px 15px; } }\n  #lead-content {\n  position: absolute;\n  z-index: 10;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center; }\n  #lead-content h1, #lead-content h2 {\n    margin: 0; }\n  #lead-content h1 {\n    color: #fff;\n    font-weight: 900;\n    font-size: 5em;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    line-height: 0.9em; }\n  #lead-content h2 {\n    color: #ccebff;\n    font-weight: 500;\n    font-size: 2.25em;\n    margin-bottom: 15px; }\n  @media only screen and (max-width: 992px) {\n    #lead-content {\n      position: relative;\n      -webkit-transform: none;\n              transform: none;\n      left: auto;\n      top: auto; }\n      #lead-content h1 {\n        font-size: 3em; }\n      #lead-content h2 {\n        font-size: 1.75em; } }\n  @media only screen and (max-width: 768px) {\n    #lead-content h1 {\n      font-size: 2em; }\n    #lead-content h2 {\n      font-size: 1.3em; }\n    #lead-content a {\n      padding: 10px 20px; } }\n  @media only screen and (max-width: 480px) {\n    #lead-content a {\n      font-size: 0.9em;\n      padding: 5px 10px; } }\n  .bg-circle {\n  z-index: 0;\n  position: absolute;\n  border-radius: 100%;\n  background: linear-gradient(0deg, #3498db 0%, #1d6fa5 100%); }\n  .bg-circle.bg-circle-1 {\n    height: 100rem;\n    width: 105rem;\n    bottom: -55rem;\n    left: -55rem; }\n  .bg-circle.bg-circle-2 {\n    height: 65rem;\n    width: 65rem;\n    top: -25rem;\n    right: -25rem; }\n  .bg-circle.bg-circle-3 {\n    height: 40rem;\n    width: 40rem;\n    bottom: -20rem;\n    right: 5%; }\n  .bg-circle.bg-circle-4 {\n    height: 46rem;\n    width: 46rem;\n    top: -5rem;\n    right: 35%; }\n  #lead-down {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 10;\n  bottom: 15px;\n  color: #fff; }\n  #lead-down span {\n    cursor: pointer;\n    display: block;\n    margin: 0 auto;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    border: 3px solid #a0cfee;\n    text-align: center; }\n  #lead-down i {\n    -webkit-animation: pulsate 1.5s ease;\n            animation: pulsate 1.5s ease;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    padding-top: 5px; }\n  @media only screen and (max-width: 768px) {\n    #lead-down {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/lead/lead.component.ts":
/*!****************************************!*\
  !*** ./src/app/lead/lead.component.ts ***!
  \****************************************/
/*! exports provided: LeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadComponent", function() { return LeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadComponent = /** @class */ (function () {
    function LeadComponent(dataService) {
        this.dataService = dataService;
        this.name = this.dataService.getName();
        this.description = this.dataService.getProfession();
    }
    LeadComponent.prototype.ngOnInit = function () {
    };
    LeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lead',
            template: __webpack_require__(/*! ./lead.component.html */ "./src/app/lead/lead.component.html"),
            styles: [__webpack_require__(/*! ./lead.component.scss */ "./src/app/lead/lead.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], LeadComponent);
    return LeadComponent;
}());



/***/ }),

/***/ "./src/app/project-detail/project-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-page-header background-alt\" id=\"lead\">\n  <h1>{{project.title}}</h1>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" style=\"padding: 32px;\" *ngFor=\"let skill of project.technologiesUsed\" >\n      <span>{{ skill }}</span>\n    </div>\n</div>\n\n</div>\n\n<div class=\"container project-page-contents\">\n  <div class=\"row\">\n    <p><a routerLink=\"/\" routerLinkActive=\"active\">Back to homepage</a></p>\n    \n\n    <h2>Overview</h2>\n    <p>\n      {{project.description}}\n    </p>\n\n    <h2>Screenshots</h2>\n\n    <ng-container *ngFor=\"let ss of project.screenshots\">\n\n    <img class=\"img-responsive\" src=\"{{ss}}\"  />\n    </ng-container>\n  </div>\n</div>\n\n\n<app-footer></app-footer>\n  "

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.projectId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.project = this.dataService.getProjectWithId(this.projectId);
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.scss */ "./src/app/project-detail/project-detail.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projects\" class=\"background-alt\">\n  <h2 class=\"heading\">Projects</h2>\n  <div class=\"container\">\n      <div class=\"row\">\n\n        <ng-container *ngFor=\"let project of projects\">\n          <div class=\"project shadow-large\" *ngIf=\"project.isActive\">\n              <div routerLink=\"project-detail\" routerLinkActive=\"active\" class=\"project-image\">\n                  <img style=\"width: 200px;\" src=\"{{project.titleImage}}\" />\n              </div>\n              <!-- End .project-image -->\n              <div class=\"project-info\">\n                  <h3 style=\"text-align: left;\">{{project.title}}</h3>\n                  <p style=\"text-align: left;\">\n                      {{project.description}}\n                  </p>\n\n                <p style=\"text-align: left;\" >  <a [routerLink]=\"['project-detail', project.id]\" routerLinkActive=\"active\">Full Project Details</a> </p>\n              </div>\n              <!-- End .project-info -->\n          </div>\n          <!-- End .project -->\n        </ng-container>\n      </div>\n  </div>\n  <div class=\"card-container\">\n\n    <div class=\"card card-small\" style=\"padding: 24px; padding-right: 16px; background-color: white;\" (click)=\"toggleViewMore()\">\n      <span>{{ showAll ? 'Show Less' : 'Show More' }}  &nbsp; <i class=\"{{showAll ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}}\" aria-hidden=\"true\" id=\"lead-chevron\" ></i></span>\n    </div>\n    </div>\n</div>\n<!-- End #projects -->"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(dataService) {
        this.dataService = dataService;
        this.showAll = false;
        this.max = 2;
        this.allProjects = this.dataService.getProjects();
        this.projects = this.allProjects.slice(0, Math.min(this.max, this.allProjects.length));
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.toggleViewMore = function () {
        this.showAll = !this.showAll;
        if (this.showAll) {
            this.projects = this.allProjects;
        }
        else {
            this.projects = this.allProjects.slice(0, Math.min(this.max, this.allProjects.length));
        }
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"skills\" class=\"background\">\n        <h2 class=\"heading\">Skills</h2>\n        <div class=\"card-container\">\n            <div class=\"card card-small\" style=\"padding: 32px;\" *ngFor=\"let skill of skills\" >\n              <span>{{ skill }}</span>\n            </div>\n        </div>\n</div>\n<!-- End #skills -->"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(dataService) {
        this.dataService = dataService;
        this.skills = this.dataService.getSkills();
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kushagrakasliwal/Downloads/dev-portfolio-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map