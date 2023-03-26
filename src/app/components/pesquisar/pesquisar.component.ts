import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css'],
})
export class PesquisarComponent {
  @Output() escreveu: EventEmitter<any> = new EventEmitter();
  inputHandler(event: any) {
    this.escreveu.emit(event)
  }
}
