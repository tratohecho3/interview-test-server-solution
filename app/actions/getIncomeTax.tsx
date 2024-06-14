"use server";
import { calculateTaxes } from "@/app/feature-logic/taxes/calculateTaxes";
const API_BASE_URL = process.env.API_BASE_URL;
const API_TAX_BRACKETS_ENDPOINT = process.env.API_TAX_BRACKETS_ENDPOINT;
export async function getIncomeTax(formData: FormData) {
  const response = await fetch(
    `${API_BASE_URL}${API_TAX_BRACKETS_ENDPOINT}/${formData.get("taxYear")}`
  );
  const { tax_brackets: taxBrackets = [] } = await response.json();
  if (taxBrackets.length === 0) {
    // return error
    console.log("===error");
  }
  console.log(calculateTaxes(formData.get("grossIncome"), taxBrackets));
}
