import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header tests", () => {
  let header;
  beforeEach(() => {
    render(<Header />);
    header = screen.getByText(/Emoji Search/i);
  });
  test("Header should be rendered", () => {
    expect(header).toBeInTheDocument();
  });
});
