import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-checkbox-demo',
  templateUrl: './mat-checkbox-demo.component.html',
  styleUrls: ['./mat-checkbox-demo.component.css']
})
export class MatCheckboxDemoComponent implements OnInit {

  public checkBoxValue: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
