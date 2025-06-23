"use server";

export async function axiosErrorMessage(error: any, message: string, stack?: boolean, ignoreStatus?: boolean) {
  const errorMessage =
    error?.response?.data?.message || error?.response?.data?.error || error?.message || error?.toString() || message;

  const stackError = error?.stack ? `\nStack: ${error.stack}` : "";

  const errorStatus = error?.response?.status;

  return `${!ignoreStatus ? ` ErrorStatus: ${errorStatus}, ` : ""}${errorMessage}, ${stack ? "Stack: " + stackError : ""}`;
}
