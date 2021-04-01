import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAWDCResumesearchComponent } from './components/sawdc/sawdc-resumesearch/sawdc-resumesearch.component';

import { ResumeSearchComponent } from './components/page_components/resume-search/resume-search.component';
import {TutorialsListComponent} from './components/tutorials-list/tutorials-list.component';
import {TutorialDetailsComponent} from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { CalculatorHomeComponent } from './components/page_components/calculator-home/calculator-home.component';
import { HomeComponent} from './components/page_components/home/home.component'
import {AllHomeComponent} from './components/page_components/allhome/allhome.component'
import {VCWCHomeComponent} from './components/page_components/vcwc/vcwc.component'
import { VCWCResumesearchComponent } from './components/vcwc/vcwc-resumesearch/vcwc-resumesearch.component';
const routes: Routes = [

  { path: 'sawdc/resumesearch', component: SAWDCResumesearchComponent },
  { path: 'vcwc/resumesearch', component: VCWCResumesearchComponent },
  { path: 'vcwc/resumeadmin', component: ResumeSearchComponent },

  { path: 'calc', component: CalculatorHomeComponent },
  { path: 'sawdc', component: HomeComponent },
  { path: 'vcwc', component: VCWCHomeComponent },


  { path: '', component: AllHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }