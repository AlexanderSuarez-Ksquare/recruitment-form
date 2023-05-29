import React from "react";
import { Meta, Story } from "@storybook/react";
import { BankAccountInfo } from ".";

export default {
  title: "Components/BankAccountInfo",
  component: BankAccountInfo,
} as Meta;

const Template: Story<any> = (args) => {
  const formikMock = {
    values: args,
    handleChange: () => {},
    handleBlur: () => {},
    touched: {},
    errors: {},
  };

  return <BankAccountInfo formik={formikMock} />;
};

export const Default = Template.bind({});
Default.args = {
  accountNumber: "",
  clabe: "",
  bank: "",
};
