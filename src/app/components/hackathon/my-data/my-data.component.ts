import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-data',
    templateUrl: './my-data.component.html',
    styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

    special: boolean = false;
    companies: any[] = [];

    constructor() {
    }

    ngOnInit(): void {

        this.companies = [{
            name: 'Escola da aeronautica',
            id: 1,
        }
        ]

    }

}
