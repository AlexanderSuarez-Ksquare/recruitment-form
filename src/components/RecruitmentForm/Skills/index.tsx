import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

export const Skills = ({ formik }: { formik: any }) => {
  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <TextField
        id="programmingLanguage"
        label="Do you know a programming language?"
        variant="outlined"
        multiline
        rows={4}
        name="programmingLanguage"
        value={formik.values.programmingLanguage}
        onChange={formik.handleChange}
      />

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="experience-label">Amount of experience</InputLabel>
        <Select
          labelId="experience-label"
          id="experience"
          label="Amount of experience"
          name="experience"
          value={formik.values.experience}
          onChange={formik.handleChange}
        >
          <MenuItem value={"Less than 3 months"}>Less than 3 months</MenuItem>
          <MenuItem value={"3 to 6 months"}>3 to 6 months</MenuItem>
          <MenuItem value={"6 to 12 months"}>6 to 12 months</MenuItem>
          <MenuItem value={"More than 12 months"}>More than 12 months</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="disability-label">
          Do you have any disability?
        </InputLabel>
        <Select
          labelId="disability-label"
          id="disability"
          label="Do you have any disability?"
          name="disability"
          value={formik.values.disability}
          onChange={formik.handleChange}
        >
          <MenuItem value={"Motor skills"}>Motor skills</MenuItem>
          <MenuItem value={"Auditory disability"}>Auditory disability</MenuItem>
          <MenuItem value={"Visual impairment"}>Visual impairment</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
