export interface TeamsResponse {
  success: boolean;
  message: string;
  data: TeamType[];
}

export interface TeamByIdResponse {
  success: boolean;
  message: string;
  data: TeamType;
}

export interface TeamType {
  id_equipe: number;
  nome_equipe: string;
  id_empresa: number;
  responsavel_nome: string;
  responsavel_email: string;
  telefone: string | null;
  data_cadastro: string;
  data_atualizacao: string;
  nome_empresa: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
}

export interface TeamCreateRequest {
  nome_equipe: string;
  id_empresa: number;
  responsavel_nome: string;
  responsavel_email: string;
  cor: string;
  telefone: string;
}

export interface TeamsRankingResponse {
  success: boolean;
  message: string;
  data: TeamRankingItem[];
}

export interface TeamRankingItem {
  posicao: number;
  id_equipe: number;
  nome_equipe: string;
  nome_empresa: string;
  total_depositos: string;
  total_quantidade: string;
  total_pontos: string;
}
