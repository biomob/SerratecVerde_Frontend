import { AxiosResponse } from "axios";
import api from "../axiosNodeApi";
import { CompaniesRankingResponse, CompaniesResponse, CompanyByIdResponse } from "@/@types/companies";

export async function allCompaniesService(): Promise<AxiosResponse<CompaniesResponse>> {
  return await api.get("/empresas");
}

export async function companyByIdService(companyID: string): Promise<AxiosResponse<CompanyByIdResponse>> {
  return await api.get(`/empresas/${companyID}`);
}

export async function companiesRankingService(): Promise<AxiosResponse<CompaniesRankingResponse>> {
  return await api.get("/empresas/ranking");
}
