import { DatePipe, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SchedulerEventComponent } from '../scheduler-event/scheduler-event.component';

interface Schedule {
  startDate: string;
  endDate: string;
  slots: TimeSlot[];
}

interface TimeSlot {
  startDate: string;
  endDate: string;
  events: Event[];
}

interface Event {
  title: string;
  description: string;
}

@Component({
  selector: 'ir-scheduler-day',
  standalone: true,
  imports: [DatePipe, NgFor, SchedulerEventComponent],
  templateUrl: './scheduler-day.component.html',
  styleUrl: './scheduler-day.component.scss',
})
export class SchedulerDayComponent implements OnInit {
  @Input({ required: true }) date!: Date;
  @Input() slotSize: number = 15;
  schedules: Schedule[] = [];

  ngOnInit(): void {
    this.schedules = this.generateSchedules(this.date, this.slotSize);
  }

  /**
   * Generates schedules for a given day.
   * @param day - The day for which schedules are generated.
   * @param slotSize - The size of each slot in minutes.
   * @returns An array of objects representing the schedules.
   */
  private generateSchedules(day: Date, slotSize: number) {
    const schedules: Schedule[] = [];
    for (let i = 0; i < 24; i++) {
      schedules.push({
        startDate: this.cloneDateWithHour(day, i).toString(),
        endDate: this.cloneDateWithHour(day, i + 1).toString(),
        slots: this.generateTimeSlots(day, i, slotSize),
      });
    }
    return schedules;
  }

  /**
   * Generates time slots for a given hour of a specific day.
   * @param day - The day for which slots are generated.
   * @param hour - The hour of the day (0-23).
   * @param slotSize - The size of each slot in minutes.
   * @returns An array of objects representing minute slots with initial empty events array.
   */
  private generateTimeSlots(day: Date, hour: number, slotSize: number) {
    const slots: TimeSlot[] = [];
    const slotsLength = 60 / slotSize;

    for (let i = 0; i < slotsLength; i++) {
      slots.push({
        startDate: this.cloneDateWithHour(day, hour, slotSize * i).toString(),
        endDate: this.cloneDateWithHour(day, hour, slotSize * (i + 1)).toString(),
        events: [],
      });
    }

    return slots;
  }

  /**
   * Clones a date and sets the specified hour with zero minutes and seconds.
   * @param date The original date.
   * @param hour A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   * @returns A new date with the hour set.
   */
  private cloneDateWithHour(date: Date, hour: number = 0, min: number = 0, sec: number = 0, ms: number = 0): Date {
    const clonedDate = new Date(date.getTime());
    clonedDate.setHours(hour, min, sec, ms);
    return clonedDate;
  }
}
