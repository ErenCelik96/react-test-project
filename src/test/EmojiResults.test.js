import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("EmojiResults tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("EmojiResults list should be rendered", () => {
    expect(screen.getByTestId("emoji-list")).toBeInTheDocument();
  });

  test("EmojiResults list should be listed true", () => {
    expect(screen.getAllByTestId("emoji-item")).toHaveLength(20);
  });

  test("EmojiResult list should be listed with filter", () => {
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "100" } });

    expect(screen.getAllByText(/100/i)).toHaveLength(1);
  });

  test("List items should be copying", () => {
    const emoji = screen.getByText("100");
    userEvent.click(emoji);

    const text = "100";
    userEvent.paste(emoji, text);
    expect(emoji).toHaveTextContent(text);
  });
});
