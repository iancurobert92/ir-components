import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerEventComponent } from './scheduler-event.component';
import { By } from '@angular/platform-browser';

fdescribe('SchedulerEventComponent', () => {
  let component: SchedulerEventComponent;
  let fixture: ComponentFixture<SchedulerEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const titleEl = fixture.debugElement.query(By.css('[data-testid="event-title"]'));
    const testTitle = 'Title';
    component.title = testTitle;

    fixture.detectChanges();

    expect(titleEl.nativeElement.textContent).toBe(testTitle);
  });

  it('should render description', () => {
    const descriptionEl = fixture.debugElement.query(By.css('[data-testid="event-description"]'));
    const testDescription = 'Description';
    component.description = testDescription;

    fixture.detectChanges();

    expect(descriptionEl.nativeElement.textContent).toBe(testDescription);
  });
});
