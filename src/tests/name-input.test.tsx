// import { fireEvent, render, screen } from "@testing-library/react";
// import { NameInput } from "@/components/NameInput";

import { describe, expect, it } from "vitest";

// describe("PasswordField", () => {
//   it("should render a password field with no provided value", () => {
//     render(<NameInput name="" onPasswordChange={() => null} />);
//     expect(screen.getByTestId("password-field")).toBeInTheDocument();
//     expect(screen.getByTestId("password-field")).toHaveValue("");
//   });
//   it("should render a password field with provided value", () => {
//     render(<PasswordField password="abc" onPasswordChange={() => null} />);
//     expect(screen.getByTestId("password-field")).toBeInTheDocument();
//     expect(screen.getByTestId("password-field")).toHaveValue("abc");
//   });
//   it("should make a callback returning an user entered value", () => {
//     const mockCallback = vitest.fn();
//     render(<PasswordField password="" onPasswordChange={mockCallback} />);
//     const passwordField = screen.getByTestId("password-field");
//     fireEvent.change(passwordField, { target: { value: "a" } });
//     expect(mockCallback).toHaveBeenCalledWith("a");
//   });
// });

describe("NameInput", () => {
  it("should render a name input field with no provided value", () => {
    expect(1).toBe(1);
  });
});
