import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface Points {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  offset: number,
  sleepQuality: 'good' | 'bed' | 'sleep' | 'rest' | 'activity'
}

@Component({
  selector: 'svg:g[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  animations: [
    trigger('riseUp', [
      state('void => *', style({ strokeDashoffset: '{{ newOffset }}' }), { params : {
        newOffset: 0
      }}),
      transition('void => *', [
        style({ opacity: 0, strokeDashoffset: 100 }),
        animate(1000, style({ opacity: 1, strokeDashoffset: 50 })),
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class LineComponent implements OnInit, OnChanges {

  @Input() points!: Points;


  strokeDashoffset: number = 100;

  stroke: 'url(#aboveAverage)' | 'url(#belowAverage)' | 'url(#rest)' | 'url(#activity)' | 'url(#sleep)' = 'url(#belowAverage)';
  path: string = 'M50 500 C50 500, 51 0, 51 0';



  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const points = changes['points'].currentValue;
    if(points) this.getPoints(points);
  }

  ngOnInit(): void {
  }

  getPoints(points: Points) {
    const k = (points.y1/100) * points.offset;
    this.strokeDashoffset = points.offset;
    this.path = `M${points.x1} ${points.y1} C${points.x1} ${points.y1}, ${points.x2 + 1} ${points.y2 + k}, ${points.x2 + 1} ${points.y2 + k}`;
    // points.sleepQuality === 'good' ? this.stroke = 'url(#aboveAverage)' : this.stroke = 'url(#belowAverage)';
    switch(points.sleepQuality) {
      case 'good':
        this.stroke = 'url(#aboveAverage)';
        break;

      case 'bed':
        this.stroke = 'url(#belowAverage)';
        break;

      case 'rest':
        this.stroke = 'url(#rest)';
        break;

      case 'activity':
        this.stroke = 'url(#activity)';
        break;

      case 'sleep':
        this.stroke = 'url(#sleep)';
        break;

      default: this.stroke = 'url(#aboveAverage)';
    }
  }

}
