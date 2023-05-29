import React from "react";
import { Meta, Story } from "@storybook/react";
import { PersonalInformation } from ".";

export default {
  title: "Components/PersonalInformation",
  component: PersonalInformation,
} as Meta;

const Template: Story<any> = (args) => {
  const formikMock = {
    values: args,
    handleChange: () => {},
    handleBlur: () => {},
    setFieldValue: () => {},
    touched: {},
    errors: {},
  };

  return <PersonalInformation formik={formikMock} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "",
  paternalLastName: "",
  maternalLastName: "",
  gender: "",
  otherGender: "",
  dateOfBirth: null,
  country: "",
  state: "",
  city: "",
};
