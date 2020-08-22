// tslint:disable: no-inferrable-types

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-expansion-panel-demo',
  templateUrl: './mat-expansion-panel-demo.component.html',
  styleUrls: ['./mat-expansion-panel-demo.component.css']
})
export class MatExpansionPanelDemoComponent implements OnInit {

  public panelOpenState: boolean = false;
  public version: {
    browser: string,
    os: string,
    product: string,
    appCodeName: string
  };

  constructor() { }

  ngOnInit(): void {
    this.version = {
      browser: window.navigator.userAgent,
      os: window.navigator.platform,
      product: window.navigator.product,
      appCodeName: window.navigator.appCodeName
    };
  }

}
