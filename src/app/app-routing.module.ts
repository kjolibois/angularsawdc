import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeSearchComponent } from './components/page_components/resume-search/resume-search.component';
import {TutorialsListComponent} from './components/tutorials-list/tutorials-list.component';
import {TutorialDetailsComponent} from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { CalculatorHomeComponent } from './components/page_components/calculator-home/calculator-home.component';
import { HomeComponent} from './components/page_components/home/home.component'
const routes: Routes = [

  { path: 'resumesearch', component: ResumeSearchComponent },
  
  { path: 'calc', component: CalculatorHomeComponent },

  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }