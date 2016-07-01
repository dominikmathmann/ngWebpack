import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES, RouterConfig, Route} from '@angular/router'
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>',
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    title = "Hello Webpack";
}