import { Component, OnInit } from '@angular/core';
import { fadeIn, turnUp } from '../animations';

@Component({
  selector: 'svg:g[app-pie-chart]',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  animations: [
    turnUp(80),
    fadeIn
  ],
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
