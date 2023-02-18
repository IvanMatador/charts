import { Component, OnInit } from '@angular/core';
import { Points } from './line/line.component';
import { RoundPoints } from './pie/pie.component';
import { fadeIn } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn]
})
export class AppComponent implements OnInit {

  title = 'Angular-charts';

  points: RoundPoints[] = [
    { cx: 150, cy: 230, r: 160, y2: 0, offset: 20, sleepQuality: 'activity' },
    { cx: 550, cy: 230, r: 160, y2: 0, offset: 50, sleepQuality: 'rest' },
    { cx: 950, cy: 230, r: 160, y2: 0, offset: 30, sleepQuality: 'sleep' },
  ]

  // pointsArray: Points[] = [];
  // testPoints1: RoundPoints = {
  //   cx: 150,
  //   cy: 230,
  //   r: 80,
  //   y2: 0,
  //   offset: 20,
  //   sleepQuality: 'rest'
  // }

  constructor() {

  }

  ngOnInit(): void {
    // this.tempPoints
  }
}
