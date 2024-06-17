import TaxesBreakdown from "@/app/components/TaxesBreakdown/TaxesBreakdown";
import { render } from "@testing-library/react";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: () => {
    return { pending: false };
  },
}));

describe("TaxesBreakdown", () => {
  const mockProps = {
    formState: {
      status: "success",
      data: {
        totalTaxes: 3750,
        taxDetails: [
          {
            band: "$0 - $48535",
            tax: 3750,
          },
        ],
        effectiveRate: 0.15,
      },
    },
  };

  it("should display taxes owed per band", () => {
    const { getByText, getAllByText } = render(
      <TaxesBreakdown {...mockProps} />
    );
    const band = getByText("$0 - $48535");
    const tax = getAllByText("$3,750.00");

    expect(band).toBeInTheDocument();
    expect(tax[0]).toBeInTheDocument();
  });
  it("should display alert if there is an error and is not pending", () => {
    const { getByText } = render(
      <TaxesBreakdown formState={{ status: "failed" }} />
    );
    const errorMessage = getByText("An error has ocurred. Please Try Again");

    expect(errorMessage).toBeInTheDocument();
  });
});
