import { Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";
import FormFields from "../layout/FormTextFeild";
import { projectformFields } from "../../constants/registrationFormFeild";
import Header from "../layout/header/index";
import dummyData from "../../constants/dummydata";
import { projectInitialValues } from "../../constants/initialvalues";
import { ProjectSchema } from "../../helpers/auth-validator";
import { MenuProps } from "../layout/dropdownLayout/dropdownLayout";
import calculateDuration from "../../helpers/calculateDuration";
import { handleProjectFormSubmit } from "../common/formSubmitHandler/formSubmitHandler";
import generateUniqueId from "../../helpers/generateUniqueID";
import DatePicker from "../layout/datePicker";
import {
  formatStartDateText,
  formatLastDateText,
} from "../../helpers/formatDate";
import SuccessAlert from "../layout/successAlert";
import ResourcePicker from "../layout/resourcePicker";
import dropdownStyles from "../layout/dropdownStyle/style";
import {
  ResgistrationFormStyle,
  ProjectResgistrationFormBoxStyle,
  ResgistrationButtonBoxStyle,
  DarkModeFontColour,
  ResgistrationButtonStyle,
} from "../../styles/muiStyles";

function AddProject() {
  const today = dayjs();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [submit, setSubmit] = useState(false);
  const [designationName, setDesignationName] = useState([]);
  const [selectedLastDate, setSelectedLastDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    projectInitialValues.start_date = selectedLastDate;
  };
  const handleLastDateChange = (date) => {
    setSelectedLastDate(date);
  };

  const handleDropdownChange = (event) => {
    const {
      target: { value },
    } = event;
    setDesignationName(typeof value === "string" ? value.split(",") : value);
    setSelectedEmployeeIds(event.target.value);
  };
  const handleFormSubmit = async (values) => {
    await handleProjectFormSubmit(
      values,
      selectedStartDate,
      selectedLastDate,
      selectedEmployeeIds,
      dispatch,
      setSubmit,
      generateUniqueId,
      calculateDuration,
    );
  };
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header title={t("project.title")} subtitle={t("project.subtitle")} />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={projectInitialValues}
        validationSchema={ProjectSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} style={ResgistrationFormStyle()}>
            <Box sx={ProjectResgistrationFormBoxStyle(isNonMobile)}>
              <FormFields
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
                formFields={projectformFields}
              />
              <DatePicker
                selectedDate={selectedStartDate}
                label={t("project.startDate")}
                onChange={handleStartDateChange}
                inputFormat={formatStartDateText}
                handleBlur={handleBlur}
                minDate={today}
              />
              <DatePicker
                selectedDate={selectedLastDate}
                label={t("project.lastDate")}
                onChange={handleLastDateChange}
                inputFormat={formatLastDateText}
                handleBlur={handleBlur}
                minDate={today}
              />
              <ResourcePicker
                designationName={designationName}
                handleDropdownChange={handleDropdownChange}
                dummyData={dummyData}
                DarkModeFontColour={DarkModeFontColour}
                t={t}
                theme={theme}
                MenuProps={MenuProps}
                dropdownStyles={dropdownStyles}
              />
            </Box>
            <Box sx={ResgistrationButtonBoxStyle}>
              <Button
                type="submit"
                color="success"
                variant="contained"
                sx={ResgistrationButtonStyle}
              >
                {t("project.addProject")}
              </Button>
            </Box>
            <SuccessAlert
              submit={submit}
              alertTitle={t("project.success")}
              alertContent={t("project.alert")}
            />
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default AddProject;
