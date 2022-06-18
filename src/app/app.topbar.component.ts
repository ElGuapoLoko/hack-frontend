import {Component, OnDestroy, ViewChild} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {Subscription} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];
    @ViewChild('op') overlayPanel: OverlayPanel;

    constructor(public appMain: AdminLayoutComponent, private router: Router) {
    }

    myAccount(): void {
        this.router.navigate(['/account'])
        this.closeOp();
    }

    login(): void {
        this.router.navigate(['/login'])
        this.closeOp();
    }

    video(): void {
        this.router.navigate(['/video'])
        this.closeOp();
    }

    live(): void {
        this.router.navigate(['/live'])
        this.closeOp();
    }

    audio(): void {
        this.router.navigate(['/audio'])
        this.closeOp();
    }

    logout(): void {
        this.router.navigate(['/start'])
    }

    closeOp(): void {
        this.overlayPanel.hide();
    }


}
