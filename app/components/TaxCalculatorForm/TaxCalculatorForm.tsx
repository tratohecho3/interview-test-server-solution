"use client";
import { useForm } from "react-hook-form";
import { Button, FormLabel, Grid } from "@mui/material";
import { SelectElement, TextFieldElement } from "react-hook-form-mui";
import { TaxYearValue } from "@/app/types/taxes";
import { getIncomeTax } from "@/app/actions/getIncomeTax";
import { useFormState } from "react-dom";
import { FormState } from "@/app/types/response";
import { TaxesBreakdown } from "../TaxesBreakdown/TaxesBreakdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaxCalculatorFormSchema } from "@/app/lib/zod/TaxCalculatorFormSchema";

// This is a fixed list, we can remove it if backend can handle more years or business logic changes
export type TaxCalculatorFormProps = { taxYearValues: TaxYearValue[] };
export interface FormValues {
  grossIncome: string;
  taxYear: string;
}

const TaxCalculatorForm = ({ taxYearValues }: TaxCalculatorFormProps) => {
  const {
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: "all",
    resolver: zodResolver(TaxCalculatorFormSchema),
  });
  const initialState = {
    status: null,
    data: null,
  };
  const [formState, formAction] = useFormState<FormState, FormData>(
    getIncomeTax,
    initialState
  );
  return (
    <>
      <form action={formAction}>
        <Grid container gap={1}>
          <Grid item md={3} xs={12}>
            <FormLabel component="legend">Enter your gross income</FormLabel>
            <TextFieldElement
              name="grossIncome"
              control={control}
              fullWidth
              type="number"
              required
            ></TextFieldElement>
          </Grid>
          <Grid item md={3} xs={12} aria-label="dropdown-tax-year">
            <FormLabel component="legend">Enter the tax year</FormLabel>
            <SelectElement
              name="taxYear"
              options={taxYearValues.map((taxYearValue) => ({
                label: taxYearValue,
                value: taxYearValue,
              }))}
              fullWidth
              control={control}
              valueKey="value"
              labelKey="label"
              required
            ></SelectElement>
          </Grid>

          <Grid item xs={12} marginTop={"10px"}>
            <Button
              type="submit"
              variant="contained"
              aria-label="submit-button"
              disabled={!isValid}
            >
              Calculate
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TaxesBreakdown taxes={formState.data} formState={formState} />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default TaxCalculatorForm;
