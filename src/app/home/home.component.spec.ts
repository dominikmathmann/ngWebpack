/// <reference path="../../../typings/index.d.ts" />

import {beforeEachProviders, inject} from '@angular/core/testing';


import { HomeComponent } from './home.component';
describe('App', () => {
    beforeEachProviders(() => [
        HomeComponent
    ]);
    it('should work', inject([HomeComponent], (app: HomeComponent) => {
        expect(app.title).toBeTruthy();
    }));
});