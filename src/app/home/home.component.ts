import {Component} from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

declare var require:any

@Component({
  selector: 'app',
  template: require('./home.component.html'),
  styles: [require('./home.component.css')],
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent { 
    title="Hello Webpack";
}