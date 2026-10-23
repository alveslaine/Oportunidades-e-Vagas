import { Component, OnInit } from '@angular/core';
import { VagasModel } from '../models/vagas';
import { VagaService } from '../services/vaga.service';

@Component({
  selector: 'app-vaga',
  imports: [],
  templateUrl: './vaga.html',
  styleUrl: './vaga.css',
})
export class Vaga implements OnInit {

  vagas: VagasModel[] = [];

  constructor(private vagaService: VagaService) {}

  ngOnInit(): void {
    this.vagaService.listarTodas().subscribe({
      next: (dados) => {
        this.vagas = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar vagas:', erro);
      }
    });
  }
}
