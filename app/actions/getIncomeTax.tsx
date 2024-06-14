"use server";
const API_BASE_URL = process.env.API_BASE_URL;
const API_TAX_BRACKETS_ENDPOINT = process.env.API_TAX_BRACKETS_ENDPOINT;
export async function getIncomeTax(formData: FormData) {
  const response = await fetch(
    `${API_BASE_URL}${API_TAX_BRACKETS_ENDPOINT}/${formData.get("taxYear")}`
  );
  const taxBrackets = await response.json();
}
