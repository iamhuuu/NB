import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShowList from "./ShowList";

const testShows = [
  {
    show: {
      id: "1",
      name: "show1",
      image: {
        medium: "www.image1.com",
      },
      rating: {
        average: 1,
      },
    },
  },
  {
    show: {
      id: "2",
      name: "show2",
      image: {
        medium: "www.image2.com",
      },
      rating: {
        average: 2,
      },
    },
  },
  {
    show: {
      id: "3",
      name: "show3",
      image: {
        medium: "www.image3.com",
      },
      rating: {
        average: 3,
      },
    },
  },
];

describe("<ShowList/>", () => {
  it("renders an overview for each show", () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <ShowList shows={testShows} />
      </MemoryRouter>
    );

    expect(getAllByTestId("showOverview").length).toBe(3);
  });

  it("renders the name for each show", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ShowList shows={testShows} />
      </MemoryRouter>
    );
    getByText("show1");
    getByText("show2");
    getByText("show3");
  });

  it("renders an image for each show", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <ShowList shows={testShows} />
      </MemoryRouter>
    );

    const images = getAllByRole("img");

    expect(images[0]).toHaveAttribute("src", "www.image1.com");
    expect(images[1]).toHaveAttribute("src", "www.image2.com");
    expect(images[2]).toHaveAttribute("src", "www.image3.com");
  });
});
