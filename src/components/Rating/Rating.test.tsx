import { render } from "@testing-library/react";
import Rating from "./Rating";

describe("<Rating/>", () => {
  it("renders five stars", async () => {
    const { getAllByRole } = render(<Rating rating={5} />);

    const stars = getAllByRole("img", { hidden: true });

    expect(stars.length).toBe(5);
  });

  it("renders yellow stars to reflect the rating prop", async () => {
    const yellow = "#fdfd96";

    const { getAllByRole } = render(<Rating rating={3} />);

    const stars = getAllByRole("img", { hidden: true });

    expect(stars[0]).toHaveAttribute("color", yellow);
    expect(stars[1]).toHaveAttribute("color", yellow);
    expect(stars[2]).toHaveAttribute("color", yellow);
    expect(stars[3]).not.toHaveAttribute("color", yellow);
    expect(stars[4]).not.toHaveAttribute("color", yellow);
  });
});
