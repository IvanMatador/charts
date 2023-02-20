import { Component, Input, OnInit } from '@angular/core';
import { Points } from '../line/line.component';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {


  pointsDay: Points[] = [
    { x1: 150, y1: 500, x2: 150, y2: 0, offset: 0, sleepQuality: 'sleep' },
    { x1: 320, y1: 500, x2: 320, y2: 0, offset: 0, sleepQuality: 'sleep' },
    { x1: 500, y1: 500, x2: 500, y2: 0, offset: 70, sleepQuality: 'activity' },
    { x1: 660, y1: 500, x2: 660, y2: 0, offset: 10, sleepQuality: 'rest' },
    { x1: 810, y1: 500, x2: 810, y2: 0, offset: 75, sleepQuality: 'activity' },
    { x1: 1010, y1: 500, x2: 1010, y2: 0, offset: 50, sleepQuality: 'rest' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
