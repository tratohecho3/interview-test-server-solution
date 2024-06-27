"use server";
import { calculateTaxes } from "@/app/feature-logic/taxes/calculateTaxes";
import { FormState } from "@/app/types/response";
import { TaxCalculatorFormSchema } from "../lib/zod/TaxCalculatorFormSchema";
import { fakeNewRelic } from "../lib/fakeNewRelic";
const API_BASE_URL = process.env.API_BASE_URL;
const API_TAX_BRACKETS_ENDPOINT = process.env.API_TAX_BRACKETS_ENDPOINT;
export async function getIncomeTax(
  currentState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // validate and extract data
    const { taxYear, grossIncome } = TaxCalculatorFormSchema.parse(formData);
    const response = await fetch(
      `${API_BASE_URL}${API_TAX_BRACKETS_ENDPOINT}/${taxYear}`,
      { cache: "force-cache" }
    );
    const { tax_brackets: taxBrackets = [] } = await response.json();
    if (taxBrackets.length === 0) {
      throw new Error("Tax Brackets are empty");
    }
    return {
      status: "success",
      data: calculateTaxes(grossIncome, taxBrackets),
    };
  } catch (error) {
    // This will be a perfect place to call new relic to inform about the error
    fakeNewRelic(error);
    return {
      status: "failed",
      data: null,
    };
  }
}
