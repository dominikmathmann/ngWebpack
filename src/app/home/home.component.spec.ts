/// <reference path="../../../typings/index.d.ts" />

import {addProviders, inject} from '@angular/core/testing';


import { HomeComponent } from './home.component';
describe('App', () => {
    beforeEach(() => {
        addProviders([
            { provide: HomeComponent }
        ])
    })
    it('should work', inject([HomeComponent], (app: HomeComponent) => {
        expect(app.title).toBeTruthy();
    }));
});