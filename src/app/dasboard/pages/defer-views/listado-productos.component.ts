import { Component, signal, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  saludo: string = 'Un saludo inicial';
  tareas: string[] = ['pollito', 'perro', 'gato'];
  texto: string = '';

@Input() mensajeHijo!: string;

  // datos para la calculadora
  resultado: number = 0;
  operandoA: number = 10;
  operandoB: number = 0;
  sumar() { 
    this.resultado = this.operandoA + this.operandoB;
    
  }

  agregarTarea(nuevaTarea: string) {
    
    if (nuevaTarea.trim() !== '') {
      this.tareas.push(nuevaTarea);
    }
  }


  actualizarTexto(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;
    this.texto = elementoInput.value;
  }
  public message: string = '';
  public showMessage() {
    // console.log('hola')
    this.message = 'Hola has presionado el boton';
  }
  public resetarMessage() {
    this.message = '';
  }

  private title = 'El listado-productos Wlad si  works!';

  get getMostrarTitulo() {
    return this.title;
  }

  public listado = signal([
    {
      Descripcion: ' Nuevo producto',
      Precio: 100,
    },
    {
      Descripcion: ' Nuevo producto',
      Precio: 1000,
    },
    {
      Descripcion: 'Nuevo producto',
      Precio: 900,
    },
  ]);
}
