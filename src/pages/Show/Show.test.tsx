import { render, waitForElementToBeRemoved } from "@testing-library/react";
import axios from "axios";
import Show from "./Show";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: "12345",
  }),
}));

jest.mock("axios");

const testShow = {
  name: "Test Show",
  summary: "A Test Show summary",
  rating: {
    average: 5,
  },
  image: {
    medium: "www.testshow.com",
  },
  network: { name: "Test Productions" },
  schedule: {
    days: ["Monday", "Sunday", "Testday"],
  },
  status: "Testing",
  genres: ["action", "horror"],
};

describe("<Show/>", () => {
  it('should render "Tv Bland" title', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testShow }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const { getByText, getByRole } = render(<Show />);

    await waitForElementToBeRemoved(() => getByRole("img", { hidden: true }));

    getByText("TV Bland");
  });

  it("should render the show image", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testShow }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const { getByRole } = render(<Show />);

    await waitForElementToBeRemoved(() => getByRole("img", { hidden: true }));

    expect(getByRole("img")).toHaveAttribute("src", "www.testshow.com");
  });

  it("should render the show name", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testShow }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const { getByText, getByRole } = render(<Show />);

    await waitForElementToBeRemoved(() => getByRole("img", { hidden: true }));

    getByText("Test Show");
  });

  it("should render the show summary", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testShow }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const { getByText, getByRole } = render(<Show />);

    await waitForElementToBeRemoved(() => getByRole("img", { hidden: true }));

    getByText("A Test Show summary");
  });

  it("should call the api with the correct ID", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testShow }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    render(<Show />);

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.tvmaze.com/shows/12345"
    );
  });

  it("should display the spinner until a response has been received from the endpoint", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject());
    axios.get.mockImplementationOnce(() => Promise.reject());

    const { getByRole } = render(<Show />);

    expect(getByRole("img", { hidden: true })).toHaveAttribute(
      "data-icon",
      "spinner"
    );
  });
});
