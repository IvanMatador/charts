import { Component, OnInit } from '@angular/core';
import { Points } from '../line/line.component';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  pointsMonth: Points[] = [
    { x1: 100, y1: 500, x2: 100, y2: 0, offset: 0, sleepQuality: 'rest' },
    { x1: 134, y1: 500, x2: 134, y2: 0, offset: 25, sleepQuality: 'activity' },
    { x1: 168, y1: 500, x2: 168, y2: 0, offset: 70, sleepQuality: 'activity' },
    { x1: 202, y1: 500, x2: 202, y2: 0, offset: 10, sleepQuality: 'rest' },
    { x1: 236, y1: 500, x2: 236, y2: 0, offset: 75, sleepQuality: 'activity' },
    { x1: 270, y1: 500, x2: 270, y2: 0, offset: 20, sleepQuality: 'rest' },
    { x1: 304, y1: 500, x2: 304, y2: 0, offset: 50, sleepQuality: 'rest' },
    { x1: 338, y1: 500, x2: 338, y2: 0, offset: 0, sleepQuality: 'rest' },
    { x1: 372, y1: 500, x2: 372, y2: 0, offset: 12, sleepQuality: 'activity' },
    { x1: 406, y1: 500, x2: 406, y2: 0, offset: 70, sleepQuality: 'activity' },
    { x1: 440, y1: 500, x2: 440, y2: 0, offset: 10, sleepQuality: 'rest' },
    { x1: 474, y1: 500, x2: 474, y2: 0, offset: 75, sleepQuality: 'activity' },
    { x1: 508, y1: 500, x2: 508, y2: 0, offset: 0, sleepQuality: 'activity' },
    { x1: 542, y1: 500, x2: 542, y2: 0, offset: 32, sleepQuality: 'rest' },
    { x1: 576, y1: 500, x2: 576, y2: 0, offset: 70, sleepQuality: 'activity' },
    { x1: 610, y1: 500, x2: 610, y2: 0, offset: 10, sleepQuality: 'rest' },
    { x1: 644, y1: 500, x2: 644, y2: 0, offset: 75, sleepQuality: 'activity' },
    { x1: 678, y1: 500, x2: 678, y2: 0, offset: 0, sleepQuality: 'rest' },
    { x1: 712, y1: 500, x2: 712, y2: 0, offset: 12, sleepQuality: 'activity' },
    { x1: 746, y1: 500, x2: 746, y2: 0, offset: 70, sleepQuality: 'activity' },
    { x1: 780, y1: 500, x2: 780, y2: 0, offset: 10, sleepQuality: 'rest' },
    { x1: 814, y1: 500, x2: 814, y2: 0, offset: 75, sleepQuality: 'activity' },
    { x1: 848, y1: 500, x2: 848, y2: 0, offset: 0, sleepQuality: 'activity' },
    { x1: 882, y1: 500, x2: 882, y2: 0, offset: 34, sleepQuality: 'rest' },
    { x1: 916, y1: 500, x2: 916, y2: 0, offset: 70, sleepQuality: 'activity' },
    { x1: 950, y1: 500, x2: 950, y2: 0, offset: 10, sleepQuality: 'rest' },
    { x1: 984, y1: 500, x2: 984, y2: 0, offset: 75, sleepQuality: 'activity' },
    { x1: 1018, y1: 500, x2: 1018, y2: 0, offset: 30, sleepQuality: 'rest' },
    { x1: 1052, y1: 500, x2: 1052, y2: 0, offset: 20, sleepQuality: 'rest' },
    { x1: 1086, y1: 500, x2: 1086, y2: 0, offset: 10, sleepQuality: 'rest' },
    { x1: 1120, y1: 500, x2: 1120, y2: 0, offset: 60, sleepQuality: 'rest' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getDays() {
    const array = [];
    for(let i = 1; i < 31; i++) { array.push(i) }
    return array;
  }

}
