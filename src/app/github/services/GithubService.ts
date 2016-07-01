import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
    private GITHUB_URL="https://api.github.com/orgs/GEDOPLAN/repos";
    
    constructor(private http:Http){}
    
    getGedoplanRepositories(): Observable<any[]>{
        return this.http.get(this.GITHUB_URL).map(e => e.json())
    }
    
}