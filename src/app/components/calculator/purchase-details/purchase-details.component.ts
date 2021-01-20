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
       ,this.incomeEquivalents.salaryMonth/4,
       this.currentCounty,
       this.currentCounty.transportationEstimates,
       this.currentCounty.foodEstimates,
       this.currentCounty.healthEstimates,
       this.currentCounty.gasEstimates,
       this.currentCounty.taxEstimates,
       this.currentCounty.otherNecessitiesEstimates,
       this.currentCounty.housingPlusUtilitiesEstimates,
       this.currentCounty.monthlyTotal,
       this.currentCounty.annualTotal,
       this.incomeEquivalents.salaryMonth-this.currentCounty.monthlyTotal
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