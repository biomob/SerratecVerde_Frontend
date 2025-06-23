import { TeamType } from "../teams";

export interface GeneralDashboardResponse {
  success: boolean;
  message: string;
  data: {
    resumo: DashboardResumo;
    ranking_empresas: DashboardEmpresaRanking[];
    ranking_equipes: DashboardEquipeRanking[];
    tipos_residuos: DashboardTipoResiduo[];
  };
}

export interface DashboardResumo {
  total_depositos: string;
  equipes_participantes: string;
  empresas_participantes: string;
  total_quantidade_coletada: string;
  total_pontos: string;
}

export interface DashboardEmpresaRanking {
  posicao: number;
  id_empresa: number;
  nome_empresa: string;
  total_equipes: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
}

export interface DashboardEquipeRanking {
  posicao: number;
  id_equipe: number;
  nome_equipe: string;
  nome_empresa: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
}

export interface DashboardTipoResiduo {
  id_tipo_residuo: number;
  nome_tipo: string;
  unidade_medida: string;
  pontos_por_kg: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
  equipes_participantes: string;
  empresas_participantes: string;
  cor: string;
}

export interface GeneralPublicRankingdResponse {
  success: boolean;
  message: string;
  data: {
    empresas: DashboardEmpresaRanking[];
    equipes: DashboardEquipeRanking[];
  };
}

export interface GeneralStatisticsResponse {
  success: boolean;
  message: string;
  data: {
    resumo_geral: GeneralStatisticsResumo;
    por_tipo_residuo: GeneralStatisticsTipoResiduo[];
  };
}

export interface GeneralStatisticsResumo {
  total_depositos: string;
  equipes_participantes: string;
  empresas_participantes: string;
  total_quantidade_coletada: string;
  total_pontos: string;
  total_empresas_cadastradas: number;
  total_equipes_cadastradas: number;
}

export interface GeneralStatisticsTipoResiduo {
  id_tipo_residuo: number;
  nome_tipo: string;
  unidade_medida: string;
  pontos_por_kg: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
  equipes_participantes: string;
  empresas_participantes: string;
}

export interface CompanyReportResponse {
  success: boolean;
  message: string;
  data: {
    empresa: CompanyReportEmpresa;
    equipes: CompanyReportEquipe[];
    resumo_por_tipo: CompanyReportResumoTipo[];
    depositos_recentes: CompanyReportDeposito[];
  };
}

export interface CompanyReportEmpresa {
  id_empresa: number;
  nome_empresa: string;
  cnpj: string;
  responsavel_nome: string;
  responsavel_email: string;
  telefone: string | null;
  endereco: string;
  data_cadastro: string;
  data_atualizacao: string;
  total_equipes: string;
  total_depositos: string;
}

export interface CompanyReportEquipe {
  id_equipe: number;
  nome_equipe: string;
  id_empresa: number;
  responsavel_nome: string;
  responsavel_email: string;
  telefone: string | null;
  data_cadastro: string;
  data_atualizacao: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
}

export interface CompanyReportResumoTipo {
  nome_tipo: string;
  total_quantidade: number;
  total_pontos: number;
  total_depositos: number;
}

export interface CompanyReportDeposito {
  id_deposito: number;
  id_equipe: number;
  id_tipo_residuo: number;
  quantidade: string;
  data_deposito: string;
  observacoes: string;
  data_atualizacao: string;
  nome_equipe: string;
  nome_tipo: string;
  unidade_medida: string;
  pontos_por_kg: string;
  pontos_deposito: string;
}

export interface TeamReportResponse {
  success: boolean;
  message: string;
  data: TeamReportType;
}

export interface TeamReportType {
  equipe: TeamType;
  resumo_por_tipo: TeamReportResumoTipo[];
  depositos_recentes: TeamReportDeposito[];
  estatisticas_periodo: TeamReportEstatisticaPeriodo[];
}

export interface TeamReportResumoTipo {
  nome_tipo: string;
  total_quantidade: number;
  total_pontos: number;
  total_depositos: number;
}

export interface TeamReportDeposito {
  id_deposito: number;
  id_equipe: number;
  id_tipo_residuo: number;
  quantidade: string;
  data_deposito: string;
  observacoes: string;
  data_atualizacao: string;
  nome_tipo: string;
  unidade_medida: string;
  pontos_por_kg: string;
  pontos_deposito: string;
}

export interface TeamReportEstatisticaPeriodo {
  data: string;
  depositos_do_dia: string;
  quantidade_do_dia: string;
  pontos_do_dia: string;
}
