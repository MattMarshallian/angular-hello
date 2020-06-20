import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderDemoComponent } from './mat-slider-demo/mat-slider-demo.component';
import { MatAutocompleteDemoComponent } from './mat-autocomplete-demo/mat-autocomplete-demo.component';
import { MatProgressBarDemoComponent } from './mat-progress-bar-demo/mat-progress-bar-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MatSliderDemoComponent,
    MatAutocompleteDemoComponent,
    MatProgressBarDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
