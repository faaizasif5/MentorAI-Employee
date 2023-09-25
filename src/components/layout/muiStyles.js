export const DashboardTitleBoxStyle = {
  width: "479.65px",
  height: "54.854px",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  marginLeft: "10px",
};
export const DashboardTitleTextStyle = (isDarkMode) => {
  return {
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "31.373px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const LoadStressTitleBox = {
  display: "flex",
  marginLeft: "20px",
  marginBottom: 1,
  marginTop: 1,
};
export const LoadTitle = (isDarkMode) => {
  return {
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    alignItems: "flex-start",
  };
};
export const StressTitle = (isDarkMode) => {
  return {
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginLeft: "75vh",
  };
};
export const EmployeeBoxStyle = (isDarkMode) => {
  return {
    flexShrink: 0,
    borderRadius: "19.004px",
    background: isDarkMode ? "rgb(48 47 53)" : "white",
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
  };
};
export const LoadBox = {
  width: "50px",
  height: "50px",
  flexShrink: 0,
  borderRadius: "5px",
  marginLeft: "30px",
  marginTop: "19px",
};
export const ProgressBox = {
  width: "440px",
  height: "4px",
  flexShrink: 0,
  borderRadius: "7.5px",
  background: "#F9F9F9",
  mt: 5,
  ml: 3,
};
export const ProgressText = {
  mt: 1,
  display: "flex",
  justifyContent: "space-between",
};
export const ProgressBoxDivider = {
  mt: 2,
  ml: 3,
  width: "528px",
  height: "1px",
  flexShrink: 0,
  strokeWidth: "2px",
  stroke: "#F9F9F9",
};
export const PieChartBoxStyle = (isDarkMode) => {
  return {
    flexShrink: 0,
    borderRadius: "19.004px",
    background: isDarkMode ? "rgb(48 47 53)" : "white",
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
  };
};
export const PieChartTypographyStyle = (isDarkMode) => {
  return {
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    alignItems: "flex-start",
    display: "flex",
    ml: 4,
    mt: 2,
  };
};
export const PieChartStyle = (isDarkMode) => {
  return {
    "--ChartsLegend-rootOffsetX": "200px",
    "--ChartsLegend-rootOffsetY": "-75px",
    ".css-1js10na-MuiChartsLegend-label": {
      fill: isDarkMode ? "white" : "black",
    },
  };
};
export const EmojiBoxStyle = {
  marginTop: "14px",
  width: "18px",
  height: "18px",
};
export const LoadTypeTextStyle = (isDarkMode) => {
  return {
    ml: "10px",
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const PercentageTextStyle = (isDarkMode) => {
  return {
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const RedAlertBoxStyle = (isDarkMode) => {
  return {
    width: 208,
    height: 76,
    flexShrink: 0,
    borderRadius: "12px 12px 0 0",
    background: isDarkMode ? "rgb(48 47 53)" : "white",
    boxShadow: "0px 4px 0px 0px #650BFF inset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    top: "34px",
  };
};
export const RedAlertTitleStyle = (isDarkMode) => {
  return {
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const RedAlertContentBoxStyle = (isDarkMode) => {
  return {
    width: "90vh",
    height: "282px",
    flexShrink: 0,
    borderRadius: "19.004px",
    background: isDarkMode ? "#302f35" : "white",
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
  };
};
export const RedAlertEmpName = (isDarkMode) => {
  return {
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    ml: 2,
    marginTop: "10px",
  };
};
export const RedAlertDate = {
  marginTop: "9px",
  color: "var(--unactive, #C7C7C7)",
  fontFamily: "Suprema",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginLeft: "auto",
  marginRight: "40px",
};
export const RedAlertDivider = {
  mt: 1,
  ml: 4,
  width: "38vw",
  height: "0px",
  flexShrink: 0,
  strokeWidth: "0.5px",
  stroke: "#ECECEC",
  background: "#9d988f",
};
export const RedAlertFrequency = {
  marginTop: "9px",
  color: "#ED2639",
  fontFamily: "Gilroy-Bold",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
};
export const AvgEmployeeMoodBoxStyle = (isDarkMode) => {
  return {
    marginTop: "92px",
    width: "90vh",
    height: "282px",
    flexShrink: 0,
    borderRadius: "19.004px",
    background: isDarkMode ? "rgb(48 47 53)" : "white",
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
    display: "flex",
  };
};
export const MoodContentBoxStyle = {
  marginLeft: "70px",
  marginTop: "104px",
};
export const MoodContentTextStyle = (isDarkMode) => {
  return {
    width: "262px",
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Bold",
    fontSize: "25.112px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const MoodContentSubTextStyle = (isDarkMode) => {
  return {
    width: "262px",
    color: isDarkMode ? "white" : "black",
    fontFamily: "Gilroy-Medium",
    fontSize: "19px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const MoodEmojiBoxStyle = {
  width: "175px",
  height: "91px",
  flexShrink: 0,
  borderRadius: "7px",
  border: "1px solid #0C8CCB",
  background: "rgba(12, 140, 203, 0.06)",
  marginTop: "87px",
  marginLeft: "27px",
};
export const MoodEmojiImgStyle = {
  marginTop: "14px",
  width: "48px",
  height: "48px",
};
export const MoodEmojiDescStyle = {
  color: "#0D8ECC",
  fontFamily: "Gilroy-Bold",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};
export const DeleteModalCancelButtonStyle = (isDarkMode, colors, theme) => {
  return {
    height: "35px",
    backgroundColor: isDarkMode ? "rgb(85 88 131)" : colors.blueAccent[700],
    color: theme.palette.common.white,
    width: "45%",
  };
};
export const DeleteModalContentStyle = (isDarkMode) => {
  return {
    fontFamily: "unset",
    color: isDarkMode ? "white" : "#e94343",
  };
};
export const DeleteModalConfirmButtonStyle = (isDarkMode, theme) => {
  return {
    height: "35px",
    backgroundColor: isDarkMode ? "rgb(145 34 34)" : theme.palette.error.main,
    color: theme.palette.common.white,
    width: "45%",
  };
};
export const previewModalStyle = (isDarkMode) => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: isDarkMode ? "rgb(48 47 53)" : "#fbfbfb",
    border: "2px solid #000",
    boxShadow: 24,
    fontsize: 40,
    p: 2,
  };
};
export const ListItemStyle = (isDarkMode) => {
  return {
    background: isDarkMode ? "#838282" : "#f1f0f0",
    marginBottom: "10px",
    marginLeft: "16px",
    borderRadius: "42px",
  };
};
export const ProfileBoxStyle = (isDarkMode) => {
  return {
    ml: 3,
    paddingLeft: "20px",
    height: "60vh",
    background: isDarkMode ? "#494949" : "#f9f9f9",
    paddingTop: "40px",
    paddingBottom: "30px",
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  };
};
export const FormTextBoxStyle = (isDarkMode) => {
  return {
    "& .css-192k3kr-MuiFormControl-root-MuiTextField-root": {
      backgroundColor: isDarkMode ? "#252424" : "#ffffff",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: isDarkMode ? "rgba(223, 223, 223, 0.7)" : "#c4c4c4",
    },
    "& .css-1b9mdof-MuiFormLabel-root-MuiInputLabel-root": {
      color: isDarkMode ? "white" : "black",
    },
    "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
      color: isDarkMode ? "white" : "black",
    },
    "& .css-1fb9e9w-MuiFormControl-root-MuiTextField-root": {
      backgroundColor: "#252424",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      color: isDarkMode ? "white" : "black",
    },
    "& .css-v0ez7n-MuiFormLabel-root-MuiInputLabel-root": {
      color: isDarkMode ? "white" : "black",
    },
  };
};
