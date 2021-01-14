

export class County {
  public  value: string;
  public viewValue: string;
  public averageRent:number;
  public averageUtility:number;
  public averagePhoneBill:number;
  public averageCable:number;
  public averageInternet:number;
  
    constructor(value: string, viewValue: string, averageRent: number, averageUtility: number, averagePhoneBill: number, averageCable:number, averageInternet:number) {
      this.value = value;
      this.viewValue =viewValue;
      this.averageRent= averageRent;
      this.averageUtility = averageUtility;
      this.averagePhoneBill = averagePhoneBill;
      this.averageCable = averageCable;
      this.averageInternet = averageInternet;
    }
  }