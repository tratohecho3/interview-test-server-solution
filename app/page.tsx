import TaxCalculatorForm from "./components/TaxCalculatorForm/TaxCalculatorForm";

export default function Home() {
  return (
    <>
      <TaxCalculatorForm taxYearValues={["2019", "2020"]} />
    </>
  );
}
