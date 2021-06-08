import { Component, Input, OnInit } from '@angular/core';
import{ChartModel}from '../../model/chart-model'
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
 private width: number=0;
 private height: number=0;
 private x: any;
 private y: any;
 private svg: any;
 private line: any; 
 @Input() public inputdata: any;
  constructor() {  
     this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom; }
  public data:ChartModel[]=[];
  ngOnInit(): void {
    this.convertData();
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
    
  }

  convertData(){
 for(let i=0;i<this.inputdata.length;i++)
 {
   var chartvalue:ChartModel=new ChartModel();
     chartvalue.name=this.inputdata[i][Object.keys(this.inputdata[i])[0]];
   chartvalue.value=this.inputdata[i][Object.keys(this.inputdata[i])[1]];  
    this.data.push(chartvalue);
 }
  }
  private buildSvg() {
    this.svg = d3.select('svg')
      .append('g')   
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }
  private addXandYAxis() {
    
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => d.name ))
    this.y.domain(d3Array.extent(this.data, (d) => d.value  ));
     this.svg.append("text")  .attr("transform", "rotate(-90)")  

    .attr("y", 2 ) 
     .attr("x", 0-(this.height/2))
      .attr("dy", "1em")  .style("text-anchor", "middle").style("font-size",20)  
    .text("Value(y)"); 
    
        this.svg.append("text")       
        .attr("x", this.width/2)    
      .attr("y", this.height +30) 
         .style("text-anchor", "middle").style("font-size",20)
        .text("Name(x)"); 
    
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x)).attr('color','blue').attr("stroke-width", 10);
  
    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y)).attr('color','green').attr("stroke-width", 10);
  }


  private drawLineAndPath() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x(d.name) )
        .y( (d: any) => this.y(d.value) );
   
    this.svg.append('path')
        .datum(this.data)
        .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1)
            .attr("d", this.line);
  }
}

