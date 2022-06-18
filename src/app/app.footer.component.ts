import { Component } from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent{
    constructor(public appMain: AdminLayoutComponent) {}
}
