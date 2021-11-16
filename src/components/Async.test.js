import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("render post is request succed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "first post",
        },
      ],
    });

    // Arrange
    render(<Async />);

    // Act

    // Assert
    const listItmes = await screen.findAllByRole("listitem");
    expect(listItmes).not.toHaveLength(0);
  });
});
