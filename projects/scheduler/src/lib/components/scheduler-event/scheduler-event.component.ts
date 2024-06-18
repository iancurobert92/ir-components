import { Component, Input } from '@angular/core';
import { SchedulerEvent } from '../../models/scheduler-event.model';

@Component({
  selector: 'ir-scheduler-event',
  standalone: true,
  imports: [],
  templateUrl: './scheduler-event.component.html',
  styleUrl: './scheduler-event.component.scss',
})
export class SchedulerEventComponent implements SchedulerEvent {
  @Input({ required: true }) title!: string;
  @Input() description?: string;
}
