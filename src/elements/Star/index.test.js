import React from "react";
import { render } from "@testing-library/react";
import Star from ".";

test("Sould have props", () => {
  const height = 4,
    width = 40,
    spacing = 4;
  const { container } = render(
    <Star width={width} height={height} spacing={spacing} value={3.6}></Star>
  );
  const starYellow = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars"));
  expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`heiht: ${width}px`));
  expect(container.querySelector(starYellow));
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`width: ${width}px`));
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`heiht: ${width}px`));
  expect(container.querySelector(starYellow)).toHaveAttribute(
      "style",
      expect.stringContaining(`margin-right: ${width}px`)
    );
});
