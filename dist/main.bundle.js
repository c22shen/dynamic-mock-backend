webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  \n  mat-sidenav {\n    width: 320px;\n  }\n  \n  .content {\n    padding: 5em;\n  }\n  \n  .example-radio-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  \n  .example-selected-value {\n    margin: 15px 0;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex>\n\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <span>Angular Material</span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  \n    <mat-sidenav-container fxFlex>\n      <mat-sidenav mode=\"side\" opened>\n        Welcome\n      </mat-sidenav>\n      <div class=\"content\" fxLayout=\"column\" fxLayoutGap=\"20px\">          \n            <mat-card *ngFor=\"let activateState of states | async\">\n                <mat-card-header>\n                  <mat-card-title>{{ activateState?.id }}</mat-card-title>\n                  <!-- <mat-card-subtitle><strong>{{ activateState?.data?.state}}</strong></mat-card-subtitle> -->\n                </mat-card-header>\n                <mat-card-content>\n                  <!-- {{ activateState.apiStates | async | json }} -->\n                    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"activateState.data.state\">\n                        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let availableState of activateState.apiStates | async\" [value]=\"availableState.state\">\n                          {{availableState.state}}\n                        </mat-radio-button>\n                      </mat-radio-group>\n                </mat-card-content>\n              </mat-card>\n      </div>\n    </mat-sidenav-container>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// Import the DataService
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
var firestore_1 = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
// interface StateId extends State { 
//   id: string; 
// }
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, afs) {
        // Access the Data Service's getUsers() method we defined
        //   this.dataService.getUsers()
        //       .subscribe(res => this.users = res);
        // }
        var _this = this;
        this.dataService = dataService;
        this.afs = afs;
        ngOnInit();
        {
            this.statesCol = this.afs.collection('state');
            // this.states = this.statesCol.valueChanges();
            this.states = this.statesCol.snapshotChanges()
                .map(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    _this.apiCol = _this.afs.collection(id);
                    var apiStates = _this.apiCol.snapshotChanges()
                        .map(function (actions) {
                        return actions.map(function (a) {
                            var state = a.payload.doc.id;
                            return { state: state };
                        });
                    });
                    return { id: id, data: data, apiStates: apiStates };
                });
            });
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, firestore_1.AngularFirestore])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
// Import the Http Module and our Data Service
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var material_module_1 = __webpack_require__("./src/app/material/material.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var flex_layout_1 = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var angularfire2_1 = __webpack_require__("./node_modules/angularfire2/index.js");
var firestore_1 = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var firebaseConfig = {
    apiKey: "AIzaSyCkba3b7b3m8jjYbqm7dGEpyhkmlOq4_ek",
    authDomain: "firestore-c5f87.firebaseapp.com",
    databaseURL: "https://firestore-c5f87.firebaseio.com",
    projectId: "firestore-c5f87",
    storageBucket: "firestore-c5f87.appspot.com",
    messagingSenderId: "527097843634"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseConfig),
                firestore_1.AngularFirestoreModule // And this for firestore
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/retry.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUsers = function () {
        return this.http.get("/api/users")
            .retry(3)
            .catch(function (err) {
            console.log(err);
            return Observable_1.Observable.of(err);
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/app/material/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatInputModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatCardModule,
                material_1.MatSidenavModule,
                material_1.MatRadioModule
            ],
            exports: [
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatInputModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatCardModule,
                material_1.MatSidenavModule,
                material_1.MatRadioModule
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
__webpack_require__("./node_modules/hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map