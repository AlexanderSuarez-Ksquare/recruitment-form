import React from "react";
import { Meta, Story } from "@storybook/react";
import { AddressInformation } from ".";

export default {
  title: "Components/AddressInformation",
  component: AddressInformation,
} as Meta;

const Template: Story<any> = (args) => {
  const formikMock = {
    values: args,
    handleChange: () => {},
    handleBlur: () => {},
    touched: {},
    errors: {},
  };

  return <AddressInformation formik={formikMock} />;
};

export const Default = Template.bind({});
Default.args = {
  street: "",
  streetA: "",
  streetB: "",
  colony: "",
  addressCity: "",
  addressState: "",
  postalCode: "",
  addressProof: null,
};
