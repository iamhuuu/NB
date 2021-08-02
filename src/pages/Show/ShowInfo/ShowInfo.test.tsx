import { render } from "@testing-library/react";
import ShowInfo from "./ShowInfo";

const testShow = {
  network: { name: "Test Productions" },
  schedule: {
    days: ["Monday", "Sunday", "Testday"],
  },
  status: "Testing",
  genres: ["action", "horror"],
};

describe("<ShowInfo />", () => {
  it('should display the "Streamed on" row', () => {
    const { getByText } = render(<ShowInfo show={testShow} />);

    getByText("Streamed on");
    getByText("Test Productions");
  });

  it('should display the "Schedule" row', () => {
    const { getByText } = render(<ShowInfo show={testShow} />);

    getByText("Schedule");
    getByText("Monday, Sunday, Testday");
  });
  it('should display the "Status" row', () => {
    const { getByText } = render(<ShowInfo show={testShow} />);

    getByText("Status");
    getByText("Testing");
  });
  it('should display the "Genres" row', () => {
    const { getByText } = render(<ShowInfo show={testShow} />);

    getByText("Genres");
    getByText("action, horror");
  });
});
