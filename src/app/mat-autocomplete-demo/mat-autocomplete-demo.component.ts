import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-autocomplete-demo',
  templateUrl: './mat-autocomplete-demo.component.html',
  styleUrls: ['./mat-autocomplete-demo.component.css', '../app.component.css']
})
export class MatAutocompleteDemoComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'Dupa'];

  constructor() { }

  ngOnInit(): void {
  }

  public getPosts(event: any) {
    console.log('getPosts() event = ', event);
  }

}
