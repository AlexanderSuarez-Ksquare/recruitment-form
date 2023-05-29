import { TextField, Box, Stack } from "@mui/material";
import React from "react";

export const GobernamentalInfo = ({ formik }: { formik: any }) => {
  return (
    <Box>
      <Stack spacing={4} sx={{ width: "100%" }}>
        {formik.values.country.toLowerCase() === "mexico" && (
          <TextField
            id="CURP"
            label="CURP"
            variant="outlined"
            name="CURP"
            value={formik.values.CURP}
            onChange={formik.handleChange}
          />
        )}
        {formik.values.country.toLowerCase() !== "mexico" && (
          <TextField
            id="passportOrIDNumber"
            label="Passport or ID number"
            variant="outlined"
            name="passportOrIDNumber"
            value={formik.values.passportOrIDNumber}
            onChange={formik.handleChange}
          />
        )}
        <input
          type="file"
          name="IDProof"
          id="IDProof"
          accept="application/pdf,image/jpeg,image/jpg,image/png"
        />
      </Stack>
    </Box>
  );
};
