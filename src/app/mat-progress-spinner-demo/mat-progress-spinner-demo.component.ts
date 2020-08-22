// tslint:disable: no-inferrable-types

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-progress-spinner-demo',
  templateUrl: './mat-progress-spinner-demo.component.html',
  styleUrls: ['./mat-progress-spinner-demo.component.css', '../app.component.css']
})
export class MatProgressSpinnerDemoComponent implements OnInit {

  public isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
