"use client";
import { useForm } from "react-hook-form";
import { Button, FormLabel } from "@mui/material";
import { SelectElement, TextFieldElement } from "react-hook-form-mui";
// This is a fixed list, we can remove it if backend can handle more years or business logic changes
export type TaxYearValue = "2019" | "2020" | "2021" | "2022";
export type TaxCalculatorFormProps = { taxYearValues: TaxYearValue[] };

const TaxCalculatorForm = ({ taxYearValues }: TaxCalculatorFormProps) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <FormLabel component="legend">Enter your gross income</FormLabel>
        <TextFieldElement
          name="grossIncome"
          control={control}
          fullWidth
          type="number"
          required
        ></TextFieldElement>

        <Button type="submit">Calculate</Button>
      </form>
    </>
  );
};

export default TaxCalculatorForm;
