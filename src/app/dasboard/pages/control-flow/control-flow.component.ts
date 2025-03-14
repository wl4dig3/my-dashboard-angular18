import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { ListadoProductosComponent } from '../defer-views/listado-productos.component';
type Grade = 'A' | 'B' | 'C' | 'D';
@Component({
  imports: [TitleComponent, ListadoProductosComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

// public showContent: boolean = false;
public showContent = signal(false);
public grade = signal<Grade>('A');
public frameworks = signal(['Angular', 'React', 'Vue', 'Querty', 'Ember']);
public frameworks2 = signal(['Svelte']);

mensajePadre: string = 'Un saludo inicial desde componente padre';
public toggleContent() {
  // this.showContent = !this.showContent;
  this.showContent.update(value => !value);
};
}

