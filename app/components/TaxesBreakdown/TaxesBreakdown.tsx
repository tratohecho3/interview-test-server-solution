import { Taxes } from "@/app/types/taxes";
import { useFormStatus } from "react-dom";
import { Skeleton, Grid, Paper, Typography, Alert } from "@mui/material";
import { FormState } from "@/app/types/response";

export type TaxesBreakdownProps = { taxes: Taxes; formState: FormState };
export const TaxesBreakdown = ({ taxes, formState }: TaxesBreakdownProps) => {
  const { pending } = useFormStatus();

  if (formState.status === "failed" && !pending) {
    return (
      <Alert severity="error" sx={{ marginTop: "20px" }}>
        An error has ocurred. Please Try Again
      </Alert>
    );
  }

  if (pending) {
    return (
      <Skeleton
        variant="rectangular"
        height={500}
        sx={{ marginTop: "20px" }}
      ></Skeleton>
    );
  }
  if (!taxes) {
    return null;
  }
  return (
    <Grid container marginTop={"20px"}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "30px" }}>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="h6" sx={{ display: "inline" }}>
              Band
            </Typography>
            <Typography variant="h6" sx={{ display: "inline" }}>
              Owed per Band
            </Typography>
          </Grid>
          {taxes.taxDetails.map(({ band, tax }) => {
            return (
              <Grid
                container
                key={band}
                justifyContent={"space-between"}
                marginTop={"20px"}
              >
                <Typography
                  variant="h6"
                  sx={{ display: "inline", color: "grey.600" }}
                >
                  {band}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: "inline", color: "grey.600" }}
                >
                  {tax}
                </Typography>
              </Grid>
            );
          })}
          <Grid container justifyContent={"space-between"} marginTop={"20px"}>
            <Typography variant="h6" sx={{ display: "inline" }}>
              Total tax
            </Typography>
            <Typography variant="h6" sx={{ display: "inline" }}>
              {taxes.totalTaxes}
            </Typography>
          </Grid>
          <Grid container justifyContent={"space-between"} marginTop={"10px"}>
            <Typography variant="h6" sx={{ display: "inline" }}>
              Effective rate
            </Typography>
            <Typography variant="h6" sx={{ display: "inline" }}>
              {`${taxes.effectiveRate * 100}%`}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
