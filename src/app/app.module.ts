import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ResumeSearchComponent } from './components/page_components/resume-search/resume-search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule  } from  '@angular/material/toolbar';
import {  MatListModule } from  '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion'
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WpapiComponent } from './components/wpapi/wpapi.component';
import { PurchaseDetailsComponent } from './components/calculator/purchase-details/purchase-details.component';
import { ResultsComponent } from './components/calculator/results/results.component';
import { MonthExpenseComponent } from './components/calculator/month-expense/month-expense.component';
import { CalculatorHomeComponent } from './components/page_components/calculator-home/calculator-home.component'
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProfileComponent } from './components/page-components/profile/profile.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    ProfileEditorComponent,
    NameEditorComponent,
    ResumeSearchComponent,

    WpapiComponent,
    PurchaseDetailsComponent,
    ResultsComponent,
    MonthExpenseComponent,
    CalculatorHomeComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    CurrencyMaskModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,   
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatSliderModule,
    MatGridListModule,
    MatAutocompleteModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
