import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders sidebar", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sidebar/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders mainview", () => {
  render(<App />);
  const linkElement = screen.getByText(/MainView/i);
  expect(linkElement).toBeInTheDocument();
});
