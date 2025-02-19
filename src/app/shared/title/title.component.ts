import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `<h1 class="text-2xl mb-5">{{ title }}</h1>
  <!-- @for (item of listado(); track $index)
    {
      <ul>
    <li>{{ item }}</li>
  </ul>
    } -->
  `,
  styleUrl: './title.component.css'
})
export  class TitleComponent {
@Input({required: true}) title!: string;
public listado = signal(['mac', 'windows', 'linux']);
}
