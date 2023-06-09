import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Input() etiqueta = '';
  @Input() tipo = '';
  @Input() classes = '';
  @Input() mensagemEspacoReservado = '';
}
