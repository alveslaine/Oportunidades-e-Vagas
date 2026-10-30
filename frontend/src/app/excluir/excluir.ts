import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VagasModel } from '../models/vagas';

@Component({
  selector: 'app-excluir',
  imports: [],
  templateUrl: './excluir.html',
  styleUrl: './excluir.css',
})
export class Excluir {
  @Input() vaga: VagasModel | null = null;

  @Output() cancelarExclusao = new EventEmitter<void>();
  @Output() confirmarExclusao = new EventEmitter<number>();

  cancelar(): void {
    this.cancelarExclusao.emit();
  }

  excluir(): void {
    if (this.vaga) {
      this.confirmarExclusao.emit(this.vaga.id);
    }
  }
}