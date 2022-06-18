import { Component, OnInit } from '@angular/core';
import {VideosService} from "../../../service/hackathon/videos.service";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {

    loading: boolean = true;
    lives: any[] = [];

    constructor(private videoService: VideosService) {
    }

    ngOnInit(): void {
        this.start();
    }

    start(): void {
        this.videoService.lives().subscribe((response) => {
            this.lives = response.transmissionList
            this.loading = false;

            console.log('response' , this.lives)

        }, error => {
            this.loading = false;
        });
    }

    seeVideo(video): void {
        console.log('video', video)
    }


}
