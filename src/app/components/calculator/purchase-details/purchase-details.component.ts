import { Component, DoCheck, OnInit } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {County} from '../../../models/county.model'
import {CalculatorStatus} from '../../../models/calculatorstatus.model'
import { ThisReceiver, ThrowStmt } from '@angular/compiler';

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
  myControl: FormControl = new FormControl();
 currentCountyTotal=2000;

 options:County[] =     [ 
  {value: "001", viewValue: 'Autauga',averageCar:0,averageGroceries:0,averageUtilities:0,averageInternet:0,averagePhoneBill:0,averageCable:0,averageHousingCost:0},
  {value: '005', viewValue: 'Barbour',averageCar:0,averageGroceries:0,averageUtilities:100,averageInternet:100,averagePhoneBill:100,averageCable:100,averageHousingCost:100},
  {value: '007', viewValue: 'Bibb',averageCar:0,averageGroceries:0,averageUtilities:200,averageInternet:200,averagePhoneBill:200,averageCable:200,averageHousingCost:200},
  {value: '009', viewValue: 'Blount',averageCar:0,averageGroceries:0,averageUtilities:300,averageInternet:300,averagePhoneBill:300,averageCable:300,averageHousingCost:300},
  {value: '003', viewValue: 'Baldwin',averageCar:0,averageGroceries:0,averageUtilities:400,averageInternet:400,averagePhoneBill:400,averageCable:400,averageHousingCost:400},
  {value: '037', viewValue: 'Bullock',averageCar:0,averageGroceries:0,averageUtilities:500,averageInternet:500,averagePhoneBill:500,averageCable:500,averageHousingCost:500},

  {value: '037', viewValue: 'Coosa',averageCar:0,averageGroceries:0,averageUtilities:600,averageInternet:600,averagePhoneBill:600,averageCable:600,averageHousingCost:600},
  {value: '057', viewValue: 'Fayette',averageCar:0,averageGroceries:0,averageUtilities:700,averageInternet:700,averagePhoneBill:700,averageCable:700,averageHousingCost:700},
  {value: '083', viewValue: 'Limestone',averageCar:0,averageGroceries:0,averageUtilities:800,averageInternet:800,averagePhoneBill:800,averageCable:800,averageHousingCost:800}

 ];
 currentCounty:County =this.options[0];

  incomeEquivalents = {
    inputType: payType.HOUR,
    inputTypeDisplay: "Hour",
    hourly: 0,
    salaryMonth: 0,
    salaryYear: 0
  }
  purchaseForm = this.fb.group({
    income: ['', Validators.required],
    county: ["", Validators.required],
    period: ['', Validators.required],
  });
  constructor(private calculatorService: CalculatorService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.purchaseForm.patchValue({
      income: 0,
      downPmt: 0,
      county:this.options[0],
      period: ""

    })


  }

  ngDoCheck() {
    //if (this.purchaseForm.dirty && this.calculatorService.resultState === 'show') {
    //  this.calculatorService.resultState = 'hide';
   // }
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
       this.incomeEquivalents.inputType=payType.HOUR
       this.incomeEquivalents.inputTypeDisplay="Hour"
      } else if (payToggle==payType.SALARYMONTH) {
        this.incomeEquivalents.hourly = ((income/4)/40)
        this.incomeEquivalents.salaryMonth= income
        this.incomeEquivalents.salaryYear= income*12
        this.incomeEquivalents.inputType=payType.SALARYMONTH
        this.incomeEquivalents.inputTypeDisplay="Month"
     } else if (payToggle==payType.SALARYYEAR) {
      this.incomeEquivalents.hourly = (((income/12)/4)/40)
      this.incomeEquivalents.salaryMonth= income/12
      this.incomeEquivalents.salaryYear= income    
      this.incomeEquivalents.inputType=payType.SALARYYEAR
      this.incomeEquivalents.inputTypeDisplay="Year"
    } else {
        console.log("elsing");

    }

    this.purchaseForm.markAsPristine();
    this.onCalculateMortgage();
  }

  onCalculateMortgage() {
    console.log(this.calculatorService.mortgage);
    console.log(this.calculatorService.resultState)
     //this.calculatorService.isClicked=true;
     this.calculatorService.resultState = 'show';
     this.calculatorService.setIncome(this.purchaseForm.value['income']);
     var cs = new CalculatorStatus(
       this.incomeEquivalents.salaryMonth,
       this.incomeEquivalents.salaryYear
       ,0,
       //this.incomeEquivalents.hourly,
       "remove",
       this.currentCounty,
       this.currentCounty.averageHousingCost,
       this.currentCounty.averageUtilities,
       this.currentCounty.averagePhoneBill,
       this.currentCounty.averageCable,
       this.currentCounty.averageInternet,
       0,
       0,
       0

        );
     this.calculatorService.setCalculatorState(cs);

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
  onSelectChange(event){
    console.log(event.value);
    this.currentCounty=event.value;
    this.onCalculateMortgage();

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

  

}