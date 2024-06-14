"use server";
import { calculateTaxes } from "@/app/feature-logic/taxes/calculateTaxes";
import { FormState } from "@/app/types/response";
const API_BASE_URL = process.env.API_BASE_URL;
const API_TAX_BRACKETS_ENDPOINT = process.env.API_TAX_BRACKETS_ENDPOINT;
export async function getIncomeTax(
  currentState: FormState,
  formData: FormData
): Promise<FormState> {
  const response = await fetch(
    `${API_BASE_URL}${API_TAX_BRACKETS_ENDPOINT}/${formData.get("taxYear")}`
  );
  const { tax_brackets: taxBrackets = [] } = await response.json();
  if (taxBrackets.length === 0) {
    // return error
  }
  return {
    status: "success",
    data: calculateTaxes(formData.get("grossIncome"), taxBrackets),
  };
}
