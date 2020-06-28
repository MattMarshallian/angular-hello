import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-expansion-panel-demo',
  templateUrl: './mat-expansion-panel-demo.component.html',
  styleUrls: ['./mat-expansion-panel-demo.component.css', '../app.component.css']
})
export class MatExpansionPanelDemoComponent implements OnInit {

  public panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
