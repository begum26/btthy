import { Component, Input , Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; 
import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { SurveyComponent } from './child/survey.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BegumSurvey';
  //numberGenerated = Math.random();
  x = "Begum Ozcan";

  constructor(private router: Router){
    router.navigate(['/Survey']);
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
