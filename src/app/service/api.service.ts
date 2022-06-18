import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
    constructor(private http: HttpClient) { }

    public get(url: string, params: any = null, skip: boolean = false): Observable<any> {
        let payload = {
            params,
            headers: skip ? {skip: "true"} : null
        };
        return this.http.get<any>(`${this.formatUri(url)}`, payload);
    }

    public put(url: string, params: any, skip: boolean = false): Observable<any> {
        let headers = skip ? {skip: "true"} : null;

        return this.http.put<any>(`${this.formatUri(url)}`, params, {headers});
    }

    public post(url: string, params: any, skip: boolean = false): Observable<any> {
        let headers = skip ? {skip: "true"} : null;

        return this.http.post<any>(`${this.formatUri(url)}`, params, {headers});
    }

    public delete(url: string, skip: boolean = false): Observable<any> {
        let headers =  skip ? {skip: "true"} : null;

        return this.http.delete<any>(`${this.formatUri(url)}`, {headers});
    }

    private formatUri(uri: string): string {
        uri = uri.startsWith('/') ? uri : `/${uri}`;
        return uri;
    }

}
