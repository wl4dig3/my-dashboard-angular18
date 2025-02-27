import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component ';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ HeavyLoadersFastComponent, TitleComponent, CommonModule ],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
