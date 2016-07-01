/// <reference path="../../typings/index.d.ts" />

import {beforeEachProviders, inject} from '@angular/core/testing';


import { AppComponent } from './app.component';
describe('App', () => {
    beforeEachProviders(() => [
        AppComponent
    ]);
    it('should work', inject([AppComponent], (app: AppComponent) => {
        expect(app.title).toBeTruthy();
    }));
});