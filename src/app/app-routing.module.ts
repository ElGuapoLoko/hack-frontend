import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {LoginComponent} from './components/login/login.component';
import {StartHackathonComponent} from "./components/hackathon/start-hackathon/start-hackathon.component";
import {AccountComponent} from "./components/hackathon/account/account.component";
import {MyDataComponent} from "./components/hackathon/my-data/my-data.component";
import {FilesComponent} from "./components/hackathon/files/files.component";
import {CurriculoComponent} from "./components/hackathon/curriculo/curriculo.component";
import {HistoryComponent} from "./components/hackathon/history/history.component";
import {LiveComponent} from "./components/hackathon/live/live.component";
import {VideoComponent} from "./components/hackathon/video/video.component";
import {AudioComponent} from "./components/hackathon/audio/audio.component";
import {RedirectComponent} from "./layouts/redirect/redirect.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: RedirectComponent},
            {path: 'login', component: LoginComponent},
            {
                path: '', component: AdminLayoutComponent,
                children: [
                    {path: 'start', component: StartHackathonComponent},
                    {path: 'account', component: AccountComponent},
                    {path: 'profile', component: MyDataComponent},
                    {path: 'files', component: FilesComponent},
                    {path: 'curriculo', component: CurriculoComponent},
                    {path: 'audio', component: AudioComponent},
                    {path: 'history', component: HistoryComponent},
                    {path: 'live', component: LiveComponent},
                    {path: 'video', component: VideoComponent},
                ],
            },
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
