import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GChartComponent } from './g-chart.component';

describe('GChartComponent', () => {
  let component: GChartComponent;
  let fixture: ComponentFixture<GChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
