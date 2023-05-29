import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

interface MuiStepperProps {
  activeStep: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

export const MuiStepper = ({ activeStep }: MuiStepperProps) => {
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Personal Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address Extra Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Gobernamental Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal Information Extra</StepLabel>
        </Step>
        <Step>
          <StepLabel>Bank Account Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Skills</StepLabel>
        </Step>
        <Step>
          <StepLabel>Disclaimer Information</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
};
