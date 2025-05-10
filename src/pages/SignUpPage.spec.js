import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
describe("SignUpPage", () => {
  it("has header", () => {
    render(<SignUpPage />);
    screen.queryByRole("heading", { name: "Sign Up" });
    const header = screen.getByRole("heading", { name: "Sign Up" });
    expect(header).toBeInTheDocument();
  });
});
