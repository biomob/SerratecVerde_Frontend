export interface CompaniesResponse {
  success: boolean;
  message: string;
  data: CompanyType[];
}

export interface CompanyType {
  id_empresa: number;
  nome_empresa: string;
  cnpj: string;
  responsavel_nome: string;
  responsavel_email: string;
  telefone: string;
  endereco: string;
  data_cadastro: string;
  data_atualizacao: string;
  total_equipes: string;
  total_depositos: string;
  logo_dark: string;
  logo: string;
}

export interface CompanyCreateRequest {
  nome: string;
  email: string;
  telefone: string;
  temEquipes: boolean;
}

export type CompanyUpdateRequest = Omit<CompanyCreateRequest, "temEquipes">;

export interface CompanyByIdResponse {
  success: boolean;
  message: string;
  data: CompanyType;
}

export interface CompaniesRankingResponse {
  success: boolean;
  message: string;
  data: CompanyRankingItem[];
}

export interface CompanyRankingItem {
  posicao: number;
  id_empresa: number;
  nome_empresa: string;
  total_equipes: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
}
