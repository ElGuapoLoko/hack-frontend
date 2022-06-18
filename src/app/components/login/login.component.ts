import {Component, OnInit, OnDestroy} from '@angular/core';
import {ConfigService} from '../../service/app.config.service';
import {AppConfig} from '../../api/appconfig';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    valCheck: string[] = ['remember'];

    password: string;

    config: AppConfig;

    subscription: Subscription;

    constructor(public configService: ConfigService, private router: Router) {
    }

    ngOnInit(): void {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    login(): void {
        this.router.navigate(['/start'])
    }

}
