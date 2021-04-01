import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcwc',
  templateUrl: './vcwc.component.html',
  styleUrls: ['./vcwc.component.sass']
})
export class VCWCHomeComponent implements OnInit {
  title = 'CentralVA Home';

  constructor() { }

  ngOnInit(): void {
  }

}
