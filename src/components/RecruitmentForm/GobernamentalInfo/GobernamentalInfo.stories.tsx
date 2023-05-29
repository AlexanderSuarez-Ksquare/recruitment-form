import React from "react";
import { Meta, Story } from "@storybook/react";
import { GobernamentalInfo } from ".";

export default {
  title: "Components/GobernamentalInfo",
  component: GobernamentalInfo,
} as Meta;

const Template: Story = (args) => (
  <GobernamentalInfo formik={undefined} {...args} />
);

export const Mexico = Template.bind({});
Mexico.args = {
  formik: {
    values: {
      country: "Mexico",
      CURP: "",
    },
    handleChange: () => {},
  },
};

export const NotMexico = Template.bind({});
NotMexico.args = {
  formik: {
    values: {
      country: "",
      passportOrIDNumber: "",
    },
    handleChange: () => {},
  },
};
