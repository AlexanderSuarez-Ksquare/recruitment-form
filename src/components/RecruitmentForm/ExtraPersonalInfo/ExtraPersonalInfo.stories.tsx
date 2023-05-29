import React from "react";
import { Meta, Story } from "@storybook/react";
import { ExtraPersonalInfo } from ".";

export default {
  title: "Components/ExtraPersonalInfo",
  component: ExtraPersonalInfo,
} as Meta;

const Template: Story<any> = (args) => {
  const formikMock = {
    values: args,
    handleChange: () => {},
    handleBlur: () => {},
    touched: {},
    errors: {},
  };

  return <ExtraPersonalInfo formik={formikMock} />;
};

export const Default = Template.bind({});
Default.args = {
  phone: "",
  email: "",
  altEmail: "",
  findOutAboutUs: "",
  otherFindOut: "",
  softwareDevelopmentLikes: "",
  highestDegree: "",
  noFormalEducation: "",
  otherEducation: "",
  universityName: "",
  degreeCity: "",
  degreeState: "",
  degreeCountry: "",
  degreeName: "",
  finishedAllClasses: "",
  hasDegree: "",
  hasLicense: "",
  hasScholarship: "",
  scholarshipLevel: "",
  kindOfScholarship: "",
  scholarshipDuration: "",
};
