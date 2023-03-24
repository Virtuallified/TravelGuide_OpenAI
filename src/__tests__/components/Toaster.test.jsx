import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import Toaster from "../../components/reusable/Toaster";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Toaster", () => {
  it("should render the component with default props", () => {
    useSelector.mockImplementation(() => ({
      show: false,
      delay: 0,
      autohide: false,
      title: "",
      message: "",
    }));

    const { getByRole } = render(<Toaster />);
    const toastContainer = getByRole("alert");

    expect(toastContainer).toBeInTheDocument();
  });

  it("should render the component with show equals true", () => {
    useSelector.mockImplementation(() => ({
      show: true,
      delay: 0,
      autohide: false,
      title: "Info",
      message: "This is a message",
    }));

    const { getByText } = render(<Toaster />);
    const toastTitle = getByText(/info/i);
    const toastMessage = getByText(/this is a message/i);

    expect(toastTitle).toBeInTheDocument();
    expect(toastMessage).toBeInTheDocument();
  });

  it("should dismiss the toast when onClose is called", () => {
    const onClose = jest.fn();
    useSelector.mockImplementation(() => ({
      show: true,
      delay: 0,
      autohide: false,
      title: "Info",
      message: "This is a message",
    }));

    const { getByRole } = render(<Toaster onClose={onClose} />);
    const toastCloseButton = getByRole("button");

    toastCloseButton.click();

    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
