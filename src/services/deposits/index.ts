import { AxiosResponse } from "axios";
import api from "../axiosNodeApi";
import {
  DepositByIdResponse,
  DepositsByCompanyIdResponse,
  DepositsByTeamIdResponse,
  DepositsResponse,
  DepositsStatisticsByPeriodResponse,
  DepositsStatisticsResponse,
} from "@/@types/deposits";

export async function allDepositsService(): Promise<AxiosResponse<DepositsResponse>> {
  return await api.get("/depositos");
}

export async function depositisStatisticsService(): Promise<AxiosResponse<DepositsStatisticsResponse>> {
  return await api.get("/depositos/estatisticas");
}

export async function depositsStatisticsByPeriodService(
  startDate: string,
  endDate: string
): Promise<AxiosResponse<DepositsStatisticsByPeriodResponse>> {
  return await api.get(`/depositos/estatisticas/periodo?dataInicio=${startDate}&dataFim${endDate}`);
}

export async function depositByIdService(depositId: string): Promise<AxiosResponse<DepositByIdResponse>> {
  return await api.get(`/depositos/${depositId}`);
}

export async function depositByTeamIdService(teamId: string): Promise<AxiosResponse<DepositsByTeamIdResponse>> {
  return await api.get(`/depositos/equipe/${teamId}`);
}

export async function depositByCompanyIdService(
  companyId: string
): Promise<AxiosResponse<DepositsByCompanyIdResponse>> {
  return await api.get(`/depositos/empresa/${companyId}`);
}
