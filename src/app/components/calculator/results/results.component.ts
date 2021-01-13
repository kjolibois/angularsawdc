import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/';
import {startWith} from 'rxjs/operators/';
import {map} from 'rxjs/operators/';

import { CalculatorService} from '../../../services/calculator.service';
export interface County {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass'],
  animations: [
    trigger('resultState', [
      state('hide', style({
        transform: 'translateY(100px)',
        opacity: 0,
        offset: 0
      })),
      state('show',   style({
        transform: 'translateY(0px)',
        opacity: 1,
        offset: 1
      })),
      transition('hide => show', animate(200, keyframes([
        style({
          transform: 'translateY(50px)',
          opacity: 0.5,
          offset: 0.3
        }),
        style({
          transform: 'translateY(30px)',
          opacity: 1,
          offset: 0.8
        }),
        style({
          transform: 'translateY(0px)',
          opacity: 1,
          offset: 1
        })
      ]))),
      transition('show => hide', animate(200, keyframes([
        style({
          transform: 'translateY(60px)',
          opacity: 0.5,
          offset: 0.6
        })
      ])))
    ])
  ]
})
export class ResultsComponent implements OnInit {
  isExpenseVisible = false;
  myControl: FormControl = new FormControl();
 currentCountyTotal=2000;
  options:County[] =     [ 
  {value: "001", viewValue: 'Autauga'},
  {value: '005', viewValue: 'Barbour'},
  {value: '007', viewValue: 'Bibb'},
  {value: '009', viewValue: 'Blount'},
  {value: '003', viewValue: 'Baldwin'},
  {value: '037', viewValue: 'Bullock'},

  {value: '037', viewValue: 'Coosa'},
  {value: '057', viewValue: 'Fayette'},
  {value: '083', viewValue: 'Limestone'}

 ];
 currentCounty:County =this.options[0];
 displayFn(user?: County): string | undefined {
   console.log(user)
  return user ? user.viewValue : undefined;
}
 filteredOptions: Observable<County[]>;
 constructor(private calculatorService: CalculatorService) { }
 getOptionText(option) {
  return option.viewValue;
}
onSelectChange(event){
  console.log(event);
  this.currentCounty=event.option.value;
}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | County>(''),
      map(value => typeof value === 'string' ? value : value.viewValue),
      map(name => name ? this.filter(name) : this.options.slice())      );

      
  }
  filter(val?: string): County[] {
    return this.options.filter(option =>
      option.viewValue.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  getMonthlyIncome() {
    return this.calculatorService.monthlyIncome;
  }
  getMortgageRequired() {
    return this.calculatorService.mortgage.mortgageRequired;
  }
  getMonthlyPmt() {
    return this.calculatorService.mortgage.monthlyPmt;
  }
  needMortgageInsurance() {
    return this.calculatorService.isMortgageInsured();
  }
  getDisposable(){
    return this.calculatorService.monthlyIncome -this.currentCountyTotal;
  }
  getResultState() {
    
    return this.calculatorService.resultState;
  }
  setResultState(state: string) {
    this.calculatorService.resultState = state;
  }
}
