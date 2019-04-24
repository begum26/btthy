import { Component, OnInit, SkipSelf , Input, Output , EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { AppComponent } from '../app.component'
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  @Input() newValue:string;
  public testValue: string;
  myData:boolean;
  
  constructor(private router: Router){}
  
  ngAfterViewInit() {
    
  }

  ngOnInit(){
    
  }

  selectValue() {
    console.log(this.newValue);
    
  }

  public gotoSurvey(url) {

    var myurl = `${url}`;

    //window.open(myurl);

    this.router.navigateByUrl(myurl)
    // then(e => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    //});
    event.preventDefault();

  }



}
