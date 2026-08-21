import { Component } from '@angular/core';

@Component({
  selector: 'counter-demo-core', // Поменяли имя тега здесь
  standalone: true,
  templateUrl: './counter-lib.html',
  styleUrls: ['./counter-lib.css']
})
export class CounterLibComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
