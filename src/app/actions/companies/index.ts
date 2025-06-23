"use server";
import { CompaniesResponse } from "@/@types/companies";
import { allCompaniesService } from "@/services/companies";
import { axiosErrorMessage } from "@/utils/errorMessage";

export interface CompaniesActionsProps<T> {
  success: boolean;
  message: string;
  data?: T;
}

export async function allCompaniesAction(): Promise<CompaniesActionsProps<CompaniesResponse>> {
  try {
    const response = await allCompaniesService();
    return {
      message: "Empresas carregadas com sucesso",
      success: true,
      data: response.data,
    };
  } catch (error) {
    const errorMessage = await axiosErrorMessage(error, "Erro ao buscar empresas");
    return {
      message: errorMessage,
      success: false,
    };
  }
}
