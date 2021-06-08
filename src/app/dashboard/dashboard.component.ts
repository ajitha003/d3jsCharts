import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public inputdata: any[] = [
    {date: new Date('2016-05-01'), value: 40},
    {date: new Date('2017-05-04'), value: 63},
    {date: new Date('2018-05-05'), value: 75},
    {date: new Date('2019-05-06'), value: 50},
    {date: new Date('2020-05-07'), value: 70},
    {date: new Date('2021-05-08'), value: 55},
    {date: new Date('2022-05-09'), value: 100},
  ];

  BarChartData: any = [
    {Model: 'MB-C', Stock: 70},
    {Model: 'H-City', Stock: 80},
    {Model: 'Swift', Stock: 20},
    {Model: 'H-Civic', Stock: 70},
    {Model: 'Santro', Stock: 12},
    {Model: 'i20', Stock: 10},
    {Model: 'Duster', Stock: 50},
    {Model: 'Hector', Stock: 40}
];

PieChartData: any[] = [
  {vehicleName: 'Honda', salesPer: 25},
  {vehicleName: 'MG', salesPer: 38},
  {vehicleName: 'Tata', salesPer: 45},
  {vehicleName: 'Ford', salesPer: 15},
  {vehicleName: 'Benz', salesPer: 10},
  {vehicleName: 'Hyundai', salesPer: 17},
  {vehicleName: 'Audi',  salesPer: 10}
];
  constructor() { }

  ngOnInit(): void {
  }

}
