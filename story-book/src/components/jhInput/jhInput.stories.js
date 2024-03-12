import JHInput from "./input";

export default {
  title: "JHInput",
  component: JHInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const PrimarySmallInput = {
  args: {
    placeholder: "search",
    variant: "primary",
    size: "smallCircle",
    font: "medium",
  },
};

export const PrimaryLargeInput = {
  args: {
    placeholder: "search",
    variant: "primary",
    size: "largeCircle",
    font: "large",
  },
};
