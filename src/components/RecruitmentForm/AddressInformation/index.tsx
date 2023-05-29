import React from "react";
import { TextField, Box, Stack } from "@mui/material";

export const AddressInformation = ({ formik }: { formik: any }) => {
  return (
    <Box>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <h6>
          Please provide your current address as we're going to deliver
          important documents later in the process
        </h6>
        <TextField
          id="street"
          label="Street"
          variant="outlined"
          name="street"
          value={formik.values.street}
          onChange={formik.handleChange}
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={formik.touched.street && formik.errors.street}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="streetA"
          label="In between street A"
          variant="outlined"
          name="streetA"
          value={formik.values.streetA}
          onChange={formik.handleChange}
          error={formik.touched.streetA && Boolean(formik.errors.streetA)}
          helperText={formik.touched.streetA && formik.errors.streetA}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="streetB"
          label="In between street B"
          variant="outlined"
          name="streetB"
          value={formik.values.streetB}
          onChange={formik.handleChange}
        />
        <TextField
          id="colony"
          label="Colony"
          variant="outlined"
          name="colony"
          value={formik.values.colony}
          onChange={formik.handleChange}
          error={formik.touched.colony && Boolean(formik.errors.colony)}
          helperText={formik.touched.colony && formik.errors.colony}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="addressCity"
          label="City"
          variant="outlined"
          name="addressCity"
          value={formik.values.addressCity}
          onChange={formik.handleChange}
        />
        <TextField
          id="addressState"
          label="State"
          variant="outlined"
          name="addressState"
          value={formik.values.addressState}
          onChange={formik.handleChange}
        />
        <TextField
          id="postalCode"
          label="Postal Code"
          variant="outlined"
          name="postalCode"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
        />
        <input
          type="file"
          name="adressProof"
          id="adressProof"
          accept="application/pdf,image/jpeg,image/jpg,image/png"
        />
      </Stack>
    </Box>
  );
};
