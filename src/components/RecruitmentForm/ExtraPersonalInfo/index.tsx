import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import React from "react";
export const ExtraPersonalInfo = ({ formik }: { formik: any }) => {
  return (
    <Box>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="altEmail"
          label="Alt Email"
          variant="outlined"
          name="altEmail"
          value={formik.values.altEmail}
          onChange={formik.handleChange}
          error={formik.touched.altEmail && Boolean(formik.errors.altEmail)}
          helperText={formik.touched.altEmail && formik.errors.altEmail}
          onBlur={formik.handleBlur}
        />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="findOutAboutUs-label">
            How did you find out about us
          </InputLabel>
          <Select
            labelId="findOutAboutUs-label"
            id="findOutAboutUs"
            label="How did you find out about us"
            name="findOutAboutUs"
            value={formik.values.findOutAboutUs}
            onChange={formik.handleChange}
          >
            <MenuItem value={"Recomendation"}>Recomendation</MenuItem>
            <MenuItem value={"Facebook"}>Facebook</MenuItem>
            <MenuItem value={"Linkedin"}>Linkedin</MenuItem>
            <MenuItem value={"Instagram"}>Instagram</MenuItem>
            <MenuItem value={"My university"}>My university</MenuItem>
            <MenuItem value={"Google"}>Google</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        {formik.values.findOutAboutUs === "Other" && (
          <TextField
            id="otherFindOut"
            label="Other find out"
            variant="outlined"
            name="otherFindOut"
            value={formik.values.otherFindOut}
            onChange={formik.handleChange}
          />
        )}
        <TextField
          id="softwareDevelopmentLikes"
          label="What do you like the most about Software Development?"
          multiline
          rows={4}
          variant="outlined"
          name="softwareDevelopmentLikes"
          value={formik.values.softwareDevelopmentLikes}
          onChange={formik.handleChange}
        />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="highestDegree-label">
            What is your highest degree of studies?
          </InputLabel>
          <Select
            labelId="highestDegree-label"
            id="highestDegree"
            label="What is your highest degree of studies?"
            name="highestDegree"
            value={formik.values.highestDegree}
            onChange={formik.handleChange}
          >
            <MenuItem value={"Highschool or equivalent"}>
              Highschool or equivalent
            </MenuItem>
            <MenuItem value={"Incomplete degree or in progress"}>
              Incomplete degree or in progress
            </MenuItem>
            <MenuItem value={"University degree"}>University degree</MenuItem>
            <MenuItem value={"Incomplete masters or in progress"}>
              Incomplete masters or in progress
            </MenuItem>
            <MenuItem value={"Masters degree"}>Masters degree</MenuItem>
            <MenuItem value={"Incomplete PHD or in progress"}>
              Incomplete PHD or in progress
            </MenuItem>
            <MenuItem value={"PHD"}>PHD</MenuItem>
            <MenuItem value={"No formal education"}>
              No formal education
            </MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        {formik.values.highestDegree === "No formal education" && (
          <TextField
            id="noFormalEducation"
            label="No formal education"
            variant="outlined"
            name="noFormalEducation"
            value={formik.values.noFormalEducation}
            onChange={formik.handleChange}
          />
        )}
        {formik.values.highestDegree === "Other" && (
          <TextField
            id="otherEducation"
            label="Other education"
            variant="outlined"
            name="otherEducation"
            value={formik.values.otherEducation}
            onChange={formik.handleChange}
          />
        )}
        {formik.values.highestDegree !== "" &&
          formik.values.highestDegree !== "Other" &&
          formik.values.highestDegree !== "No formal education" &&
          formik.values.highestDegree !== "Highschool or equivalent" && (
            <Stack spacing={4} sx={{ width: "100%" }}>
              <h6>Academic information</h6>
              <TextField
                id="universityName"
                label="University name"
                variant="outlined"
                name="universityName"
                value={formik.values.universityName}
                onChange={formik.handleChange}
              />
              <TextField
                id="degreeCity"
                label="City"
                variant="outlined"
                name="degreeCity"
                value={formik.values.degreeCity}
                onChange={formik.handleChange}
              />
              <TextField
                id="degreeState"
                label="State"
                variant="outlined"
                name="degreeState"
                value={formik.values.degreeState}
                onChange={formik.handleChange}
              />
              <TextField
                id="degreeCountry"
                label="Country"
                variant="outlined"
                name="degreeCountry"
                value={formik.values.degreeCountry}
                onChange={formik.handleChange}
              />
              <TextField
                id="degreeName"
                label="Name of the degree"
                variant="outlined"
                name="degreeName"
                value={formik.values.degreeName}
                onChange={formik.handleChange}
              />
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="finishedAllClasses-label">
                  Did you finish all your classes?
                </InputLabel>
                <Select
                  labelId="finishedAllClasses-label"
                  id="finishedAllClasses"
                  label="Did you finish all your classes?"
                  name="finishedAllClasses"
                  value={formik.values.finishedAllClasses}
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
              {formik.values.finishedAllClasses === "Yes" && (
                <input
                  type="file"
                  name="finishedClassesProof"
                  id="finishedClassesProof"
                  accept="image/jpeg,image/jpg,image/png"
                />
              )}
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="hasDegree-label">
                  Do you have your degree?
                </InputLabel>
                <Select
                  labelId="hasDegree-label"
                  id="hasDegree"
                  label="Do you have your degree?"
                  name="hasDegree"
                  value={formik.values.hasDegree}
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
              {formik.values.hasDegree === "Yes" && (
                <input
                  type="file"
                  name="degreeProof"
                  id="degreeProof"
                  accept="image/jpeg,image/jpg,image/png"
                />
              )}
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="hasLicense-label">
                  Do you have your license?
                </InputLabel>
                <Select
                  labelId="hasLicense-label"
                  id="hasLicense"
                  label="Do you have your license?"
                  name="hasLicense"
                  value={formik.values.hasLicense}
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
              {formik.values.hasLicense === "Yes" && (
                <input
                  type="file"
                  name="licenseProof"
                  id="licenseProof"
                  accept="image/jpeg,image/jpg,image/png"
                />
              )}
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="hasScholarship-label">
                  Did you have a scholarship?
                </InputLabel>
                <Select
                  labelId="hasScholarship-label"
                  id="hasScholarship"
                  label="Did you have a scholarship?"
                  name="hasScholarship"
                  value={formik.values.hasScholarship}
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
              {formik.values.hasScholarship === "Yes" && (
                <Stack spacing={4} sx={{ width: "100%" }}>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="scholarshipLevel-label">
                      Scholarship level
                    </InputLabel>
                    <Select
                      labelId="scholarshipLevel-label"
                      id="scholarshipLevel"
                      label="Scholarship level"
                      name="scholarshipLevel"
                      value={formik.values.scholarshipLevel}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value={"Highschool"}>Highschool</MenuItem>
                      <MenuItem value={"University"}>University</MenuItem>
                      <MenuItem value={"Masters"}>Masters</MenuItem>
                      <MenuItem value={"PHD"}>PHD</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="kindOfScholarship-label">
                      Kind of scholarship
                    </InputLabel>
                    <Select
                      labelId="kindOfScholarship-label"
                      id="kindOfScholarship"
                      label="Kind of scholarship"
                      name="kindOfScholarship"
                      value={formik.values.kindOfScholarship}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value={"Academics"}>Academics</MenuItem>
                      <MenuItem value={"Sports"}>Sports</MenuItem>
                      <MenuItem value={"Government-backed"}>
                        Government-backed
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="scholarshipDuration"
                    label="Duration"
                    type="number"
                    variant="outlined"
                    name="scholarshipDuration"
                    value={formik.values.scholarshipDuration}
                    onChange={formik.handleChange}
                  />
                </Stack>
              )}
            </Stack>
          )}
      </Stack>
    </Box>
  );
};
