 
export class Mortgage {
    public homePrice: number;
    public downPmt: number;
    public rate: number;
    public period: number;
    public mortgageRequired: number;
    public downPmtPerc: number;
    public monthlyPmt: number;
    public insuranceAmt: number;
  
    constructor(homePrice: number, downPmt: number, rate: number, period: number, insuranceAmt: number) {
      this.homePrice = homePrice;
      this.downPmt = downPmt;
      this.rate = rate;
      this.period = period;
      this.insuranceAmt = insuranceAmt;
    }
  }