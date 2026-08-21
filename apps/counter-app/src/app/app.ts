import { Component } from '@angular/core';
import { CounterLibComponent } from '@counter-demo/counter-lib'; 

@Component({
  standalone: true,
  imports: [CounterLibComponent],
  selector: 'counter-demo-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {}
