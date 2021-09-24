import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("App component", () => {
  test("should render heading for homepage", () => {
    render(<Main />);

    expect(screen.getByRole("heading", { name: /Monsters Rolodex/i }));
  });
});
