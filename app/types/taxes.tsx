export type TaxYearValue = "2019" | "2020" | "2021" | "2022";
export type TaxBracket = {
  min: number;
  max?: number;
  rate: number;
};
