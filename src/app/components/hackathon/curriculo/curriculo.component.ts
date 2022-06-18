import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-curriculo',
    templateUrl: './curriculo.component.html',
    styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

    civilState: any[] = [];


    constructor() {
    }

    ngOnInit(): void {
        this.civilState = [
            {
                description: 'Solteiro',
                id: 1
            },
            {
                description: 'Casado',
                id: 2
            },
            {
                description: 'Separado',
                id: 3
            },
            {
                description: 'Divorciado',
                id: 4
            },
            {
                description: 'Viúvo',
                id: 5
            }
        ];

    }

}
