"use server";
import { CompanyReportResponse, GeneralDashboardResponse, TeamReportResponse } from "@/@types/reports";
import { companyReportService, generalDashboardService, teamReportService } from "@/services/reports";
import { axiosErrorMessage } from "@/utils/errorMessage";

export interface ReportsActionsProps<T> {
  success: boolean;
  message: string;
  data?: T;
}

export async function generalDashboardAction(): Promise<ReportsActionsProps<GeneralDashboardResponse>> {
  try {
    const response = await generalDashboardService();
    return {
      message: "Dashboard geral buscado com sucesso",
      success: true,
      data: response.data,
    };
  } catch (error) {
    const errorMessage = await axiosErrorMessage(error, "Erro ao buscar dashboard geral");
    return {
      message: errorMessage,
      success: false,
    };
  }
}

export async function reportByTeamIdAction(teamId: string): Promise<ReportsActionsProps<TeamReportResponse>> {
  try {
    const response = await teamReportService(teamId);
    return {
      message: "Relatório de equipe buscado com sucesso",
      success: true,
      data: response.data,
    };
  } catch (error) {
    const errorMessage = await axiosErrorMessage(error, "Erro ao buscar relatório de equipe");
    return {
      message: errorMessage,
      success: false,
    };
  }
}

export async function reportByCompanyIdAction(companyiD: string): Promise<ReportsActionsProps<CompanyReportResponse>> {
  try {
    const response = await companyReportService(companyiD);
    return {
      message: "Relatório de equipe buscado com sucesso",
      success: true,
      data: response.data,
    };
  } catch (error) {
    const errorMessage = await axiosErrorMessage(error, "Erro ao buscar relatório de equipe");
    return {
      message: errorMessage,
      success: false,
    };
  }
}
