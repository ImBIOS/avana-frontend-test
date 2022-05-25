import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import store from "./redux/store";

test("renders sidebar", () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/All Product/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders mainview", () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
