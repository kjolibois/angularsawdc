import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeSearchComponent } from './components/page_components/resume-search/resume-search.component';
import {TutorialsListComponent} from './components/tutorials-list/tutorials-list.component';
import {TutorialDetailsComponent} from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { CalculatorHomeComponent } from './components/page_components/calculator-home/calculator-home.component';
import { HomeComponent} from './components/page_components/home/home.component'
import {AllHomeComponent} from './components/page_components/allhome/allhome.component'
import {VcwcHomeComponent} from './components/page_components/vcwc/vcwc.component'
const routes: Routes = [

  { path: 'resumesearch', component: ResumeSearchComponent },
  { path: 'vcwc/resumesearch', component: ResumeSearchComponent },
  { path: 'vcwc/resumeadmin', component: ResumeSearchComponent },

  { path: 'calc', component: CalculatorHomeComponent },
  { path: 'sawdc', component: HomeComponent },
  { path: 'vcwc', component: VcwcHomeComponent },


  { path: '', component: AllHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }