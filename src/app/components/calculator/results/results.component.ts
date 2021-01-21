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



 constructor(private calculatorService: CalculatorService) { }
 status: CalculatorStatus =this.calculatorService.calculatorState
   ngOnInit() {
    this.calculatorService.calculatorStateUpdated.subscribe(
      (istatus) => {
        console.log(istatus);
        console.log("emitter")
        this.status = this.calculatorService.getCS();
        this.getTotalMonthlyExpense();
                this.getDisposable();
      }
    );
  }

  updateSetting(event){
    console.log("silder")
     console.log(event);
     this.getTotalMonthlyExpense()
   }

  getMonthlyIncome() {
    return this.calculatorService.monthlyIncome;
  }
  getTotalMonthlyExpense() {
    console.log("working");
    var debits= (this.status.currentTransportationEstimates + this.status.currentFoodEstimates+  
      +this.status.currentHealthEstimates + this.status.currentHousingPlusUtilitiesEstimates
      + this.status.currentOtherNecessitiesEstimates+this.status.currentTaxEstimates);
    console.log(debits);
    console.log(this.status.monthlyIncome);
    console.log(this.status.monthlyIncome-debits);
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
    console.log("disp");
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
