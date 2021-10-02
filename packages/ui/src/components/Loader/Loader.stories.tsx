import "antd/dist/antd.css";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from ".";

export default {
  title: "General/Loader",
  component: Loader,
  argTypes: {
    size: {
      options: ["small", "middle", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Default: typeof Template = Template.bind({});
