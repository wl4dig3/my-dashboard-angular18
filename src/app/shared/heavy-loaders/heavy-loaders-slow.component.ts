import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: ` <section>
    <p class="mt-6">heavy loader slow...</p />
  </section> `,
})
export class HeavyLoadersSlowComponent {
  
}
