import { render } from "@testing-library/react";
import Home from "./Home";

describe("<Home/>", () => {
  it("renders the header", async () => {
    const { getByText } = render(<Home />);

    getByText("TV");
    getByText("Bland");
    getByText("TV Show and web series database");
    getByText(
      "Create personalised schedules. Episode guide, cast, crew and, character information"
    );
  });

  it('renders the "Last Added Shows"', async () => {
    const { getByText } = render(<Home />);
    getByText("Last Added Shows");
  });
});
