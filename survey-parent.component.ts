import { Component, OnInit, NgModule, NgZone } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'; 
import { SurveyService } from '../survey.service';
import { SurveyComponent } from '../child/survey.component';

const routes: Routes = [
  {
    path: 'Survey',
    component: SurveyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@Component({
  selector: 'app-parent',
  templateUrl: './survey-parent.component.html',
  styleUrls: ['./survey-parent.component.css']
})

export class ParentComponent implements OnInit {
  title = 'BegumSurvey';
  x = "Begum Ozcan";
  
  constructor(private router: Router , private zone: NgZone){
    
    this.zone.run(() => router.navigate(['/Survey']));
  }

   //url: string = '/survey';
   gotoSurvey(url){
    
    //console.log('click');
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

  //   this.router.navigateByUrl(myurl).then(e => {
      

  //     //console.log('click');
  //     if (e) {
  //       console.log("Navigation is successful!");
  //     } else {
  //       console.log("Navigation has failed!");
  //     }
  //   });
  // }
  }

  ngOnInit() {

  }

}
