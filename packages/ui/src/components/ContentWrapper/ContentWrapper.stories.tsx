import "antd/dist/antd.css";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContentWrapper } from ".";

export default {
  title: "General/Button",
  component: ContentWrapper,
} as ComponentMeta<typeof ContentWrapper>;

const Template: ComponentStory<typeof ContentWrapper> = args => (
  <ContentWrapper {...args} />
);

export const Default: typeof Template = Template.bind({});
Default.args = {
  children: <div>Default content</div>,
};
