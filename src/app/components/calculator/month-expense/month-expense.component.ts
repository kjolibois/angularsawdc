import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CalculatorStatus } from 'src/app/models/calculatorstatus.model';

import { CalculatorService } from '../../../services/calculator.service';
export interface County {
  value: string;
  viewValue: string;
  averageRent:number;
  averageUtility:number;
  averagePhoneBill:number;
  averageCable:number;
  averageInternet:number;
}

@Component({
  selector: 'app-month-expense',
  templateUrl: './month-expense.component.html',
  styleUrls: ['./month-expense.component.sass'],

})

export class MonthExpenseComponent implements OnInit {

  myControl: FormControl = new FormControl();
  disposableincome=2000;

   displayFn(user?: County): string | undefined {
     //console.log(user)
    return user ? user.viewValue : undefined;
  }
 

  constructor(private calculatorService: CalculatorService,private formBuilder: FormBuilder) { }
  onSliderChange(event: MatSliderChange) {
  //  console.log("This is emitted as the thumb slides");
  //  console.log(event);
    this.getTotalMonthlyExpense();
  }
  status: CalculatorStatus =this.calculatorService.calculatorState

  ngOnChanges(){
    this.getTotalMonthlyExpense();
  }
  ngOnInit() {
   this.calculatorService.calculatorStateUpdated.subscribe(
     (istatus) => {
   //    console.log(istatus);
   //    console.log("emitter")
       this.status = this.calculatorService.getCS();
       this.getTotalMonthlyExpense();
               this.getDisposable();
     }
   );
 }
 getDisposable(){
 
  this.disposableincome = (this.calculatorService.calculatorState.monthlyIncome- this.status.currentCounty.monthlyTotal);
}
 
  updateSetting(event){
  // console.log("silder")
  //  console.log(event);
    this.getTotalMonthlyExpense()
  }
  updateSettingIncome(event){
  //  console.log("silderincome")
   //  console.log(event);
     this.calculatorService.setincomestate({income:this.status.monthlyIncome,countyInfo:this.status.currentCounty});

     this.getTotalMonthlyExpense()
   }
  itChanged(event: any){
   // console.log("typing")
  //  console.log(event);

  }


 
    getTotalMonthlyExpense() {
     // console.log("working");
      var debits= (this.status.currentTransportationEstimates + this.status.currentFoodEstimates+  
        +this.status.currentHealthEstimates + this.status.currentHousingPlusUtilitiesEstimates
        + this.status.currentOtherNecessitiesEstimates+this.status.currentTaxEstimates);
     // console.log(debits);
     // console.log(this.status.monthlyIncome);
     // console.log(this.status.monthlyIncome-debits);
      this.status.total =   this.status.monthlyIncome -debits
      
    }

};

