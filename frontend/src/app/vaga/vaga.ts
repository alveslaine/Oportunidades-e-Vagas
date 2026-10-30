import { Component, OnInit, signal } from '@angular/core';
import { VagasModel } from '../models/vagas';
import { VagaService } from '../services/vaga.service';
import { Editar } from '../editar/editar';
import { Excluir } from '../excluir/excluir';

@Component({
  selector: 'app-vaga',
  imports: [Editar, Excluir],
  templateUrl: './vaga.html',
  styleUrl: './vaga.css',
})
export class Vaga implements OnInit {
  vagas = signal<VagasModel[]>([]);
  vagaSelecionada: VagasModel | null = null;
  modalEditarAberto = false;
  modalExcluirAberto = false;

  constructor(private vagaService: VagaService) {}

  ngOnInit(): void {
     this.carregarVagas();
  }

  carregarVagas(): void {
    this.vagaService.listarTodas().subscribe({
      next: (dados) => {
        this.vagas.set(dados);
      },
      error: (erro) => {
        console.error('Erro ao carregar vagas:', erro);
      }
    });
  }

  abrirModalEditar(vaga: VagasModel): void {
    this.vagaSelecionada = vaga;
    this.modalEditarAberto = true;
  }

  atualizarVaga(vaga: VagasModel): void {
    this.vagaService.atualizar(vaga.id, vaga).subscribe({
      next: () => {
        this.carregarVagas();
        this.fecharModais();
      },
      error: (erro) => {
        console.error('Erro ao atualizar vaga:', erro);
      }
    });
  }

  abrirModalExcluir(vaga: VagasModel): void {
    this.vagaSelecionada = vaga;
    this.modalExcluirAberto = true;
  }

   excluirVaga(id: number): void {
    this.vagaService.excluir(id).subscribe({
      next: () => {
        this.carregarVagas();
        this.fecharModais();
      },
      error: (erro) => {
        console.error('Erro ao excluir vaga:', erro);
      }
    });
  }

  fecharModais(): void {
    this.modalEditarAberto = false;
    this.modalExcluirAberto = false;
    this.vagaSelecionada = null;
  }
}