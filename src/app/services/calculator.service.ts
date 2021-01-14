import { EventEmitter, Injectable } from '@angular/core';

import { Mortgage } from '../models/mortgage.model';
import {CalculatorStatus} from '../models/calculatorstatus.model'
import { County } from '../models/county.model';
@Injectable({
    providedIn: 'root'
  })
export class CalculatorService {
  mortgage: Mortgage = new Mortgage(400000, 60000, 3.86, 25, 0);
  resultState = 'hide';
  monthlyIncome=0;

  calculatorState: CalculatorStatus= new CalculatorStatus(
    0,
    0,
    0,
    "remove",
    new County("001","Autauga",100,200,300,400,500,600,700)
    ,0
    ,0
    ,0
    ,0
    ,0
    ,0
    ,0
    ,0
  );
  isClicked=false;
  isMortgageInsured() {
    this.mortgage.downPmtPerc = this.mortgage.downPmt / this.mortgage.homePrice;
    return this.mortgage.downPmtPerc < 0.2;
  }
  incomeUpdated:EventEmitter<any> = new EventEmitter();
  calculatorStateUpdated:EventEmitter<any> = new EventEmitter();

  setIncome(lang) {
    this.monthlyIncome = lang;
    this.incomeUpdated.emit(this.monthlyIncome);
  }
  setCalculatorState(lang) {
    console.log("lang");
    console.log(lang);
    this.calculatorState = lang;
    this.calculatorStateUpdated.emit(this.calculatorState);
  }
  getInc() {
    return this.monthlyIncome;
  }
  getCS() {
    return this.calculatorState;
  }
  getInsuranceRate() {
    if (this.mortgage.downPmtPerc < 0.1) { return 0.04; }
    if (this.mortgage.downPmtPerc < 0.15) { return 0.031; }
    if (this.mortgage.downPmtPerc < 0.2) {
      return 0.028;
    } else  {
      return 0.0;
    }
  }

  updateMortgage() {
    this.isMortgageInsured();
    this.mortgage.mortgageRequired = this.getMortgageRequired();
    this.mortgage.insuranceAmt = this.getInsuranceAmt();
    this.mortgage.monthlyPmt = this.getMonthlyPmt();
  }

  getMortgageRequired() {
    return this.mortgage.homePrice - this.mortgage.downPmt + this.getInsuranceAmt();
  }

  getInsuranceAmt() {
    if (this.mortgage.downPmtPerc >= 0.2) {
      return 0;
    } else {
      return (this.mortgage.homePrice - this.mortgage.downPmt) * this.getInsuranceRate();
    }
  }

  getMonthlyPmt() {


    return (400+300);
  }
}