import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";

const routerVideos = '/videos/';

@Injectable({
    providedIn: 'root'
})
export class VideosService {

    constructor(private api: ApiService) {
    }

    index(): any {
        return this.api.get(routerVideos + 'index');
    }

    lives(): any {
        return this.api.get(routerVideos + 'lives');
    }

}
