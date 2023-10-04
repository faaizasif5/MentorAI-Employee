import { Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";
import PhotoInput from "../layout/PhotoInputFeild";
import FormFields from "../layout/FormTextFeild";
import SuccessAlert from "../layout/successAlert";
import { checkoutSchema } from "../../helpers/auth-validator";
import Header from "../layout/header/index";
import DesignationDropdown from "../layout/designationDropdown/index";
import IsLineManagerSelect from "../layout/linemanagerSelect";
import empinitialValues from "../../constants/initialvalues";
import { designations } from "../../constants/dummydata";
import { MenuProps } from "../layout/dropdownLayout/dropdownLayout";
import FormSubmitHandler from "../common/formSubmitHandler/formSubmitHandler";
import generateUniqueId from "../../helpers/generateUniqueID";
import dropdownStyles from "../layout/dropdownStyle/style";
import employeeformFields from "../../constants/registrationFormFeild";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  DarkModeFontColour,
  ResgistrationFormStyle,
  ResgistrationFormBoxStyle,
  ResgistrationButtonBoxStyle,
  ResgistrationButtonStyle,
} from "../../styles/muiStyles";

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
            style={ResgistrationFormStyle(isDarkMode)}
          >
            <Box sx={ResgistrationFormBoxStyle(isNonMobile)}>
              <FormFields
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
                isDarkMode={isDarkMode}
                formFields={employeeformFields}
              />
              <DesignationDropdown
                designationName={designationName}
                handleDropdownChange={handleDropdownChange}
                designations={designations}
                DarkModeFontColour={DarkModeFontColour}
                t={t}
                theme={theme}
                isDarkMode={isDarkMode}
                MenuProps={MenuProps}
                dropdownStyles={dropdownStyles}
              />
              <IsLineManagerSelect
                isLineManager={isLineManager}
                handleLineManagerChange={handleLineManagerChange}
                DarkModeFontColour={DarkModeFontColour}
                t={t}
                MenuProps={MenuProps}
                isDarkMode={isDarkMode}
              />
              <PhotoInput isDarkMode={isDarkMode} />
            </Box>
            <Box sx={ResgistrationButtonBoxStyle}>
              <Button
                type="submit"
                variant="contained"
                style={ResgistrationButtonStyle}
              >
                {t("addAccount.createEmployee")}
              </Button>
            </Box>
            <SuccessAlert
              submit={submit}
              alertTitle={t("addAccount.success")}
              alertContent={t("addAccount.alert")}
            />
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
