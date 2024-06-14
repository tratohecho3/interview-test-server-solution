import TaxCalculatorForm from "@/app/components/TaxCalculatorForm/TaxCalculatorForm";
import { Typography, Grid } from "@mui/material";
import { taxYearValues } from "@/app/constants/taxYears";
export default function Home() {
  return (
    <Grid container justifyContent={"center"} marginTop={"50px"}>
      <Grid item xs={10}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{ fontSize: "2rem", fontWeight: "bold", color: "text.primary" }}
          >
            Income Tax Calculator
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: "1.1rem", color: "grey.700" }}
          >
            Find out how much your salary is after tax
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="20px">
          <TaxCalculatorForm taxYearValues={taxYearValues} />
        </Grid>
      </Grid>
    </Grid>
  );
}
