import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/';
import {startWith} from 'rxjs/operators/';
import {map} from 'rxjs/operators/';

import { CalculatorService} from '../../../services/calculator.service';
import { CalculatorStatus } from 'src/app/models/calculatorstatus.model';
import { County } from 'src/app/models/county.model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass'],
  animations: [
    trigger('resultState', [
      state('hide', style({
        transform: 'translateY(100px)',
        opacity: 0,
        offset: 0
      })),
      state('show',   style({
        transform: 'translateY(0px)',
        opacity: 1,
        offset: 1
      })),
      transition('hide => show', animate(200, keyframes([
        style({
          transform: 'translateY(50px)',
          opacity: 0.5,
          offset: 0.3
        }),
        style({
          transform: 'translateY(30px)',
          opacity: 1,
          offset: 0.8
        }),
        style({
          transform: 'translateY(0px)',
          opacity: 1,
          offset: 1
        })
      ]))),
      transition('show => hide', animate(200, keyframes([
        style({
          transform: 'translateY(60px)',
          opacity: 0.5,
          offset: 0.6
        })
      ])))
    ])
  ]
})
export class ResultsComponent implements OnInit {
  
  isExpenseVisible = true;
  myControl: FormControl = new FormControl();
  disposableincome=2000;
  


  options:County[] =     [ 
    {
      value: "001", 
      viewValue: 'Baldwin',
      housingPlusUtilitiesEstimates:729,
      foodEstimates:298,
      transportationEstimates:879,
      gasEstimates:1.998,
      healthEstimates:385,
      otherNecessitiesEstimates:414,
      taxEstimates:580,
      monthlyTotal:3285,
      annualTotal:39425
    },
    {
      value: "002", 
      viewValue: 'Choctaw',
      housingPlusUtilitiesEstimates:506,
      foodEstimates:251,
      transportationEstimates:968,
      gasEstimates:2.007,
      healthEstimates:376,
      otherNecessitiesEstimates:305,
      taxEstimates:499,
      monthlyTotal:2904,
      annualTotal:34849
    },
    {
      value: "003", 
      viewValue: 'Clarke',
      housingPlusUtilitiesEstimates:483,
      foodEstimates:250,
      transportationEstimates:923,
      gasEstimates:1.98,
      healthEstimates:376,
      otherNecessitiesEstimates:296,
      taxEstimates:477,
      monthlyTotal:2804,
      annualTotal:33648
    },
    {
      value: "004", 
      viewValue: 'Conecuh',
      housingPlusUtilitiesEstimates:453,
      foodEstimates:251,
      transportationEstimates:936,
      gasEstimates:1.971,
      healthEstimates:376,
      otherNecessitiesEstimates:284,
      taxEstimates:470,
      monthlyTotal:2769,
      annualTotal:33227
    },
    {
      value: "005", 
      viewValue: 'Escambia',
      housingPlusUtilitiesEstimates:513,
      foodEstimates:250,
      transportationEstimates:887,
      gasEstimates:1.951,
      healthEstimates:376,
      otherNecessitiesEstimates:308,
      taxEstimates:479,
      monthlyTotal:2812,
      annualTotal:33750
    },
    {
      value: "006", 
      viewValue: 'Mobile',
      housingPlusUtilitiesEstimates:679,
      foodEstimates:270,
      transportationEstimates:806,
      gasEstimates:1.951,
      healthEstimates:403, 
      otherNecessitiesEstimates:383,
      taxEstimates:535,
      monthlyTotal:3075,
      annualTotal:36900
    },
    {
      value: "007", 
      viewValue: 'Monroe',
      housingPlusUtilitiesEstimates:483,
      foodEstimates:263,
      transportationEstimates:923,
      gasEstimates:1933,
      healthEstimates:376,
      otherNecessitiesEstimates:301,
      taxEstimates:483,
      monthlyTotal:2828,
      annualTotal:33939
    },
    {
      value: "008", 
      viewValue: 'Washington',
      housingPlusUtilitiesEstimates:497,
      foodEstimates:266,
      transportationEstimates:977,
      gasEstimates:2.207,
      healthEstimates:376,
      otherNecessitiesEstimates:308,
      taxEstimates:504,
      monthlyTotal:2928,
      annualTotal:35141
    },
    {
      value: "009", 
      viewValue: 'Wilcox',
      housingPlusUtilitiesEstimates:483,
      foodEstimates:259,
      transportationEstimates:915,
      gasEstimates:2.066,
      healthEstimates:376,
      otherNecessitiesEstimates:299,
      taxEstimates:479,
      monthlyTotal:2812,
      annualTotal:33746
    },
   ];
   currentCounty:County =this.options[0];
  

 constructor(private calculatorService: CalculatorService) { }
 status: CalculatorStatus =this.calculatorService.calculatorState
   ngOnInit() {
    this.calculatorService.calculatorStateUpdated.subscribe(
      (istatus) => {
     //   console.log(istatus);
     //   console.log("emitter")
        this.status = this.calculatorService.getCS();
        this.getTotalMonthlyExpense();
                this.getDisposable();
      }
    );
  }
  onSelectChange(event){
  //  console.log(event.value);
    this.currentCounty=event.value;
    this.calculatorService.calculatorState.currentCounty= event.value;

  }
  updateSetting(event){
 //   console.log("silder")
  //   console.log(event);
     this.getTotalMonthlyExpense()
   }

  getMonthlyIncome() {
    return this.calculatorService.monthlyIncome;
  }
  getTotalMonthlyExpense() {
   // console.log("working");
    var debits= (this.status.currentTransportationEstimates + this.status.currentFoodEstimates+  
      +this.status.currentHealthEstimates + this.status.currentHousingPlusUtilitiesEstimates
      + this.status.currentOtherNecessitiesEstimates+this.status.currentTaxEstimates);
 //   console.log(debits);
 ///   console.log(this.status.monthlyIncome);
 //   console.log(this.status.monthlyIncome-debits);
    this.status.total =   this.status.monthlyIncome -debits
    
  }
  getMortgageRequired() {
    return this.calculatorService.mortgage.mortgageRequired;
  }
  getMonthlyPmt() {
    return this.calculatorService.mortgage.monthlyPmt;
  }
  needMortgageInsurance() {
    return this.calculatorService.isMortgageInsured();
  }
 
  getDisposable(){
   // console.log("disp");
    console.log(this.calculatorService.calculatorState.monthlyIncome- this.status.currentCounty.monthlyTotal)
    console.log(this.calculatorService.calculatorState.monthlyIncome);
    console.log(this.status.currentMonthlyTotal);
    this.disposableincome = (this.calculatorService.calculatorState.monthlyIncome- this.status.currentCounty.monthlyTotal);
  }
  getResultState() {
    
    return this.calculatorService.resultState;
  }
  setResultState(state: string) {
    this.calculatorService.resultState = state;
  }
}
