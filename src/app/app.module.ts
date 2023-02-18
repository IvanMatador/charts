import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LinearChartComponent } from './linear-chart/linear-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LinearChartComponent,
    PieChartComponent,
    LineComponent,
    PieComponent,
    DayComponent,
    WeekComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
