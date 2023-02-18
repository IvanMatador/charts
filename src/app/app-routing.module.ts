import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';


const routes: Routes = [
  { path: '', component: WeekComponent },
  { path: 'day', component: DayComponent },
  { path: 'month', component: MonthComponent },
  { path: '**', redirectTo: 'week', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
