/* tslint:disable:no-unused-variable */

import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppMenuComponent} from './app.menu.component';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RouterTestingModule],
            declarations: [AppComponent,
                AdminLayoutComponent,
                AppMenuComponent
            ]
        });
        TestBed.compileComponents();
    });

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
