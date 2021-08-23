import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html'
})
export class MyComponent implements OnInit {
  lineChartType: ChartType = 'line';

  constructor() {}

  ngOnInit(): void {}
}
