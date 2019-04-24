import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './child/survey.component';
import { ParentComponent } from './parent/survey-parent.component';
import { SurveyService } from './survey.service';

@NgModule({

  declarations: [
    AppComponent,
    SurveyComponent,
    ParentComponent

  ],
  exports: [
    ParentComponent
],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule
    
  ],
  providers: [SurveyService],
   bootstrap: [AppComponent]
})
export class AppModule { }
