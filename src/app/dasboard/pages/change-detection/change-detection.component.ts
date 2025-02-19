import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-title title="Change Detection section" />
  <pre>{{ frameworkAsSignal() | json }}</pre>
  <pre>{{ frameworkProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public frameworkActual = computed(() => {
    this.frameworkAsSignal();
  })
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016'
  })
  
  public frameworkProperty = {
    name: 'Angular',
    releaseDate: '2016'
  };
constructor() {
  setTimeout(() => {
    this.frameworkAsSignal.update(value => ({...value, name: 'React'}))
  }, 3000)
}
  
}
