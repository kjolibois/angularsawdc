import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
interface SearchTags {
  id: number;
  viewValue: string;
}
@Component({
  selector: 'app-chip-select',
  templateUrl: './chip-select.component.html',
  styleUrls: ['./chip-select.component.sass']
})
export class ChipSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const toppings = [{ viewValue: 'agriculture', id: 1 }];
    this.toppingsControl.setValue(toppings);
  }


  toppingsControl = new FormControl([]);
  toppingList: SearchTags[] = [
    { viewValue: 'Agriculture', id: 1 },
    { viewValue: 'Architecture & Construction', id: 2 },
    { viewValue: 'Arts A/V & Communication', id: 3 },
    { viewValue: 'Business & Administration', id: 4 },
    { viewValue: 'Education & Training', id: 5 },
    { viewValue: 'Energy', id: 6 },
    { viewValue: 'Finance', id: 7 },
    { viewValue: 'Government & Public Service', id: 8 },
    { viewValue: 'Health Science', id: 9 },
    { viewValue: 'Hospitality & Tourism', id: 10 },
    { viewValue: 'Human Services', id: 11 },
    { viewValue: 'Information Technology', id: 12 },
    { viewValue: 'Law Safety & Corrections', id: 13 },
    { viewValue: 'Manufacturing', id: 14 },
    { viewValue: 'Marketing', id: 15 },
    { viewValue: 'STEM', id: 16 },
    { viewValue: 'Transportation & Logistics', id: 17 }
  ];



  onToppingRemoved(topping: SearchTags) {
    const toppings = this.toppingsControl.value as SearchTags[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(['']);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  changeSelection() {
    const toppings = ['Extra cheese', 'Onion', 'Sausage'];
    this.toppingsControl.setValue(toppings);
  }

  emptySelection() {
    this.toppingsControl.setValue(['']);
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

