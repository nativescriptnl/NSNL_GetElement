import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {AppRoutes, AppComponents} from "./app.routing";

import {AppComponent} from "./app.component";

@NgModule({
    declarations: [AppComponent, ...AppComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes)],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
