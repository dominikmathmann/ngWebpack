import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, Http } from '@angular/http'
import { enableProdMode, provide} from '@angular/core';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {LocationStrategy, Location, HashLocationStrategy } from '@angular/common';

import "./main.css"

declare var process: any

if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
])