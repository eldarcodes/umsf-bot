import "antd/dist/antd.css";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MyButton } from ".";

export default {
  title: "General/Button",
  component: MyButton,
  argTypes: {
    type: {
      options: ["default", "primary", "text", "ghost", "dashed", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "middle", "large"],
      control: { type: "radio" },
    },
    shape: {
      options: ["round", "circle", "default"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} />
);

export const Default: typeof Template = Template.bind({});
Default.args = {
  type: "default",
  label: "Button",
  loading: false,
  size: "middle",
  danger: false,
  block: false,
  disabled: false,
};
