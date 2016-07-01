import { provideRouter, RouterConfig } from '@angular/router';
import {GithubComponent} from './github/github.component'
import {HomeComponent} from './home/home.component'


export const routes: RouterConfig = [
    { component: HomeComponent, path:""},
    { component: GithubComponent, path:"git"}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];