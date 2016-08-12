import {LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { BrowserModule}  from '@angular/platform-browser';
import { enableProdMode, provide, NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';

@NgModule({
    imports: [ BrowserModule ],
  providers: [APP_ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
class MyAppModule {}

// JIT compile long form
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(MyAppModule);