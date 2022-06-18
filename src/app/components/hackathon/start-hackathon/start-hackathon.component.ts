import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {VideosService} from "../../../service/hackathon/videos.service";
import {SwiperComponent} from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {Pagination} from "swiper";

SwiperCore.use([Pagination]);

@Component({
    selector: 'app-start-hackathon',
    templateUrl: './start-hackathon.component.html',
    styleUrls: ['./start-hackathon.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class StartHackathonComponent implements OnInit {

    images: any[] = [];
    loading: boolean = true;

    alta: any[] = [];
    recentes: any[] = [];
    curtidos: any[] = [];
    relevantes: any[] = [];

    constructor(private videoService: VideosService) {
    }

    ngOnInit(): void {
        this.start();
    }

    start(): void {
        this.videoService.index().subscribe((response) => {
            this.alta = response.alta.videoList;
            this.recentes = response.recentes.videoList;
            this.curtidos = response.curtidos.videoList;
            this.relevantes = response.relevantes.videoList;

            console.log('relevantes', this.relevantes)

            this.resolvePaths();
        }, error => {
            this.loading = false;
        });
    }

    seeVideo(video): void {
        console.log('video', video)
    }

    resolvePaths(): void {
        for (let i = 0; i < this.alta.length; i += 1) {
            if (this.alta[i].images != null) {
                if (this.alta[i].images.length > 0) {
                    if (this.alta[i].images[0].type == 'DEFAULT') {
                        this.alta[i].path = this.alta[i].images[0].href
                    } else {
                        this.alta[i].path = 'assets/layout/images/hackathon/play_button.png';
                    }
                } else {
                    this.alta[i].path = 'assets/layout/images/hackathon/play_button.png';
                }
            } else {
                this.alta[i].path = 'assets/layout/images/hackathon/play_button.png';
            }
        }
        for (let i = 0; i < this.recentes.length; i += 1) {
            if (this.recentes[i].images != null) {
                if (this.recentes[i].images.length > 0) {
                    if (this.recentes[i].images[0].type == 'DEFAULT') {
                        this.recentes[i].path = this.recentes[i].images[0].href
                    } else {
                        this.recentes[i].path = 'assets/layout/images/hackathon/play_button.png';
                    }
                } else {
                    this.recentes[i].path = 'assets/layout/images/hackathon/play_button.png';
                }
            } else {
                this.recentes[i].path = 'assets/layout/images/hackathon/play_button.png';
            }
        }
        for (let i = 0; i < this.curtidos.length; i += 1) {
            if (this.curtidos[i].images != null) {
                if (this.curtidos[i].images.length > 0) {
                    if (this.curtidos[i].images[0].type == 'DEFAULT') {
                        this.curtidos[i].path = this.curtidos[i].images[0].href
                    } else {
                        this.curtidos[i].path = 'assets/layout/images/hackathon/play_button.png';
                    }
                } else {
                    this.curtidos[i].path = 'assets/layout/images/hackathon/play_button.png';
                }
            } else {
                this.curtidos[i].path = 'assets/layout/images/hackathon/play_button.png';
            }
        }
        for (let i = 0; i < this.relevantes.length; i += 1) {
            if (this.relevantes[i].images != null) {
                if (this.relevantes[i].images.length > 0) {
                    if (this.relevantes[i].images[0].type == 'DEFAULT') {
                        this.relevantes[i].path = this.relevantes[i].images[0].href
                    } else {
                        this.relevantes[i].path = 'assets/layout/images/hackathon/play_button.png';
                    }
                } else {
                    this.relevantes[i].path = 'assets/layout/images/hackathon/play_button.png';
                }
            } else {
                this.relevantes[i].path = 'assets/layout/images/hackathon/play_button.png';
            }
        }
        this.loading = false;
    }


}
