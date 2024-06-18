import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerDayComponent } from './scheduler-day.component';
import { By } from '@angular/platform-browser';

fdescribe('SchedulerDayComponent', () => {
  let component: SchedulerDayComponent;
  let fixture: ComponentFixture<SchedulerDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerDayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render time zone', () => {
    const timeZoneEl = fixture.debugElement.query(By.css('[data-testid="timezone"]'));
    const testDate = new Date();
    const offset = testDate.getTimezoneOffset();
    component.date = testDate;
    fixture.detectChanges();

    expect(timeZoneEl.nativeElement.textContent).toContain('GMT+');
  });
});
