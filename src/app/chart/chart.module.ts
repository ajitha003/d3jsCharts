import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{BarchartComponent}from './barchart/barchart.component';
import{GChartComponent} from './g-chart/g-chart.component';
import{LinechartComponent}from './linechart/linechart.component';
import{PiechartComponent}from './piechart/piechart.component'



@NgModule({
  declarations: [
    BarchartComponent,
    LinechartComponent,
    PiechartComponent,
    GChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PiechartComponent,LinechartComponent,GChartComponent,BarchartComponent],
})
export class ChartModule { }
