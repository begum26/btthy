import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './child/survey.component';
RouterModule.forRoot

const routes: Routes = [
  { path: 'survey', component: SurveyComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
  
})



export class AppRoutingModule { }
