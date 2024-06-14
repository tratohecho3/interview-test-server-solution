"use client";
import { useForm } from "react-hook-form";
import { Button, FormLabel, Grid } from "@mui/material";
import { SelectElement, TextFieldElement } from "react-hook-form-mui";
import { TaxYearValue } from "../../types/taxYears";
// This is a fixed list, we can remove it if backend can handle more years or business logic changes
export type TaxCalculatorFormProps = { taxYearValues: TaxYearValue[] };

const TaxCalculatorForm = ({ taxYearValues }: TaxCalculatorFormProps) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Grid item md={3} xs={12}>
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
            <Button type="submit" variant="contained">
              Calculate
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default TaxCalculatorForm;
