import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
describe("SignUpPage", () => {
  describe("Layout", () => {
  it("has header", () => {  
    render(<SignUpPage />);
    screen.queryByRole("heading", { name: "Sign Up" });
    const header = screen.getByRole("heading", { name: "Sign Up" });
    expect(header).toBeInTheDocument();
  });
  it("has username input", () => {
    render(<SignUpPage />);
    const input = screen.getByRole("textbox", { name: "Username" });
    expect(input).toBeInTheDocument();
  });
 it("has email input", () => {
    render(<SignUpPage />);
    const input = screen.getByLabelText("Email");
    expect(input).toBeInTheDocument();
  });
  it("has password input", () => {
    render(<SignUpPage />);
    const input = screen.getByLabelText("Password");
    expect(input).toBeInTheDocument();
  });
  it("has password repeat input", () => {
    render(<SignUpPage />);
    const input = screen.getByLabelText("Confirm Password");
    expect(input).toBeInTheDocument();
  });
  it("has submit button", () => {
    render(<SignUpPage />);
    const button = screen.getByRole("button", { name: "Sign Up" });
    expect(button).toBeInTheDocument();
  });
  
});
});