import React from "react";
import { Meta, Story } from "@storybook/react";
import { AddressExtraInformation } from ".";

export default {
  title: "Components/AddressExtraInformation",
  component: AddressExtraInformation,
} as Meta;

const Template: Story<any> = (args) => {
  const formikMock = {
    values: args,
    handleChange: () => {},
    handleBlur: () => {},
    touched: {},
    errors: {},
  };

  return <AddressExtraInformation formik={formikMock} />;
};

export const Default = Template.bind({});
Default.args = {
  residencyType: "",
  otherTypeOfResidency: "",
  peopleAmount: "",
};
