import React from "react";
import { Meta, Story } from "@storybook/react";
import { DisclaimerInfo } from ".";

export default {
  title: "Components/DisclaimerInfo",
  component: DisclaimerInfo,
} as Meta;

const Template: Story = () => <DisclaimerInfo />;

export const Default = Template.bind({});
