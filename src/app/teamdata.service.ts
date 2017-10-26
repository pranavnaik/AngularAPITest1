import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import {IProjects} from './Projects'

@Injectable()
export class TeamdataService {
private ApiUrl = 'https://team-organizer.herokuapp.com/group';
//   private ApiUrl = 'https://team-organizer.herokuapp.com/group';


  constructor(private http: Http) { }

  getTeamData():Observable<IProjects[]>{
    // return this.http.get(this.ApiUrl)
    // .map((res:Response) => res.json())
    // .catch((error:any)=>Observable.throw(error.json().error || 'error fetching the data'))

     return this.http.get(this.ApiUrl)
    .map((res:Response) =>{return <IProjects[]> res.json() } )
    .catch((error:any)=>Observable.throw(error.json().error || 'error fetching the data'))

    //  return this.http.get(this.ApiUrl)
    // .map((res:Response) => res.json());
    
  }

}
