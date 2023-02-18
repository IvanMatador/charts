import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Points } from '../line/line.component';
import { fadeIn } from '../animations';

export interface RoundPoints {
  cx: number,
  cy: number,
  r: number,
  y2: number,
  offset: number,
  sleepQuality: 'sleep' | 'rest' | 'activity'
}

@Component({
  selector: 'svg:g[app-pie]',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  animations: [
    trigger('turnUp', [
      state('void => *', style({ strokeDashoffset: '{{ newOffset }}' }), { params : {
        newOffset: 0
      }}),
      transition('void => *', [
        style({ strokeDashoffset: 100 }),
        animate(1000, style({ strokeDashoffset: 50 })),
        animate('0.6s ease-out')
      ])
    ]),
    fadeIn
  ]
})
export class PieComponent implements OnInit, OnChanges {

  @Input() points!: RoundPoints;

  strokeDashoffset: number = 100;

  stroke: 'url(#rest)' | 'url(#activity)' | 'url(#sleep)' = 'url(#activity)';
  // path: string = 'M50 500 C50 500, 51 0, 51 0';
  transform: string = 'rotate(-90 100 120)';
  // dArray: string = '40 60';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const points = changes['points'].currentValue;
    if(points) this.getPoints(points);
  }

  getPoints(points: RoundPoints) {
    this.transform = `rotate(-90 ${points.cx} ${points.cy})`;
    // const k = (points.y1/100) * points.offset;
    this.strokeDashoffset = 100 - points.offset;
    // this.path = `M${points.x1} ${points.y1} C${points.x1} ${points.y1}, ${points.x2 + 1} ${points.y2 + k}, ${points.x2 + 1} ${points.y2 + k}`;

    switch(points.sleepQuality) {
      case 'rest':
        this.stroke = 'url(#rest)';
        break;

      case 'activity':
        this.stroke = 'url(#activity)';
        break;

      case 'sleep':
        this.stroke = 'url(#sleep)';
        break;

      default: this.stroke = 'url(#sleep)';
    }
  }

}
