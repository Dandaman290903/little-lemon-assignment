import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
  const mockDispatch = jest.fn();

  function renderForm() {
    const props = {
      availableTimes: ["17:00", "18:00", "19:00"],
      dispatch: mockDispatch,
    };
    render(<BookingForm {...props} />);
  }

  test("renders static text correctly", () => {
    renderForm();
    expect(screen.getByText(/book a table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("allows user to fill and submit the form", () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-11-15" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "3" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit reservation/i }));

    expect(screen.getByLabelText(/choose date/i)).toHaveValue("2025-11-15");
  });
});
