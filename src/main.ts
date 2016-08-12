import {LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { BrowserModule}  from '@angular/platform-browser';
import { enableProdMode, provide, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
    imports: [BrowserModule],
    providers: [APP_ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
class MyAppModule { }

declare var process: any

if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(MyAppModule);