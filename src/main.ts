import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';

declare var process:any

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent)