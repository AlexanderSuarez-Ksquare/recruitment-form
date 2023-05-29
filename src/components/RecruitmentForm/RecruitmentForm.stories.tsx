import React from "react";
import { Meta, Story } from "@storybook/react";
import { RecruitmentForm } from "./RecruitmentForm";

export default {
  title: "Components/RecruitmentForm",
  component: RecruitmentForm,
} as Meta;

const Template: Story<any> = () => <RecruitmentForm />;

export const Default = Template.bind({});
