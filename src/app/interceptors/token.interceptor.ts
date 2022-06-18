import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('skip')) {
            const request = req.clone({headers: req.headers.delete('skip')});
            return next.handle(request);
        }

        const headersConfig = {
            'Accept': 'application/json'
        };

        const token = localStorage.getItem('access_token');
        if (token) {
            headersConfig['Authorization'] = `Bearer ${token}`;
        }

        const request = req.clone({setHeaders: headersConfig});
        return next.handle(request);
    }
}
