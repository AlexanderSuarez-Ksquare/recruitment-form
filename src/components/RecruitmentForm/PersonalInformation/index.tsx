import React from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const PersonalInformation = ({ formik }: { formik: any }) => {
  return (
    <Box>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="paternalLastName"
          label="Paternal last name"
          variant="outlined"
          name="paternalLastName"
          value={formik.values.paternalLastName}
          onChange={formik.handleChange}
          error={
            formik.touched.paternalLastName &&
            Boolean(formik.errors.paternalLastName)
          }
          helperText={
            formik.touched.paternalLastName && formik.errors.paternalLastName
          }
          onBlur={formik.handleBlur}
        />
        <TextField
          id="maternalLastName"
          label="Maternal last name"
          variant="outlined"
          name="maternalLastName"
          value={formik.values.maternalLastName}
          onChange={formik.handleChange}
        />
        <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            label="Gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            onBlur={formik.handleBlur}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
            <MenuItem value={"Not Say"}>I'd rather not say</MenuItem>
          </Select>
        </FormControl>
        {formik.values.gender === "Other" && (
          <TextField
            id="otherGender"
            label="Other gender"
            variant="outlined"
            name="otherGender"
            value={formik.values.otherGender}
            onChange={formik.handleChange}
          />
        )}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={formik.values.dateOfBirth}
            onChange={(value) => formik.setFieldValue("dateOfBirth", value)}
          />
        </LocalizationProvider>
        <h6>Place of birth</h6>
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="state"
          label="State"
          variant="outlined"
          name="state"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="city"
          label="City"
          variant="outlined"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          onBlur={formik.handleBlur}
        />
      </Stack>
    </Box>
  );
};
