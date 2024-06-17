import { Component, Input } from '@angular/core';

@Component({
  selector: 'ir-scheduler-event',
  standalone: true,
  imports: [],
  templateUrl: './scheduler-event.component.html',
  styleUrl: './scheduler-event.component.scss',
})
export class SchedulerEventComponent {
  @Input() title?: string;
  @Input() description?: string;
}
