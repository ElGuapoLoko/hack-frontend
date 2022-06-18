import { Component, OnInit } from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AdminLayoutComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menu',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/dashboard']},
                    {label: 'Sorteio',icon: 'pi pi-fw pi-dollar', routerLink: ['/sort']},
                    {label: 'Eventos',icon: 'pi pi-fw pi-map', routerLink: ['/sweepstakes']},
                    {label: 'Meus Eventos',icon: 'pi pi-fw pi-map', routerLink: ['/events']},
                    {label: 'Meus Eventos - Histórico',icon: 'pi pi-fw pi-map', routerLink: ['/history-events']},
                    {label: 'Minha Conta',icon: 'pi pi-fw pi-user', routerLink: ['/account']},
                    {label: 'Usuários',icon: 'pi pi-fw pi-users', routerLink: ['/users']},
                    {label: 'Suporte',icon: 'pi pi-fw pi-envelope', routerLink: ['/support']},
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
