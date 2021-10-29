import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("App component", () => {
  test("should render Card for homepage", () => {
    render(<Card monster={{id: 1, name: "Ronaldo", email: "Ronaldo.Ronaldo@Ronaldo.com"}} />);

    expect(screen.getByTestId("card-container")).toBeInTheDocument();
  });
});
