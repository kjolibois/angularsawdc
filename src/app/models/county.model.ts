

export class County {
  public  value: string;
  public viewValue: string;
  public averageHousingCost:number;
  public averageUtilities:number;
  public averagePhoneBill:number;
  public averageCable:number;
  public averageInternet:number;
  public averageCar:number;
  public averageGroceries:number;
  
    constructor( value: string, viewValue: string, averageHousingCost: number, averageUtilities: number, averagePhoneBill: number, averageCable:number, averageInternet:number,averageCar:number, averageGroceries:number,) {
      this.value = value;
      this.viewValue =viewValue;
      this.averageHousingCost= averageHousingCost;
      this.averageUtilities = averageUtilities;
      this.averagePhoneBill = averagePhoneBill;
      this.averageCable = averageCable;
      this.averageInternet = averageInternet;
      this.averageCar =averageCar;
      this.averageGroceries = averageGroceries;
    }
  }