import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(error => this.errorHandler(error)));
    }

    private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
        if (!environment.production) {
            // Do something with the error
            // this.logger.logError('Request error ' + JSON.stringify(response));
        }

        if (response.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // console.error('An error occurred:', error.error.message);
        }
        else {
            if(response.status == 401) {
                // this.notification.error(response.error.title || "Ops!", response.error.message);
            }
            else if(response.status == 430) {
                // this.notification.error(response.error.title, response.error.message);
            }
            else if(response.status == 422) {
                // this.notification.error(response.error.errors[Object.keys(response.error.errors)[0]][0], null);
            }
            else if(response.error?.message){
                // this.notification.error(response.error.title || "Ops!", response.error.message);
            }
        }

        return throwError(response);
    }
}
