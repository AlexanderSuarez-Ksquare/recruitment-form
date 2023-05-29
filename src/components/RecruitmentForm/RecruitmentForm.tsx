import React, { useState } from "react";
import { useFormik } from "formik";
import { PersonalInformation } from "./PersonalInformation";
import { AddressInformation } from "./AddressInformation";
import { AddressExtraInformation } from "./AddressExtraInfo";
import { GobernamentalInfo } from "./GobernamentalInfo";
import { ExtraPersonalInfo } from "./ExtraPersonalInfo";
import { BankAccountInfo } from "./BankAccountInfo";
import { Skills } from "./Skills";
import { MuiStepper } from "./Stepper";
import * as yup from "yup";
import { Box, Button } from "@mui/material";
import { DisclaimerInfo } from "./DisclamerInfo";
import FormModal from "./FormModal";

const valSchema = yup.object({
  name: yup.string().required("Name is required"),
  paternalLastName: yup.string().required("Parental last name is required"),
  gender: yup.string().required("Gender is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  street: yup.string().required("Street is required"),
  streetA: yup.string().required("In between Street A is required"),
  colony: yup.string().required("Colony is required"),
  phone: yup.string().matches(/^\+\d{2}\s\d{10}$/, "Phone number not valid"),
  email: yup.string().email("Invalid Email"),
  altEmail: yup.string().email("Invalid Email"),
});

export const RecruitmentForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<Record<string, any>>(
    {}
  );

  const handleNext = () => {
    if (activeStep < 7) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = (values: any) => {
    setSubmittedValues(values);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      paternalLastName: "",
      maternalLastName: "",
      gender: "",
      otherGender: "",
      dateOfBirth: null,
      country: "",
      state: "",
      city: "",
      street: "",
      streetA: "",
      streetB: "",
      colony: "",
      addressCity: "",
      addressState: "",
      postalCode: "",
      residencyType: "",
      otherTypeOfResidency: "",
      peopleAmount: "",
      CURP: "",
      passportOrIDNumber: "",
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
      finishedClassesProof: null,
      hasDegree: "",
      degreeProof: null,
      hasLicense: "",
      licenseProof: null,
      hasScholarship: "",
      scholarshipLevel: "",
      kindOfScholarship: "",
      scholarshipDuration: "",
      accountNumber: "",
      clabe: "",
      bank: "",
      programmingLanguage: "",
      experience: "",
      disability: "",
    },
    validationSchema: valSchema,
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <MuiStepper
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
        <Box sx={{ width: "100%", maxWidth: 600, marginTop: "16px" }}>
          {activeStep === 0 && <PersonalInformation formik={formik} />}
          {activeStep === 1 && <AddressInformation formik={formik} />}
          {activeStep === 2 && <AddressExtraInformation formik={formik} />}
          {activeStep === 3 && <GobernamentalInfo formik={formik} />}
          {activeStep === 4 && <ExtraPersonalInfo formik={formik} />}
          {activeStep === 5 && <BankAccountInfo formik={formik} />}
          {activeStep === 6 && <Skills formik={formik} />}
          {activeStep === 7 && <DisclaimerInfo />}
        </Box>
        <Box sx={{ marginTop: "16px" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePrevious}
            sx={{ marginRight: "16px" }}
            disabled={activeStep === 0}
          >
            Previous Step
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === 7}
          >
            Next Step
          </Button>
        </Box>
        <FormModal
          isOpen={isModalOpen}
          onClose={closeModal}
          submittedValues={submittedValues}
        />
      </Box>
    </form>
  );
};
