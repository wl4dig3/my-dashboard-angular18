import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D';
@Component({
  imports: [ TitleComponent ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

public showContent = signal(false);
public grade = signal<Grade>('A');
public frameworks = signal(['Angular', 'React', 'Vue', 'Querty', 'Ember']);
public frameworks2 = signal(['Svelte']);

public toggleContent() {
  this.showContent.update(value => !value);
};
}

