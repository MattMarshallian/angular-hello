import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSliderDemoComponent } from './mat-slider-demo.component';

describe('MatSliderDemoComponent', () => {
  let component: MatSliderDemoComponent;
  let fixture: ComponentFixture<MatSliderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSliderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
