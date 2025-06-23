export interface DepositsResponse {
  success: boolean;
  message: string;
  data: DepositItem[];
}

export interface DepositItem {
  id_deposito: number;
  id_equipe: number;
  id_tipo_residuo: number;
  quantidade: string;
  data_deposito: string;
  observacoes: string;
  data_atualizacao: string;
  nome_equipe: string;
  nome_empresa: string;
  nome_tipo: string;
  unidade_medida: string;
  pontos_por_kg: string;
  pontos_deposito: string;
}

export interface DepositsStatisticsResponse {
  success: boolean;
  message: string;
  data: DepositsStatisticsData;
}

export interface DepositsStatisticsData {
  total_depositos: string;
  equipes_participantes: string;
  empresas_participantes: string;
  total_quantidade_coletada: string;
  total_pontos: string;
}

export interface DepositsStatisticsByPeriodResponse {
  success: boolean;
  message: string;
  data: DepositsStatisticsByPeriodItem[];
}

export interface DepositsStatisticsByPeriodItem {
  data: string;
  depositos_do_dia: string;
  quantidade_do_dia: string;
  pontos_do_dia: string;
}

export interface DepositByIdResponse {
  success: boolean;
  message: string;
  data: DepositItem;
}

export interface DepositsByTeamIdResponse {
  success: boolean;
  message: string;
  data: DepositByTeamIdItem[];
}

export interface DepositByTeamIdItem {
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

export interface DepositsByCompanyIdResponse {
  success: boolean;
  message: string;
  data: DepositByCompanyIdItem[];
}

export interface DepositByCompanyIdItem {
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

export interface DepositCreateRequest {
  id_equipe: number;
  id_tipo_residuo: number;
  quantidade: number;
  observacoes: string;
}

export interface DepositCreateResponse {
  success: boolean;
  message: string;
  data: DepositItem;
}

export type DepositUpdateRequest = Omit<DepositCreateRequest, "id_equipe" | "id_tipo_residuo" | "data_deposito">;
