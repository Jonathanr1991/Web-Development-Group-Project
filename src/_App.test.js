//TODO Not yet integrated
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders registration button and navbar title "tu social" on create-user component (opening page atm)', () => {
  const { getByText } = render(<App />);
  const elementOne = getByText(/create an account/i); // the /i option means this is case-insensitive regex
  const elementTwo = getByText(/tu social/i);
  expect(elementOne).toBeInTheDocument();
  expect(elementTwo).toBeInTheDocument();
});
