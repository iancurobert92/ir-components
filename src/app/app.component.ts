import { Component } from '@angular/core';
import { SchedulerComponent } from 'scheduler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SchedulerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
