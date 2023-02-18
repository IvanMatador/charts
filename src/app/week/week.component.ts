import { Component, OnInit } from '@angular/core';
import { Points } from '../line/line.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  // animations: [
  //   trigger('riseUp', [
  //     state('void => *', style({ strokeDashoffset: '{{ newOffset }}' }), { params : {
  //       newOffset: 0
  //     }}),
  //     transition('void => *', [
  //       style({ opacity: 0, strokeDashoffset: 100 }),
  //       animate(1000, style({ opacity: 1, strokeDashoffset: 50 })),
  //       animate('0.6s ease-out')
  //     ])
  //   ])
  // ]
})
export class WeekComponent implements OnInit {

  points: Points[] = [
    { x1: 120, y1: 500, x2: 120, y2: 0, offset: 8, sleepQuality: 'good' },
    { x1: 270, y1: 500, x2: 270, y2: 0, offset: 15, sleepQuality: 'bed' },
    { x1: 420, y1: 500, x2: 420, y2: 0, offset: 0, sleepQuality: 'good' },
    { x1: 570, y1: 500, x2: 570, y2: 0, offset: 8, sleepQuality: 'good' },
    { x1: 720, y1: 500, x2: 720, y2: 0, offset: 12, sleepQuality: 'bed' },
    { x1: 870, y1: 500, x2: 870, y2: 0, offset: 18, sleepQuality: 'good' },
    { x1: 1020, y1: 500, x2: 1020, y2: 0, offset: 9, sleepQuality: 'good' },
  ]

  pointsArray: Points[] = [];
  tempPoints: Points = {
    x1: 120,
    y1: 500,
    x2: 120,
    y2: 0,
    offset: 0,
    sleepQuality: 'bed'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
