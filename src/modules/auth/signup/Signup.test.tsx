import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Signup } from "./Signup";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { expect } from "vitest";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const user: { email: string; password: string; wishlists: string[] } = {
  email: "",
  password: "",
  wishlists: [],
};

beforeEach(() => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <ThemeProvider theme={theme}>
        <Signup user={user} />
      </ThemeProvider>
    </Router>
  );
});

test("Render component", () => {
  const passwordInput = screen.getByTestId("passwordInput") as HTMLInputElement;
  expect(passwordInput.value).toBe("");
});
test("No password", async () => {
  const agreeButton = screen.getByTestId("agreeButton");
  await userEvent.click(agreeButton);
  const error = await screen.findByTestId("error");
  expect(error.textContent).toBe(" Password is required");
});

test("Bad Password", async () => {
  const passwordInput = screen.getByTestId("passwordInput") as HTMLInputElement;
  const agreeButton = screen.getByTestId("agreeButton");
  await userEvent.type(passwordInput, "asds");
  await userEvent.click(agreeButton);
  const error = await screen.findByTestId("error");
  expect(error.textContent).toBe(
    " Password needs to have at least 8 characters, a number and a letter"
  );
});
