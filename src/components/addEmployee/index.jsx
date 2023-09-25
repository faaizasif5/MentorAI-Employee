import { Box, Button, TextField, AlertTitle, useTheme } from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { checkoutSchema } from "../../helpers/auth-validator";
import Header from "../layout/header/index";
import empinitialValues from "../../constants/initialvalues";
import { designations } from "../../constants/dummydata";
import { MenuProps } from "../layout/dropdownLayout/dropdownLayout";
import FormSubmitHandler from "../common/formSubmitHandler/formSubmitHandler";
import generateUniqueId from "../../helpers/generateUniqueID";
import dropdownStyles from "../layout/dropdownStyle/style";
import { useDarkMode } from "../../context/DarkModeContext";
import { FormTextBoxStyle, DarkModeFontColour } from "../layout/muiStyles";

function Form() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  const [submit, setSubmit] = useState(false);
  const [isLineManager, setIsLineManager] = useState(null);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [designationName, setDesignationName] = useState("");

  const handleDropdownChange = (event) => {
    const {
      target: { value },
    } = event;
    setDesignationName(typeof value === "string" ? value.split(",") : value);
  };
  const handleLineManagerChange = (event) => {
    const { value } = event.target;
    if (value === "yes") {
      setIsLineManager(true);
    } else {
      setIsLineManager(false);
    }
  };
  const handleFormSubmit = async (values) => {
    await FormSubmitHandler(
      values,
      isLineManager,
      designationName,
      dispatch,
      setSubmit,
      generateUniqueId,
    );
  };
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header
        title={t("addAccount.title")}
        subtitle={t("addAccount.subtitle")}
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={empinitialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              background: isDarkMode ? "rgb(48 47 53)" : "#fcfcfc",
              padding: "18px",
              paddingTop: "40px",
              borderRadius: "10px",
              marginTop: "13px",
            }}
          >
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                  background: "rgb(169 165 187 / 13%)",
                },
              }}
            >
              <TextField
                fullWidth
                type="text"
                label={t("auth.firstName")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstname}
                name="firstname"
                error={!!touched.firstname && !!errors.firstname}
                helperText={touched.firstname && errors.firstname}
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
              />
              <TextField
                fullWidth
                type="text"
                label={t("auth.lastName")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastname}
                name="lastname"
                error={!!touched.lastname && !!errors.lastname}
                helperText={touched.lastname && errors.lastname}
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
              />
              <TextField
                fullWidth
                type="text"
                label={t("auth.email")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
              />
              <FormControl
                sx={{
                  gridColumn: "span 2",
                }}
              >
                <InputLabel
                  id="demo-multiple-name-label"
                  style={DarkModeFontColour(isDarkMode)}
                >
                  Designation
                </InputLabel>
                <Select
                  labelId="designation-label"
                  id="designation-label-name"
                  multiple={false}
                  value={designationName}
                  onChange={handleDropdownChange}
                  input={<OutlinedInput label={t("auth.designation")} />}
                  MenuProps={MenuProps}
                  sx={DarkModeFontColour(isDarkMode)}
                >
                  {designations.map((designation) => (
                    <MenuItem
                      key={designation}
                      value={designation}
                      style={dropdownStyles(
                        designation,
                        designationName,
                        theme,
                        isDarkMode,
                      )}
                    >
                      {designation}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                type="password"
                label={t("auth.password")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
              />
              <TextField
                fullWidth
                type="address"
                label={t("auth.address")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
              />
              <TextField
                fullWidth
                type="text"
                label={t("auth.contact")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact_no}
                name="contact_no"
                error={!!touched.contact_no && !!errors.contact_no}
                helperText={touched.contact_no && errors.contact_no}
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
              />
              <FormControl sx={{ gridColumn: "span 2" }}>
                <InputLabel
                  id="demo-multiple-name-label"
                  style={DarkModeFontColour(isDarkMode)}
                >
                  {t("linemanager.isLineManager")}
                </InputLabel>
                <Select
                  labelId="line-manager-label"
                  id="line-manager-select"
                  value={isLineManager ? "yes" : "no"}
                  // variant="filled"
                  onChange={handleLineManagerChange}
                  input={
                    <OutlinedInput label={t("linemanager.isLineManager")} />
                  }
                  MenuProps={MenuProps}
                  style={DarkModeFontColour(isDarkMode)}
                >
                  <MenuItem
                    value="yes"
                    style={{
                      backgroundColor: isDarkMode ? "rgb(48 47 53)" : "white",
                      ...DarkModeFontColour(isDarkMode),
                    }}
                  >
                    Yes
                  </MenuItem>
                  <MenuItem
                    value="no"
                    style={{
                      backgroundColor: isDarkMode ? "rgb(48 47 53)" : "white",
                      ...DarkModeFontColour(isDarkMode),
                    }}
                  >
                    No
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label={t("auth.cnic")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cnic}
                name="cnic"
                error={!!touched.cnic && !!errors.cnic}
                helperText={touched.cnic && errors.cnic}
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
              />
              <TextField
                type="file"
                sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
                accept="image/*"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <div>
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="icon-button-file"
                        type="file"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="icon-button-file">
                        <PhotoCameraIcon />
                      </label>
                    </div>
                  ),
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "rgb(18 121 69)",
                  width: "15vw",
                  height: "7vh",
                }}
              >
                {t("addAccount.createEmployee")}
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt="30px">
              {submit && (
                <Alert severity="success">
                  <AlertTitle>{t("addAccount.success")}</AlertTitle>
                  <strong>{t("addAccount.alert")}</strong>
                </Alert>
              )}
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
