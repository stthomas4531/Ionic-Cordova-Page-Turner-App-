function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chapter2-chapter2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter2/chapter2.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chapter2/chapter2.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChapter2Chapter2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"secondary\">\n          <ion-button [routerDirection]=\"'root'\" [routerLink]=\"['/toc']\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-dropleft\"></ion-icon>\n            TOC\n          </ion-button>\n        </ion-buttons>\n    <ion-title>chapter2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\n    quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\n    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.\n    Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt\n    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.\n    Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.\n    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\n    quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\n    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.\n    Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt\n    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.\n    Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.\n    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\n    quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\n    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.\n    Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt\n    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.\n    Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.\n    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button [routerDirection]=\"'root'\" [routerLink]=\"['/chapter1']\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-dropleft\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Footer</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button [routerDirection]=\"'root'\" [routerLink]=\"['/chapter3']\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-dropright\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/chapter2/chapter2.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chapter2/chapter2.module.ts ***!
    \*********************************************/

  /*! exports provided: Chapter2PageModule */

  /***/
  function srcAppChapter2Chapter2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chapter2PageModule", function () {
      return Chapter2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _chapter2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chapter2.page */
    "./src/app/chapter2/chapter2.page.ts");

    var routes = [{
      path: '',
      component: _chapter2_page__WEBPACK_IMPORTED_MODULE_6__["Chapter2Page"]
    }];

    var Chapter2PageModule = function Chapter2PageModule() {
      _classCallCheck(this, Chapter2PageModule);
    };

    Chapter2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_chapter2_page__WEBPACK_IMPORTED_MODULE_6__["Chapter2Page"]]
    })], Chapter2PageModule);
    /***/
  },

  /***/
  "./src/app/chapter2/chapter2.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/chapter2/chapter2.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChapter2Chapter2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXB0ZXIyL2NoYXB0ZXIyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/chapter2/chapter2.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/chapter2/chapter2.page.ts ***!
    \*******************************************/

  /*! exports provided: Chapter2Page */

  /***/
  function srcAppChapter2Chapter2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chapter2Page", function () {
      return Chapter2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Chapter2Page = /*#__PURE__*/function () {
      function Chapter2Page() {
        _classCallCheck(this, Chapter2Page);
      }

      _createClass(Chapter2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Chapter2Page;
    }();

    Chapter2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chapter2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chapter2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter2/chapter2.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chapter2.page.scss */
      "./src/app/chapter2/chapter2.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Chapter2Page);
    /***/
  }
}]);
//# sourceMappingURL=chapter2-chapter2-module-es5.js.map