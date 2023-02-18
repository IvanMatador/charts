import { riseUp } from './../animations';
import { Component, OnInit } from '@angular/core';

let sunDashOffset: number = 30;

@Component({
  selector: 'svg:g[app-linear-chart]',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss'],
  animations: [
  ],
})
export class LinearChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
