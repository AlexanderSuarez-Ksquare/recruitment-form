import React from "react";
import { Meta, Story } from "@storybook/react";
import { Skills } from ".";

export default {
  title: "Components/Skills",
  component: Skills,
} as Meta;

const Template: Story<any> = (args) => {
  const formikMock = {
    values: args,
    handleChange: () => {},
    handleBlur: () => {},
    touched: {},
    errors: {},
  };

  return <Skills formik={formikMock} />;
};

export const Default = Template.bind({});
Default.args = {
  programmingLanguage: "",
  experience: "",
  disability: "",
};
