import { Component } from '@angular/core';
import { SchedulerDayComponent } from './components';

@Component({
  selector: 'ir-scheduler',
  standalone: true,
  imports: [SchedulerDayComponent],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {
  currentDay: Date = new Date();
}
