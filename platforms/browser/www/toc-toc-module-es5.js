function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toc-toc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toc/toc.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toc/toc.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTocTocPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>toc</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let chapter of appPages\" >\n    <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[chapter.url]\">\n      <ion-icon [name]=\"chapter.icon\" slot=\"start\" ></ion-icon>\n      {{chapter.title}}  |  {{chapter.note}}\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/toc/toc.module.ts":
  /*!***********************************!*\
    !*** ./src/app/toc/toc.module.ts ***!
    \***********************************/

  /*! exports provided: TocPageModule */

  /***/
  function srcAppTocTocModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TocPageModule", function () {
      return TocPageModule;
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


    var _toc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toc.page */
    "./src/app/toc/toc.page.ts");

    var routes = [{
      path: '',
      component: _toc_page__WEBPACK_IMPORTED_MODULE_6__["TocPage"]
    }];

    var TocPageModule = function TocPageModule() {
      _classCallCheck(this, TocPageModule);
    };

    TocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_toc_page__WEBPACK_IMPORTED_MODULE_6__["TocPage"]]
    })], TocPageModule);
    /***/
  },

  /***/
  "./src/app/toc/toc.page.scss":
  /*!***********************************!*\
    !*** ./src/app/toc/toc.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppTocTocPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvYy90b2MucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/toc/toc.page.ts":
  /*!*********************************!*\
    !*** ./src/app/toc/toc.page.ts ***!
    \*********************************/

  /*! exports provided: TocPage */

  /***/
  function srcAppTocTocPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TocPage", function () {
      return TocPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TocPage = /*#__PURE__*/function () {
      function TocPage() {
        _classCallCheck(this, TocPage);

        this.appPages = [{
          title: 'Chapter 1',
          url: '/chapter1',
          icon: 'book',
          note: 'The Beginning'
        }, {
          title: 'Chapter 2',
          url: '/chapter2',
          icon: 'book',
          note: 'The Second Part'
        }];
      }

      _createClass(TocPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TocPage;
    }();

    TocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toc/toc.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toc.page.scss */
      "./src/app/toc/toc.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TocPage);
    /***/
  }
}]);
//# sourceMappingURL=toc-toc-module-es5.js.map