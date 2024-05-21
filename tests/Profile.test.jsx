import { render, screen } from "@testing-library/react";
import Profile from "../src/components/Profile";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
    render(<Profile name="Quackie Makers" job="Makers' favourite rubber duck" birthdate='2013'/>);

  // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
    expect(screen.getByTestId("job")).toHaveTextContent("Makers' favourite rubber duck");
    expect(screen.getByTestId("birthdate")).toHaveTextContent("2013");
});
