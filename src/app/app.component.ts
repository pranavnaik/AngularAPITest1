import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {TeamdataService} from './teamdata.service'
import {IProjects} from './Projects'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular API test';
  data: Observable<IProjects[]>;
  

  constructor(private myservice: TeamdataService){
    this.data = myservice.getTeamData();
    
  }

}
