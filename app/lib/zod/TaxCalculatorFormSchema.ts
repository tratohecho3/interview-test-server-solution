import { zfd } from "zod-form-data";
import { z } from "zod";

export const TaxCalculatorFormSchema = zfd.formData({
  grossIncome: zfd.numeric(z.number().min(1).max(9999999999)),
  taxYear: zfd.text(z.enum(["2019", "2020", "2021", "2022"])),
});
