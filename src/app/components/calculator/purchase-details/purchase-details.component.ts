import { Component, DoCheck, OnInit } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
export enum payType {
  HOUR = 1,
  SALARYMONTH = 2,
  SALARYYEAR = 3
}
@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.sass'],

})


export class PurchaseDetailsComponent implements OnInit, DoCheck {

  payPeriods = [
    { value: payType.HOUR, viewValue: 'Hourly' },
    { value: payType.SALARYMONTH, viewValue: 'Monthly Salary' },
    { value: payType.SALARYYEAR, viewValue: 'Salary Per Year' },

  ];
  incomeEquivalents = {
    inputType: payType.HOUR,
    inputTypeDisplay: "Hour",
    hourly: 0,
    salaryMonth: 0,
    salaryYear: 0
  }
  purchaseForm = this.fb.group({
    income: ['', Validators.required],
    downPmt: ['', Validators.required],
    rate: ['', Validators.required],
    period: ['', Validators.required],
  });
  constructor(private calculatorService: CalculatorService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.purchaseForm.patchValue({
      income: 0,
      downPmt: 0,
      rate: 0,
      period: ""

    })


    this.needMortgageInsurance();
  }

  ngDoCheck() {
    if (this.purchaseForm.dirty && this.calculatorService.resultState === 'show') {
      this.calculatorService.resultState = 'hide';
    }
  }
  calcIncEquivs(incomeInput: number) {
    let income=this.purchaseForm.value['income'];
    

    const payToggle = parseInt(this.purchaseForm.value["period"]);
    console.log("paytogg"+payToggle)
    console.log(payToggle==payType.HOUR)
    //calculateincome equivalents
    if (payToggle==payType.HOUR) {
       this.incomeEquivalents.hourly = income;
       this.incomeEquivalents.salaryMonth= ((income*40)*4)
       this.incomeEquivalents.salaryYear= ((income*40)*4)*12

      } else if (payToggle==payType.SALARYMONTH) {
        this.incomeEquivalents.hourly = ((income/4)/40)
        this.incomeEquivalents.salaryMonth= income
        this.incomeEquivalents.salaryYear= income*12
     } else if (payToggle==payType.SALARYYEAR) {
      this.incomeEquivalents.hourly = (((income/12)/4)/40)
      this.incomeEquivalents.salaryMonth= income/12
      this.incomeEquivalents.salaryYear= income    
    } else {
        console.log("elsing");

    }

    this.purchaseForm.markAsPristine();
  }

  onCalculateMortgage() {
    console.log(this.calculatorService.mortgage);
    this.calculatorService.updateMortgage();
    console.log(this.calculatorService.resultState)

    this.calculatorService.resultState = 'show';
    console.log(this.calculatorService.resultState)
    this.calculatorService.monthlyIncome=this.purchaseForm.value['income'];
    this.purchaseForm.markAsPristine();
  }

  getHomePrice() {
    return this.calculatorService.mortgage.homePrice;
  }
  setHomePrice(price: number) {
    this.calculatorService.mortgage.homePrice = price;
  }
  getDownPmt() {
    return this.calculatorService.mortgage.downPmt;
  }
  setDownPmt(downPmt: number) {
    this.calculatorService.mortgage.downPmt = downPmt;
    this.getDownPmtPerc();
    if (this.getDownPmtPerc() < 0.2 && this.getPeriod() === 30) {
      this.setPeriod(25);
    }
  }
  getRate() {
    return this.calculatorService.mortgage.rate;
  }
  setRate(rate: number) {
    this.calculatorService.mortgage.rate = rate;
  }
  getPeriod() {
    return this.calculatorService.mortgage.period;
  }
  setPeriod(period: number) {
    this.calculatorService.mortgage.period = period;
    this.getDownPmtPerc();
    if (this.getPeriod() === 30 && this.getDownPmtPerc() < 0.2) {
      this.setDownPmt(this.getHomePrice() * 0.2);
    }
  }
  getDownPmtPerc() {
    return this.calculatorService.mortgage.downPmtPerc;
  }
  needMortgageInsurance() {
    return this.calculatorService.isMortgageInsured();
  }
}