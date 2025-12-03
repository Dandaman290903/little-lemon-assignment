import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  function renderForm() {
    const props = {
      availableTimes: ["17:00", "18:00", "19:00"],
      dispatch: mockDispatch,
      submitForm: mockSubmitForm,
    };
    render(<BookingForm {...props} />);
  }

  beforeEach(() => {
    mockDispatch.mockReset();
    mockSubmitForm.mockReset();
  });

  test("renders static text correctly", () => {
    renderForm();
    expect(screen.getByText(/book a table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("allows user to fill and submit the form and calls submitForm with form data", () => {
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

    fireEvent.click(
      screen.getByRole("button", { name: /submit reservation/i })
    );

    expect(screen.getByLabelText(/choose date/i)).toHaveValue("2025-11-15");

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2025-11-15",
      time: "18:00",
      guests: 3,
      occasion: "Birthday",
    });
  });
});
