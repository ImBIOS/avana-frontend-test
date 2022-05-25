import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";

test("renders sidebar", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/All Product/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders mainview", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Welcome to the dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
