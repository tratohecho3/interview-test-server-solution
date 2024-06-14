import { Taxes } from "@/app/types/taxes";
import { useFormState, useFormStatus } from "react-dom";
import { Skeleton, Grid, Paper, Typography } from "@mui/material";

export type TaxesBreakdownProps = { taxes: Taxes };
export const TaxesBreakdown = ({ taxes }: TaxesBreakdownProps) => {
  const { pending } = useFormStatus();

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
    <Grid container>
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
        </Paper>
      </Grid>
    </Grid>
  );
};
