import { TaxBracket } from "@/app/types/taxes";

export const calculateTaxes = (income: number, taxBrackets: TaxBracket[]) => {
  let totalTaxes = 0;

  const taxDetails: { band: string; tax: number }[] = [];

  for (const bracket of taxBrackets) {
    if (income > bracket.min) {
      const taxableIncome = bracket.max
        ? Math.min(income, bracket.max) - bracket.min
        : income - bracket.min;
      const taxes = taxableIncome * bracket.rate;
      totalTaxes += taxes;

      taxDetails.push({
        band: bracket.max
          ? `$${bracket.min} - $${bracket.max}`
          : `$${bracket.min}+`,
        tax: parseFloat(taxes.toFixed(2)),
      });
    }
  }

  const effectiveRate = parseFloat((totalTaxes / income).toFixed(2));
  totalTaxes = parseFloat(totalTaxes.toFixed(2));

  return { totalTaxes, taxDetails, effectiveRate };
};
