import "antd/dist/antd.css";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BotButton } from ".";

export default {
  title: "General/Button",
  component: BotButton,
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
} as ComponentMeta<typeof BotButton>;

const Template: ComponentStory<typeof BotButton> = args => (
  <BotButton {...args} />
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
