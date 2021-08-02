import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import Starring from "./Starring";
import axios from "axios";

jest.mock("axios");

const testCast = [
  {
    person: {
      name: "testPersonName",
      image: {
        medium: "http://testURL",
      },
    },
    character: {
      name: "testCharacterName",
    },
  },
  {
    person: {
      name: "testPersonTwoName",
      image: {
        medium: "http://testURL2",
      },
    },
    character: {
      name: "testCharacterTwoName",
    },
  },
];

describe("<ShowInfo />", () => {
  it("should display the actors names", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testCast }));

    const { getByText } = render(<Starring showId={"12345"} />);

    await waitForElementToBeRemoved(() => getByText("Loading"));

    getByText("testPersonName");
    getByText("testPersonTwoName");
  });

  it("should display the characters names", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testCast }));

    const { getByText } = render(<Starring showId={"12345"} />);

    await waitForElementToBeRemoved(() => getByText("Loading"));

    getByText("testCharacterName");
    getByText("testCharacterTwoName");
  });

  it("should display the actors avatars", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testCast }));

    const { getByText } = render(<Starring showId={"12345"} />);

    await waitForElementToBeRemoved(() => getByText("Loading"));

    const avatar = screen.getAllByRole("img");
    expect(avatar[0]).toHaveAttribute("src", "http://testURL");
    expect(avatar[1]).toHaveAttribute("src", "http://testURL2");
  });

  it("should display a row for each object within the array returned and an additional row for the table header", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testCast }));

    const { getByText } = render(<Starring showId={"12345"} />);

    await waitForElementToBeRemoved(() => getByText("Loading"));

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(3);
  });

  it("should display 'No cast information available' if the response is empty", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const { getByText } = render(<Starring showId={"12345"} />);

    await waitForElementToBeRemoved(() => getByText("Loading"));

    getByText("No cast information available");
  });
  it("should display 'Loading' until a response has been received from the endpoint", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const { getByText } = render(<Starring showId={"12345"} />);

    getByText("Loading");
  });
});
