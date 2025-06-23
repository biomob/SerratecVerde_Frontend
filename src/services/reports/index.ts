import { AxiosResponse } from "axios";
import api from "../axiosNodeApi";
import {
  CompanyReportResponse,
  GeneralDashboardResponse,
  GeneralPublicRankingdResponse,
  GeneralStatisticsResponse,
  TeamReportResponse,
} from "@/@types/reports";

export async function generalDashboardService(): Promise<AxiosResponse<GeneralDashboardResponse>> {
  return await api.get("/relatorios/dashboard");
}

export async function generalPublicRankingService(): Promise<AxiosResponse<GeneralPublicRankingdResponse>> {
  return await api.get("/relatorios/ranking");
}

export async function generalStatisticsService(): Promise<AxiosResponse<GeneralStatisticsResponse>> {
  return await api.get("/relatorios/estatisticas");
}

export async function companyReportService(companyiD: string): Promise<AxiosResponse<CompanyReportResponse>> {
  return await api.get(`/relatorios/empresa/${companyiD}`);
}

export async function teamReportService(teamID: string): Promise<AxiosResponse<TeamReportResponse>> {
  return await api.get(`/relatorios/equipe/${teamID}`);
}
