import { calculateTaxes } from "@/app/feature-logic/taxes/calculateTaxes";

describe("calculateTaxes", () => {
  const mockProps = {
    income: 20000,
    taxBrackets: [
      {
        max: 48535,
        min: 0,
        rate: 0.15,
      },
      {
        max: 97069,
        min: 48535,
        rate: 0.205,
      },
      {
        max: 150473,
        min: 97069,
        rate: 0.26,
      },
      {
        max: 214368,
        min: 150473,
        rate: 0.29,
      },
      {
        min: 214368,
        rate: 0.33,
      },
    ],
  };
  it("should return totalTaxes, taxDetails and effectiveRate", () => {
    calculateTaxes;
    const result = calculateTaxes(mockProps.income, mockProps.taxBrackets);
    expect(result.totalTaxes).toBe(3000);
    expect(result.taxDetails).toStrictEqual([
      { band: "$0 - $48535", tax: 3000 },
    ]);
    expect(result.effectiveRate).toBe(0.15);
  });
});
