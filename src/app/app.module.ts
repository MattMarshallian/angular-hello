import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderDemoComponent } from './mat-slider-demo/mat-slider-demo.component';
import { MatAutocompleteDemoComponent } from './mat-autocomplete-demo/mat-autocomplete-demo.component';
import { MatProgressBarDemoComponent } from './mat-progress-bar-demo/mat-progress-bar-demo.component';
import { MatProgressSpinnerDemoComponent } from './mat-progress-spinner-demo/mat-progress-spinner-demo.component';
import { MatExpansionPanelDemoComponent } from './mat-expansion-panel-demo/mat-expansion-panel-demo.component';
import { MatToolbarDemoComponent } from './mat-toolbar-demo/mat-toolbar-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MatSliderDemoComponent,
    MatAutocompleteDemoComponent,
    MatProgressBarDemoComponent,
    MatProgressSpinnerDemoComponent,
    MatExpansionPanelDemoComponent,
    MatToolbarDemoComponent
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
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
