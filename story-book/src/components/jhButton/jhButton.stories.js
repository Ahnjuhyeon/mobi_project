import JHButton from "./jhButton";

export default {
  title: "JHButton",
  component: JHButton,
  parameters: {
    // 화면 어디에 보여줄지
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const PrimarySmallCircle = {
  args: {
    variant: "primary",
    size: "smallCircle",
    font: "small",
    children: "Click",
  },
};

export const PrimaryLargeCircle = {
  args: {
    variant: "primary",
    size: "largeCircle",
    font: "large",
    children: "Click",
  },
};
