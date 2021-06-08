import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { ChartModel } from '../../model/chart-model';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  StatsBarChart: ChartModel[]=[];
currentRate = 8;
  title = 'D3 Barchart ';
  width: number=0;
  height: number=0;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  color:any;
  @Input() public inputdata: any;
  constructor() { 
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;}

  ngOnInit(): void {
    this.convertData();
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }
  convertData(){
    for(let i=0;i<this.inputdata.length;i++)
    {
      var chartvalue:ChartModel=new ChartModel();
        chartvalue.name=this.inputdata[i][Object.keys(this.inputdata[i])[0]];
      chartvalue.value=this.inputdata[i][Object.keys(this.inputdata[i])[1]];  
       this.StatsBarChart.push(chartvalue);
    }
     }
  initSvg() {
    this.color = d3Scale.scaleOrdinal()
    .range(['#FFA500', '#6d7f9c', '#FF0000', '#28fc03', '#FF00FF', '#d0743c', '#00FA9A','#adada5']);
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '120%')
      .attr('height', '120%')
      .attr('viewBox', '0 0 900 500'); 
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.StatsBarChart.map((d) => d.name));
    this.y.domain([0, d3Array.max(this.StatsBarChart, (d) => d.value)]);
  }

  drawAxis() {

  
  this.svg.append("text")  .attr("transform", "rotate(-90)")  
.attr("y", 0-12 ) 
 .attr("x", 0-(this.height/2))
  .attr("dy", "1em")  .style("text-anchor", "middle").style("font-size",25)  
.text("Value(y)"); 

    this.svg.append("text")       
    .attr("x", this.width/2 )    
  .attr("y", this.height +75) 
     .style("text-anchor", "middle").style("font-size",25)
    .text("Name(x)"); 



    this.g.append('g')
      .attr('class', 'axis axis--x').attr('color','#5024c9').attr("stroke-width", 5)
      .attr('transform', 'translate(0,' + this.height + ')') .style("font-size",20)
      .call(d3Axis.axisBottom(this.x));

    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y)).attr("stroke-width", 5)
      .append('text').attr('color','#FF00FF')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 20)
      .attr('dy', '1em')
      .attr('text-anchor', 'end')
      .text('value');
  }

  drawBars() {
    this.g.selectAll('.bar')
      .data(this.StatsBarChart)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: { name: any; }) => this.x(d.name)) 
      .attr('y', (d: {value: any; }) => this.y(d.value)) 
      .attr('width', this.x.bandwidth())
       .attr('fill',(d: any) => this.color(d.name))
      .attr('height', (d: { value: any; }) => this.height - this.y(d.value));
  }

}
