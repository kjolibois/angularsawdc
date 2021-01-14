import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/';
import {startWith} from 'rxjs/operators/';
import {map} from 'rxjs/operators/';

import { CalculatorService} from '../../../services/calculator.service';
import { CalculatorStatus } from 'src/app/models/calculatorstatus.model';
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
  
  isExpenseVisible = false;
  myControl: FormControl = new FormControl();
 currentCountyTotal=2000;

 options:County[] =     [ 
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

 constructor(private calculatorService: CalculatorService) { }
 status: CalculatorStatus =this.calculatorService.calculatorState
   ngOnInit() {
    this.calculatorService.calculatorStateUpdated.subscribe(
      (istatus) => {
        console.log(istatus);
        this.status = this.calculatorService.getCS();
        this.getTotalMonthlyExpense()
      }
    );
  }
  filter(val?: string): County[] {
    return this.options.filter(option =>
      option.viewValue.toLowerCase().indexOf(val.toLowerCase()) === 0);
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
    console.log(this.status.currentHousingCost);
    var debits= (this.status.currentCar + this.status.currentUtilities+ this.status.currentHousingCost +this.status.currentGroceries + this.status.currentPhoneBill 
      + this.status.currentCable + this.status.currentInternet);
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
    return this.calculatorService.monthlyIncome -this.currentCountyTotal;
  }
  getResultState() {
    
    return this.calculatorService.resultState;
  }
  setResultState(state: string) {
    this.calculatorService.resultState = state;
  }
}
