import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterLibComponent } from './counter-lib';

describe('CounterLibComponent', () => {
  let component: CounterLibComponent;
  let fixture: ComponentFixture<CounterLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен увеличивать значение на 1', () => {
    component.increment();
    expect(component.count).toBe(1);
  });
});
