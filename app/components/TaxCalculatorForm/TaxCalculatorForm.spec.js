import TaxCalculatorForm from "@/app/components/TaxCalculatorForm/TaxCalculatorForm";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockFormAction = jest.fn();

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormState: () => {
    return [{}, mockFormAction];
  },
  useFormStatus: () => {
    return { pending: false };
  },
}));

describe("TaxCalculatorForm", () => {
  const mockProps = {
    taxYearValues: ["2019", "2020"],
  };

  it("should get and submit user input data", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, findByRole, findAllByRole } = render(
      <TaxCalculatorForm {...mockProps} />
    );
    const grossIncomeInput = getByRole("spinbutton");
    fireEvent.change(grossIncomeInput, { target: { value: "25000" } });
    expect(grossIncomeInput.value).toBe("25000");
    const taxYearInput = getByRole("combobox");
    await user.click(taxYearInput);
    await expect(await findByRole("listbox")).toBeTruthy();
    const options = await findAllByRole("option");
    expect(options).toBeTruthy();
    expect(options.length).toEqual(2);
    await user.click(options[1]);
    const submitButton = getByRole("button", { name: "submit-button" });
    await user.click(submitButton);
    // Not working, there are some warnings on this test because it's still experimental react
    // https://github.com/vercel/next.js/issues/54757
    // TODO: Fix it with newer version of react/next
    // expect(mockFormAction).toHaveBeenCalled();
  });
});
