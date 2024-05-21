import { render, screen } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

test("renders with correct title, type and duration", () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />);

    expect(screen.getByTestId('title')).toHaveTextContent("Finnish cinnamon buns");
    expect(screen.getByTestId('type')).toHaveTextContent("dessert");
    expect(screen.getByTestId('duration')).toHaveTextContent("60");
})
