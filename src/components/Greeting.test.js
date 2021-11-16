import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("render Welcome Parth as text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing for now

    // Assert
    const checkingText = screen.getByText("Welcome Parth");
    expect(checkingText).toBeInTheDocument();
  });
});

describe("Greeting Component Change Text Button", () => {
  test("render It's Good to see you! when button not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing for now

    // Assert
    const checkingText = screen.getByText("It's Good to see you!");
    expect(checkingText).toBeInTheDocument();
  });

  test("render Changed as text when button clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const checkingText = screen.getByText("Changed");
    expect(checkingText).toBeInTheDocument();
  });

  test("does not render It's Good to see you! as text when button clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const checkingText = screen.queryByText("It's Good to see you!");
    expect(checkingText).toBeNull();
  });
});
