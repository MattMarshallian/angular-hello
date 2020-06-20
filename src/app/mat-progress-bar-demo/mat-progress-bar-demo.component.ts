import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-progress-bar-demo',
  templateUrl: './mat-progress-bar-demo.component.html',
  styleUrls: ['./mat-progress-bar-demo.component.css', '../app.component.css']
})
export class MatProgressBarDemoComponent implements OnInit {

  public value: number;

  constructor() { }

  ngOnInit(): void {
    this.value = 40;
    setInterval(() => {
      this.value = Math.abs(this.value + 30 * Math.random() - 15);
      console.log('value = ', this.value);
    }, 300);
  }



}
