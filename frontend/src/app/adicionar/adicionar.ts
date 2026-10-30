import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VagasModel } from '../models/vagas';

@Component({
  selector: 'app-adicionar',
  imports: [FormsModule],
  templateUrl: './adicionar.html',
  styleUrl: './adicionar.css',
})
export class Adicionar {
  @Output() cancelarAdicao = new EventEmitter<void>();
  @Output() salvarAdicao = new EventEmitter<Omit<VagasModel, 'id'>>();

  vagaAdicionada: Omit<VagasModel, 'id'> = {
    nome: '',
    empresa: ''
  };

  cancelar(): void {
    this.cancelarAdicao.emit();
  }

  concluir(): void {
    this.salvarAdicao.emit(this.vagaAdicionada);
  }
}