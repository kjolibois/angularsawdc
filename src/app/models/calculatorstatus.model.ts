import {County} from './county.model';
export class CalculatorStatus {
  public monthlyIncome:number;
  public yearlyIncome:number;
  public weeklyIncome:number;
  public viewValue: string;
  public currentCounty:County;
  public currentHousingCost:number;
  public currentUtilities:number;
  public currentPhoneBill:number;
  public currentCable:number;
  public currentInternet:number;
  public currentCar:number;
  public currentGroceries:number;

  public total : number;
     
    constructor (monthlyIncome:number,
      yearlyIncome:number,
      weeklyIncome:number,
      viewValue: string,
      currentCounty:County,
      currentHousingCost:number,
      currentUtilities:number,
      currentPhoneBill:number,
      currentCable:number,
      currentInternet:number,
      currentGroceries:number,
      currentCar:number,
      total:number) {
        this.monthlyIncome = monthlyIncome;
        this.yearlyIncome =  yearlyIncome;
        this.weeklyIncome = weeklyIncome
        this.viewValue =  viewValue;
        this.currentCounty = currentCounty;
        this.currentHousingCost = currentHousingCost;
        this.currentUtilities = currentUtilities;
        this.currentPhoneBill = currentPhoneBill;
        this.currentCable = currentCable;
        this.currentInternet = currentInternet;
        this.currentGroceries = currentGroceries;
        this.currentCar= currentCar;
        this.total= total;

    }
  }