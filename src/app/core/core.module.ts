import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "primeng/api";
import {BrowserModule} from "@angular/platform-browser";
import {ApiPrefixInterceptor} from "../interceptors/api-prefix.interceptor";
import {TokenInterceptor} from "../interceptors/token.interceptor";
import {ErrorHandlerInterceptor} from "../interceptors/error-handler.interceptor";

@NgModule({
    imports: [HttpClientModule, FormsModule, SharedModule, BrowserModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPrefixInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
        },
    ]
})
export class CoreModule { }
