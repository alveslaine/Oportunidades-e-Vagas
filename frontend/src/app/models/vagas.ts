export interface VagasModel{
	id: number;
	nome: string;
	empresa: string;
	descricao?: string;
	salario?: number;
	contrato?: string;
	modalidade?: string;
	inscricao?: string;
	plataforma?: string;
	link?: string;
	status?: string;
}