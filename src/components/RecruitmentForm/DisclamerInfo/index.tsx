import React, { useState } from "react";
import { Button, Box, FormControlLabel, Checkbox } from "@mui/material";

export const DisclaimerInfo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box>
      <p>
        By pressing submit you're affirming that the previous information is
        yours and therefore allowed to share with us
      </p>
      <FormControlLabel
        control={
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        }
        label="I affirm that the information is mine"
      />
      <Button type="submit" disabled={!isChecked}>
        SUBMIT
      </Button>
    </Box>
  );
};
