import {Component} from '@angular/core'
import {GithubService} from './services'

declare var require:any

@Component({
  selector: 'app',
  template: require('./github.component.html'),
  styles: [require('./github.component.css')],
  providers: [GithubService]
})
export class GithubComponent { 
    
    constructor(private githubservice:GithubService){}
    
    ngOnInit(){
        this.githubservice.getGedoplanRepositories().subscribe(result => this.gedoplanRepos=result);
    }
    
    gedoplanRepos:any[]
}