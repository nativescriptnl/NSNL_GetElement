"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent].concat(app_routing_1.AppComponents),
        bootstrap: [app_component_1.AppComponent],
        imports: [platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes)],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUN6RCwwREFBaUU7QUFDakUsb0RBQWtFO0FBQ2xFLHNEQUFxRTtBQUNyRSw2Q0FBdUQ7QUFFdkQsaURBQTZDO0FBVzdDLElBQWEsU0FBUztJQUF0QjtJQUNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksU0FBUztJQVRyQixlQUFRLENBQUM7UUFDTixZQUFZLEdBQUcsNEJBQVksU0FBSywyQkFBYSxDQUFDO1FBQzlDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTyxFQUFFLENBQUMsNkJBQWtCO1lBQ3hCLCtCQUF1QjtZQUN2QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUMsQ0FBQztRQUNoRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBSb3V0ZXMsIEFwcENvbXBvbmVudHN9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCAuLi5BcHBDb21wb25lbnRzXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KEFwcFJvdXRlcyldLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19