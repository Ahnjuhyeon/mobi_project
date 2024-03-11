import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumButton = {
  args: {
    size: "mediumCircle",
    font: "medium",
    label: "click",
  },
};

export const PrimaryMedium = {
  args: {
    ...MediumButton,
    isPrimary: true,
  },
};

export const SecondaryMedium = {
  args: {
    ...MediumButton,
    isPrimary: false,
  },
};
export const PrimarySmall = {
  args: {
    isPrimary: true,
    size: "smallCircle",
    font: "small",
  },
};

export const SecondarySmall = {
  args: {
    isPrimary: false,
    size: "smallCircle",
    font: "small",
  },
};
