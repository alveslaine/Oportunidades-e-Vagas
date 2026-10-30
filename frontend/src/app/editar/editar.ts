import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { VagasModel } from '../models/vagas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.html',
  styleUrl: './editar.css',
})
export class Editar implements OnChanges {
  @Input() vaga: VagasModel | null = null;

  @Output() cancelarEdicao = new EventEmitter<void>();
  @Output() salvarEdicao = new EventEmitter<VagasModel>();

  vagaEditada: VagasModel | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vaga'] && this.vaga) {
      this.vagaEditada = { ...this.vaga };
    }
  }

  cancelar(): void {
    this.cancelarEdicao.emit();
  }

  concluir(): void {
    if (this.vagaEditada) {
      this.salvarEdicao.emit(this.vagaEditada);
    }
  }
}