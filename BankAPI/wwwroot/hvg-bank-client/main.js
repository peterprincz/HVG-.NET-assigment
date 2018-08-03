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

/***/ "./src/app/Card.ts":
/*!*************************!*\
  !*** ./src/app/Card.ts ***!
  \*************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(type, id, accountNumber, owner, currency, balance) {
        this.type = type;
        this.id = id;
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.currency = currency;
        this.balance = balance;
    }
    return Card;
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Account Manager\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-row\">\n            <div class=\"col-12\">\n              <label>\n                Select an option\n              </label>\n              <select [(ngModel)]=\"operation\" name=\"operation\" class=\"custom-select\">\n                <option [ngValue]=\"'create'\">Create an account</option>\n                <option [ngValue]=\"'manage'\">Manage an account</option>\n              </select>\n            </div>\n          </div>\n          <br>\n          <div *ngIf=\"operation ==  'manage'\">\n            <app-card-select></app-card-select>\n            <app-card-operation></app-card-operation>\n          </div>\n          <div *ngIf=\"operation == 'create'\">\n            <app-card-creation></app-card-creation>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n"

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
    function AppComponent() {
        this.operation = "";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_select_card_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-select/card-select.component */ "./src/app/card-select/card-select.component.ts");
/* harmony import */ var _card_operation_card_operation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-operation/card-operation.component */ "./src/app/card-operation/card-operation.component.ts");
/* harmony import */ var _card_creation_card_creation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-creation/card-creation.component */ "./src/app/card-creation/card-creation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _card_select_card_select_component__WEBPACK_IMPORTED_MODULE_4__["CardSelectComponent"],
                _card_operation_card_operation_component__WEBPACK_IMPORTED_MODULE_5__["CardOperationComponent"],
                _card_creation_card_creation_component__WEBPACK_IMPORTED_MODULE_6__["CardCreationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-creation/card-creation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/card-creation/card-creation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/card-creation/card-creation.component.html":
/*!************************************************************!*\
  !*** ./src/app/card-creation/card-creation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <label>\n        Tyoe\n      </label>\n    </div>\n    <div class=\"col-4\">\n      <label>\n        Currency\n      </label>\n    </div>\n    <div class=\"col-8\">\n      <select\n      class=\"form-control\"\n      #typeInput\n      >\n    <option value=\"deposit\">Deposit</option>\n    <option value=\"savings\">Savings</option>\n    </select>\n    </div>\n    <div class=\"col-4\">\n      <input\n      type=\"text\"\n      class=\"form-control\"\n      #currencyInput\n      >\n    </div>\n  </div>\n  <br>\n    <div class=\"row\">\n    <div class=\"col-8\">\n      <label>\n        Tyoe\n      </label>\n    </div>\n    <div class=\"col-12\">\n      <label>\n        Name\n      </label>\n    </div>\n    <div class=\"col-12\">\n      <input\n      type=\"text\"\n      class=\"form-control\"\n      #nameInput\n      >\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button\n      type=\"text\"\n      class=\"btn btn-success\"\n      (click)=\"createAccount(nameInput.value, typeInput.value, currencyInput.value)\"\n      >Create</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/card-creation/card-creation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/card-creation/card-creation.component.ts ***!
  \**********************************************************/
/*! exports provided: CardCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCreationComponent", function() { return CardCreationComponent; });
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


var CardCreationComponent = /** @class */ (function () {
    function CardCreationComponent(dataService) {
        this.dataService = dataService;
    }
    CardCreationComponent.prototype.ngOnInit = function () {
    };
    CardCreationComponent.prototype.createAccount = function (nameInput, typeInput, currencyInput) {
        this.dataService.createAccount(typeInput, nameInput, currencyInput);
    };
    CardCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-creation',
            template: __webpack_require__(/*! ./card-creation.component.html */ "./src/app/card-creation/card-creation.component.html"),
            styles: [__webpack_require__(/*! ./card-creation.component.css */ "./src/app/card-creation/card-creation.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CardCreationComponent);
    return CardCreationComponent;
}());



/***/ }),

/***/ "./src/app/card-operation/card-operation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/card-operation/card-operation.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-operation{\r\n  margin-top:30px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/card-operation/card-operation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/card-operation/card-operation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-operation\">\n  <div *ngIf=\"dataService.selectedOperation == 'Withdraw'\">\n  <form>\n    <div class=\"row\">\n      <div class=\"col\">\n      <label>\n        Amount\n    </label>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <input\n      type=\"text\"\n      class=\"form-control\"\n      #amountInput\n      >\n    </div>\n    <div class=\"col-2\">\n      <button (click)=\"withDraw(amountInput.value)\" class=\"btn btn-primary\"> withDraw </button>\n    </div>\n  </div>\n</form>\n  </div>\n  <div *ngIf=\"dataService.selectedOperation == 'Upload'\">\n  <form>\n        <div class=\"row\">\n      <div class=\"col\">\n      <label>\n        Amount\n    </label>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <input\n      type=\"text\"\n      class=\"form-control\"\n      #amountInput\n      >\n    </div>\n    <div class=\"col-2\">\n      <button (click)=\"upLoad(amountInput.value)\" class=\"btn btn-primary\"> UpLoad </button>\n    </div>\n  </div>\n</form>\n  </div>\n  <div *ngIf=\"dataService.selectedOperation == 'Transfer'\">\n  <form>\n  <div class=\"form-row\">\n    <div class=\"col-12\">\n      <label>\n        Transfer money to:\n      </label>\n      <select [(ngModel)]=\"receiverCard\" name=\"receiverCard\" class=\"custom-select\">\n        <option *ngFor=\"let card of cards\" [ngValue]=\"card\">{{card.accountNumber}}</option>\n      </select>\n    </div>\n  </div>\n  <br>\n<div class=\"form-row\">\n    <label>\n        Amount\n    </label>\n    <div class=\"col-12\">\n      <input\n      type=\"text\"\n      class=\"form-control\"\n      #amountInput\n      >\n    </div>\n  </div>\n  <br>\n  <div class=\"form-row\">\n    <div class=\"col-md-3 md-offset-5\">\n      <button (click)=\"transfer(amountInput.value)\" class=\"btn btn-primary\"> Transfer </button>\n    </div>\n  </div>\n</form>\n<div *ngIf=\"receiverCard != null\" class=\"row\">\n  <div class=\"col-12\">\n  <h6> cardType: {{receiverCard.type}} </h6>\n  </div>\n<div class=\"col-12\">\n  <h6> Owner: {{receiverCard.owner}} </h6>\n  </div>\n<div class=\"col-12\">\n  <h6> currency {{receiverCard.currency}} </h6>\n  <div>\n</div>\n  <div class=\"col-12\">\n  <h6> balance {{receiverCard.balance}} </h6>\n<div>\n</div>\n</div>\n  <div *ngIf=\"dataService.selectedOperation == 'Delete'\">\n  <form>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button (click)=\"delete()\" class=\"btn btn-danger\"> Delete </button>\n    </div>\n  </div>\n</form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card-operation/card-operation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/card-operation/card-operation.component.ts ***!
  \************************************************************/
/*! exports provided: CardOperationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardOperationComponent", function() { return CardOperationComponent; });
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


var CardOperationComponent = /** @class */ (function () {
    function CardOperationComponent(dataService) {
        this.dataService = dataService;
        this.selectedOperation = dataService.selectedOperation;
        this.receiverCard = null;
        this.cards = this.dataService.getCards();
    }
    CardOperationComponent.prototype.ngOnInit = function () {
    };
    CardOperationComponent.prototype.withDraw = function (amount) {
        this.dataService.withDraw(amount);
    };
    CardOperationComponent.prototype.upLoad = function (amount) {
        this.dataService.upLoad(amount);
    };
    CardOperationComponent.prototype.transfer = function (amount) {
        this.dataService.transfer(amount, this.receiverCard);
    };
    CardOperationComponent.prototype.delete = function () {
        this.dataService.deleteAccount();
    };
    CardOperationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-operation',
            template: __webpack_require__(/*! ./card-operation.component.html */ "./src/app/card-operation/card-operation.component.html"),
            styles: [__webpack_require__(/*! ./card-operation.component.css */ "./src/app/card-operation/card-operation.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CardOperationComponent);
    return CardOperationComponent;
}());



/***/ }),

/***/ "./src/app/card-select/card-select.component.css":
/*!*******************************************************!*\
  !*** ./src/app/card-select/card-select.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/card-select/card-select.component.html":
/*!********************************************************!*\
  !*** ./src/app/card-select/card-select.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"row\">\n    <div class=\"col\">\n          <label>\n      Selected an Account\n    </label>\n      <select [(ngModel)]=\"dataService.selectedCard\" class=\"custom-select\" name=\"selectedCard\">\n        <option *ngFor=\"let card of cards\" [ngValue]=\"card\">{{card.accountNumber}}</option>\n    </select>\n    </div>\n    <div class=\"col\">\n      <label>\n        Operation\n    </label>\n      <select [(ngModel)]=\"dataService.selectedOperation\" name=\"selectedOperation\" class=\"custom-select\">\n        <option *ngFor=\"let option of cardOperations\" [ngValue]=\"option\">{{option}}</option>\n      </select>\n    </div>\n  </div>\n</form>\n<div *ngIf=\"dataService.selectedCard != null\" class=\"row\">\n  <div class=\"col-12\">\n    <h6> cardType: {{dataService.selectedCard.type}} </h6>\n  </div>\n  <div class=\"col-12\">\n    <h6> Owner: {{dataService.selectedCard.owner}} </h6>\n  </div>\n  <div class=\"col-12\">\n    <h6> currency {{dataService.selectedCard.currency}} </h6>\n  </div>\n  <div class=\"col-12\">\n    <h6> balance {{dataService.selectedCard.balance}} </h6>\n  <div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/card-select/card-select.component.ts":
/*!******************************************************!*\
  !*** ./src/app/card-select/card-select.component.ts ***!
  \******************************************************/
/*! exports provided: CardSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSelectComponent", function() { return CardSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardSelectComponent = /** @class */ (function () {
    function CardSelectComponent(dataService) {
        this.dataService = dataService;
    }
    CardSelectComponent.prototype.ngOnInit = function () {
        this.cardOperations = ['Withdraw', 'Upload', 'Transfer', 'Delete'];
        this.cards = this.dataService.getCards();
        this.selectedOperation = this.dataService.selectedOperation;
    };
    CardSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-select',
            template: __webpack_require__(/*! ./card-select.component.html */ "./src/app/card-select/card-select.component.html"),
            styles: [__webpack_require__(/*! ./card-select.component.css */ "./src/app/card-select/card-select.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CardSelectComponent);
    return CardSelectComponent;
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Card */ "./src/app/Card.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.serverUrl = 'http://localhost:60261/account';
        this.getData();
    }
    DataService.prototype.getData = function () {
        var _this = this;
        this.cards = [];
        this.http.get(this.serverUrl)
            .subscribe(function (data) {
            data.forEach(function (cardjson) {
                var card = new src_app_Card__WEBPACK_IMPORTED_MODULE_2__["Card"](cardjson['type'], cardjson['id'], cardjson['accountNumber'], cardjson['owner'], cardjson['currency'], cardjson['balance']);
                _this.cards.push(card);
            });
            if (_this.selectedCard != null) {
                _this.selectedCard = _this.cards.filter(function (x) { return x.id == _this.selectedCard.id; })[0];
            }
        });
    };
    DataService.prototype.getCards = function () {
        return this.cards;
    };
    DataService.prototype.setOperation = function (operation) {
        this.selectedOperation = operation;
    };
    DataService.prototype.withDraw = function (amount) {
        var _this = this;
        var data = { 'id': this.selectedCard.id, 'amount': amount };
        var body = JSON.stringify(data);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        this.http.put(this.serverUrl + '/' + 'withdraw', data).subscribe(function (x) {
            alert('Successfull transaction');
            _this.selectedOperation = null;
            _this.getData();
        }, function (error) {
            alert(error.error);
        });
    };
    DataService.prototype.upLoad = function (amount) {
        var _this = this;
        var data = { 'id': this.selectedCard.id, 'amount': amount };
        var body = JSON.stringify(data);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        this.http.put(this.serverUrl + '/' + 'upload', data).subscribe(function (x) {
            alert('Successfull transaction');
            _this.selectedOperation = null;
            _this.getData();
        }, function (error) {
            alert(error.error);
        });
    };
    DataService.prototype.transfer = function (amount, receiver) {
        var _this = this;
        var data = { 'senderAccountId': this.selectedCard.id, 'receiverAccountId': receiver.id, 'amount': amount };
        var body = JSON.stringify(data);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        this.http.post(this.serverUrl + '/' + 'transfer', data).subscribe(function (x) {
            alert('Successfull transaction');
            _this.selectedOperation = null;
            _this.getData();
        }, function (error) {
            alert(error.error);
        });
    };
    DataService.prototype.deleteAccount = function () {
        var _this = this;
        this.http.delete(this.serverUrl + '/' + this.selectedCard.id).subscribe(function (x) {
            _this.getData();
        });
    };
    DataService.prototype.createAccount = function (type, name, currency) {
        var _this = this;
        var data = { 'name': name, 'currency': currency, 'type': type };
        var body = JSON.stringify(data);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        this.http.post(this.serverUrl, data).subscribe(function (x) {
            alert("Successfull account creation");
            _this.getData();
        }, function (error) {
            alert(error.error);
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataService);
    return DataService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\Users\kocka\Desktop\hvg-bank-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map