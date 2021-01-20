

export class County {
  public  value: string;
  public viewValue: string;
  public transportationEstimates:number;
  public  foodEstimates:number;
  public  gasEstimates:number;
  public  healthEstimates:number;

  public  taxEstimates:number;
  public  otherNecessitiesEstimates:number;
  public  housingPlusUtilitiesEstimates:number;
  public  monthlyTotal:number;
  public  annualTotal:number;
    constructor( 
      value: string, 
      viewValue: string, 
      transportationEstimates: number,
      foodEstimates: number, 
      gasEstimates: number,
      healthEstimates: number,

      taxEstimates:number,
      otherNecessitiesEstimates:number,
      housingPlusUtilitiesEstimates:number, 
      monthlyTotal:number,
      annualTotal:number) {
      this.value = value;
      this.viewValue =viewValue;
      this.transportationEstimates= transportationEstimates
      this.foodEstimates= foodEstimates;
      this.healthEstimates= healthEstimates;

      this.gasEstimates= gasEstimates;
      this.taxEstimates=taxEstimates;
      this.otherNecessitiesEstimates = otherNecessitiesEstimates;
      this.housingPlusUtilitiesEstimates = housingPlusUtilitiesEstimates;
      this.monthlyTotal = monthlyTotal;
      this.annualTotal = annualTotal;
    }
  }