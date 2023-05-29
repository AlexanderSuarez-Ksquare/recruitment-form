import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

export const AddressExtraInformation = ({ formik }: { formik: any }) => {
  return (
    <Box>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="residencyType-label">Type of Residency</InputLabel>
          <Select
            labelId="residencyType-label"
            id="residencyType"
            label="Residency"
            name="residencyType"
            value={formik.values.residencyType}
            onChange={formik.handleChange}
          >
            <MenuItem value={"Rented"}>Rented</MenuItem>
            <MenuItem value={"Owned (by me or my parents)"}>
              Owned (by me or my parents)
            </MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        {formik.values.residencyType === "Other" && (
          <TextField
            id="otherTypeOfResidency"
            label="Other type of residency"
            variant="outlined"
            name="otherTypeOfResidency"
            value={formik.values.otherTypeOfResidency}
            onChange={formik.handleChange}
          />
        )}
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="peopleAmount-label">Amount of people</InputLabel>
          <Select
            labelId="peopleAmount-label"
            id="peopleAmount"
            label="People"
            name="peopleAmount"
            value={formik.values.peopleAmount}
            onChange={formik.handleChange}
          >
            <MenuItem value={"I live alone"}>I live alone</MenuItem>
            <MenuItem value={"I live with my parents"}>
              I live with my parents
            </MenuItem>
            <MenuItem value={"I live with my significant other"}>
              I live with my significant other
            </MenuItem>
            <MenuItem value={"I live with my significant other and my kids"}>
              I live with my significant other and my kids
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};
