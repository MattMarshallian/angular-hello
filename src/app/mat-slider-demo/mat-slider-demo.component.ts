import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-slider-demo',
  templateUrl: './mat-slider-demo.component.html',
  styleUrls: ['./mat-slider-demo.component.css']
})
export class MatSliderDemoComponent implements OnInit {

  public value = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public onInputChange(event: any) {
    // console.log('onInputChange() event = ', event);
    this.value = event;
    console.log('onInputChange() value = ', this.value);
  }


}
