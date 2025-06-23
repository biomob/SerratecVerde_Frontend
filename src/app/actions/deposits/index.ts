"use server";

import { DepositsByCompanyIdResponse } from "@/@types/deposits";
import { depositByCompanyIdService } from "@/services/deposits";
import { axiosErrorMessage } from "@/utils/errorMessage";

interface ReportsActionsProps<T> {
  success: boolean;
  message: string;
  data?: T;
}

export async function depositByCompanyIdAction(
  companyId: string
): Promise<ReportsActionsProps<DepositsByCompanyIdResponse>> {
  try {
    const response = await depositByCompanyIdService(companyId);
    return {
      message: "Relatório de empresa buscado com sucesso",
      success: true,
      data: response.data,
    };
  } catch (error) {
    const errorMessage = await axiosErrorMessage(error, "Erro ao buscar relatório de empresa");
    return {
      message: errorMessage,
      success: false,
    };
  }
}
