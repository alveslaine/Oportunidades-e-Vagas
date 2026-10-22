package com.oportunidades.oportunidades.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tb_oportunidades")
public class Vaga {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "O atributo nome é obrigatório!")
	private String nome;
	
	@NotBlank(message = "O atributo empresa é obrigatório!")
	private String empresa;
	
	private String descricao;
	private BigDecimal salario;
	private String contrato;
	private Long modalidade;
	private LocalDate inscricao;
	private String plataforma;
	private Long link;
	private Long status;
	
	public Long getStatus() {
		return status;
	}
	public void setStatus(Long status) {
		this.status = status;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmpresa() {
		return empresa;
	}
	public void setEmpresa(String empresa) {
		this.empresa = empresa;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public BigDecimal getSalario() {
		return salario;
	}
	public void setSalario(BigDecimal salario) {
		this.salario = salario;
	}
	public String getContrato() {
		return contrato;
	}
	public void setContrato(String contrato) {
		this.contrato = contrato;
	}
	public Long getModalidade() {
		return modalidade;
	}
	public void setModalidade(Long modalidade) {
		this.modalidade = modalidade;
	}
	public LocalDate getInscricao() {
		return inscricao;
	}
	public void setInscricao(LocalDate inscricao) {
		this.inscricao = inscricao;
	}
	public String getPlataforma() {
		return plataforma;
	}
	public void setPlataforma(String plataforma) {
		this.plataforma = plataforma;
	}
	public Long getLink() {
		return link;
	}
	public void setLink(Long link) {
		this.link = link;
	}

	
	
}
