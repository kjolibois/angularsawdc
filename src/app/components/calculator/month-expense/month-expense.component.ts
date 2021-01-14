import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  optionsCounties:County[] =     [ 
    {value: "001", viewValue: 'Autauga',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
    {value: '005', viewValue: 'Barbour',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
    {value: '007', viewValue: 'Bibb',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
    {value: '009', viewValue: 'Blount',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
    {value: '003', viewValue: 'Baldwin',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
    {value: '037', viewValue: 'Bullock',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
  
    {value: '037', viewValue: 'Coosa',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
    {value: '057', viewValue: 'Fayette',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0},
    {value: '083', viewValue: 'Limestone',averageUtility:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageRent:0}
  
   ];
   currentCounty:County =this.optionsCounties[0];

   displayFn(user?: County): string | undefined {
     console.log(user)
    return user ? user.viewValue : undefined;
  }
  onSelectChange(event){
    console.log(event);
    this.currentCounty=event.option.value;
  }
   filteredOptions: Observable<County[]>;
   status={
  monthlyIncome: 0,
  car : 400,
  groceries : 0,
  utilities : 300,
  housingCost : 50,
  phone : 40,
  cable : 60,
  internet :45,
  total : 0
   }
  constructor(private calculatorService: CalculatorService,private formBuilder: FormBuilder) { }
  onSliderChange(event: MatSliderChange) {
    console.log("This is emitted as the thumb slides");
    console.log(event);
    this.getTotalMonthlyExpense();
  }
  ngOnChanges(){
    this.getTotalMonthlyExpense();
  }
  ngOnInit() {
    /*
     this.myForm = this.formBuilder.group({
      mortgage : this.getMonthlyPmt(),
      propertyTax : 400,
      monthDebtPmt : 0,
      utilities : 300,
      propertyInsurance : 50,
      phone : 40,
      cable : 60,
      internet : 45,
      
    });
    */
   this.filteredOptions = this.myControl.valueChanges
   .pipe(
     startWith<string | County>(''),
     map(value => typeof value === 'string' ? value : value.viewValue),
     map(name => name ? this.filter(name) : this.optionsCounties.slice())
          );
          this.getTotalMonthlyExpense();
          this.status.monthlyIncome= this.calculatorService.monthlyIncome;

  }

  filter(val?: string): County[] {
    return this.optionsCounties.filter(option =>
      option.viewValue.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  updateSetting(event){
   console.log("silder")
    console.log(event);
    this.getTotalMonthlyExpense()
  }
  itChanged(event: any){
    console.log("typing")
    console.log(event);

  }
  onKeyup(event){
    console.log("onkeyup");

    this.getTotalMonthlyExpense()  }

 
  getTotalMonthlyExpense() {
    console.log("working");
    console.log(this.status.housingCost);
    var debits= (this.status.car + this.status.utilities+ this.status.housingCost +this.status.groceries + this.status.phone 
      + this.status.cable + this.status.internet);
    console.log(debits);
    console.log(this.status.monthlyIncome);
    console.log(this.status.monthlyIncome-debits);
    this.status.total =   this.status.monthlyIncome -debits
    
  }

};
