import React from "react";
import { TextField, Stack } from "@mui/material";

export const BankAccountInfo = ({ formik }: { formik: any }) => {
  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <TextField
        id="accountNumber"
        label="Account Number"
        variant="outlined"
        name="accountNumber"
        value={formik.values.accountNumber}
        onChange={formik.handleChange}
      />
      <TextField
        id="clabe"
        label="CLABE"
        variant="outlined"
        name="clabe"
        value={formik.values.clabe}
        onChange={formik.handleChange}
      />
      <TextField
        id="bank"
        label="Bank"
        variant="outlined"
        name="bank"
        value={formik.values.bank}
        onChange={formik.handleChange}
      />
    </Stack>
  );
};
