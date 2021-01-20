import {County} from './county.model';
export class CalculatorStatus {
  public monthlyIncome:number;
  public yearlyIncome:number;
  public weeklyIncome:number;
  public currentCounty:County;
  
  public currentTransportationEstimates: number; 
  public currentFoodEstimates: number; 
  public currentHealthEstimates: number; 

  public currentGasEstimates: number; 
  public currentTaxEstimates: number;
  public currentOtherNecessitiesEstimates : number; ;
  public currentHousingPlusUtilitiesEstimates : number; 
  public currentMonthlyTotal : number; 
  public currentAnnualTotal : number; 
  public total : number;
     
    constructor (monthlyIncome:number,
      yearlyIncome:number,
      weeklyIncome:number,
      currentCounty:County,
      currentTransportationEstimates: number, 
      currentFoodEstimates: number, 
      currentHealthEstimates: number, 
      currentGasEstimates: number, 
      currentTaxEstimates: number,
      currentOtherNecessitiesEstimates : number, 
      currentHousingPlusUtilitiesEstimates : number, 
      currentMonthlyTotal : number, 
      currentAnnualTotal : number, 
      total:number) {
        this.monthlyIncome = monthlyIncome;
        this.yearlyIncome =  yearlyIncome;
        this.weeklyIncome = weeklyIncome;
        this.currentCounty = currentCounty;
        this.currentTransportationEstimates=  currentTransportationEstimates;
        this.currentFoodEstimates= currentFoodEstimates;
        this.currentHealthEstimates= currentHealthEstimates;
      
        this.currentGasEstimates= currentGasEstimates;
        this.currentTaxEstimates=currentTaxEstimates;
        this.currentOtherNecessitiesEstimates =  currentOtherNecessitiesEstimates;
        this.currentHousingPlusUtilitiesEstimates = currentHousingPlusUtilitiesEstimates;
        this.currentMonthlyTotal = currentMonthlyTotal;
        this.currentAnnualTotal = currentAnnualTotal;
      
        this.total= total;

    }
  }