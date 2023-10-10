/* eslint-disable no-dupe-keys */
import themes from "../theme";
import isdarkmode from "../helpers/darkmodeHelper";

export const DashboardTitleBoxStyle = {
  width: "479.65px",
  height: "54.854px",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  marginLeft: "10px",
};
export const DarkmodeButtonBoxStyle = () => {
  return {
    backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "#fefefe",
    borderRadius: "40px",
    display: "flex",
    width: "12vw",
    height: "8vh",
    float: "right",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
  };
};
export const DarkmodeButtonFontStyle = () => {
  return {
    fontFamily: "Gilroy-Bold, sans-serif",
    color: isdarkmode() ? "white" : "black",
  };
};
export const DarkmodeButton = {
  width: "12vw",
  height: "8vh",
};
export const addAccountButtonBox = {
  display: "flex",
  justifyContent: "flex-start",
  maxWidth: "200px",
  marginLeft: "auto",
};
export const addAccountButton = {
  fontSize: "12px",
  padding: "6px 12px",
  width: "100%",
  marginBottom: "15px",
};
export const DashboardOuterBoxStyle = (isNonMobile) => {
  return {
    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
    margin: "15px",
  };
};
export const DashboardInnerBoxStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridAutoRows: "auto",
  gap: "15px",
  justifyContent: "center",
  alignItems: "center",
};
export const DashboardTitleTextStyle = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
    fontSize: "31.373px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const DarkModeFontColour = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
  };
};
export const LoadStressTitleBox = {
  display: "flex",
  marginLeft: "20px",
  marginBottom: 1,
  marginTop: 1,
};
export const LoadTitle = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    alignItems: "flex-start",
  };
};
export const StressTitle = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginLeft: "75vh",
  };
};
export const EmployeeBoxStyle = () => {
  return {
    gridColumn: "span 1",
    gridRow: "span 1",
    width: "90vh",
    height: "378px",
    flexShrink: 0,
    borderRadius: "19.004px",
    background: isdarkmode()
      ? themes.darkmodeBoxColor
      : themes.lightmodeBoxColor,
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
  width: "32vw",
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
export const ProfileDividerStyle = () => {
  return {
    backgroundColor: isdarkmode() ? "white" : "#000000",
  };
};
export const PieChartBoxStyle = () => {
  return {
    gridColumn: "span 1",
    gridRow: "span 1",
    width: "90vh",
    height: "374px",
    flexShrink: 0,
    borderRadius: "19.004px",
    background: isdarkmode()
      ? themes.darkmodeBoxColor
      : themes.lightmodeBoxColor,
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
  };
};
export const PieChartTypographyStyle = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
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
export const PieChartStyle = () => {
  return {
    "--ChartsLegend-rootOffsetX": "200px",
    "--ChartsLegend-rootOffsetY": "-75px",
    '[class*="MuiChartsLegend-label"]': {
      fill: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    },
  };
};
export const EmojiBoxStyle = {
  marginTop: "14px",
  width: "18px",
  height: "18px",
};
export const LoadTypeTextStyle = () => {
  return {
    ml: "10px",
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const PercentageTextStyle = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const RedAlertBoxStyle = () => {
  return {
    width: 208,
    height: 76,
    flexShrink: 0,
    borderRadius: "12px 12px 0 0",
    background: isdarkmode()
      ? themes.darkmodeBoxColor
      : themes.lightmodeBoxColor,
    boxShadow: "0px 4px 0px 0px #650BFF inset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    top: "34px",
  };
};
export const RedAlertTitleStyle = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const RedAlertContentBoxStyle = () => {
  return {
    width: "90vh",
    height: "282px",
    flexShrink: 0,
    borderRadius: "19.004px",
    gridColumn: "span 1",
    gridRow: "span 1",
    width: "597px",
    maxHeight: "282px",
    marginTop: "26px",
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
    borderRadius: "16px",
  };
};
export const RedAlertRowContent = {
  display: "flex",
  mt: 2,
  ml: 4,
  alignItems: "center",
};
export const RedAlertEmpName = () => {
  return {
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
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
  fontFamily: themes.boldFont,
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
};
export const AvgEmployeeMoodBoxStyle = () => {
  return {
    gridColumn: "span 1",
    gridRow: "span 1",
    marginTop: "92px",
    width: "90vh",
    height: "282px",
    flexShrink: 0,
    borderRadius: "19.004px",
    background: isdarkmode()
      ? themes.darkmodeBoxColor
      : themes.lightmodeBoxColor,
    boxShadow: "0px 16px 24px 0px rgba(0, 0, 0, 0.02)",
    display: "flex",
  };
};
export const MoodContentBoxStyle = {
  marginLeft: "70px",
  marginTop: "104px",
};
export const MoodContentTextStyle = () => {
  return {
    width: "262px",
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
    fontFamily: themes.boldFont,
    fontSize: "25.112px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};
export const ResgistrationFormStyle = () => {
  return {
    backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "#fcfcfc",
    padding: "18px",
    paddingTop: "30px",
    borderRadius: "10px",
    marginTop: "13px",
  };
};
export const ResgistrationFormBoxStyle = (isNonMobile) => {
  return {
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    "& > div": {
      gridColumn: isNonMobile ? undefined : "span 4",
      background: "rgb(169 165 187 / 13%)",
    },
  };
};
export const ProjectResgistrationFormBoxStyle = (isNonMobile) => {
  return {
    display: "inline-grid",
    gap: "30px",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    marginTop: 12,
    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
  };
};

export const ResgistrationButtonBoxStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};
export const ResgistrationButtonStyle = {
  backgroundColor: "rgb(18 121 69)",
  width: "15vw",
  height: "7vh",
  "&:hover": {
    backgroundColor: "rgb(18 121 69)",
  },
};
export const MoodContentSubTextStyle = () => {
  return {
    width: "262px",
    color: isdarkmode() ? themes.darkmodefontColor : themes.lightmodeFontColor,
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
  fontFamily: themes.boldFont,
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};
export const DeleteModalCancelButtonStyle = (colors, theme) => {
  return {
    height: "35px",
    backgroundColor: isdarkmode() ? "rgb(85 88 131)" : colors.blueAccent[700],
    color: theme.palette.common.white,
    width: "45%",
  };
};
export const DeleteModalContentStyle = () => {
  return {
    fontFamily: "unset",
    color: isdarkmode() ? "white" : "#e94343",
  };
};
export const DeleteModalConfirmButtonStyle = (theme) => {
  return {
    height: "35px",
    backgroundColor: isdarkmode() ? "rgb(145 34 34)" : theme.palette.error.main,
    color: theme.palette.common.white,
    width: "45%",
  };
};
export const previewModalStyle = () => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: isdarkmode() ? themes.darkmodeBoxColor : "#fbfbfb",
    border: "2px solid #000",
    boxShadow: 24,
    fontsize: 40,
    p: 2,
  };
};
export const ListItemStyle = () => {
  return {
    background: isdarkmode() ? "#838282" : "#f1f0f0",
    marginBottom: "10px",
    marginLeft: "16px",
    borderRadius: "42px",
  };
};
export const ProfileBoxStyle = (isNonMobile) => {
  return {
    ml: 3,
    paddingLeft: "20px",
    height: "60vh",
    background: isdarkmode() ? "#494949" : "#f9f9f9",
    paddingTop: "40px",
    paddingBottom: "30px",
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
  };
};
export const dataGridStyles = (colors) => {
  return {
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: isdarkmode() ? "#595a68" : colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      color: isdarkmode() ? "#e3e3e3" : "black",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: isdarkmode() ? "#cbc3c3" : colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: isdarkmode() ? "#595a68" : colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    '[class*="MuiTablePagination-root"] [class*="MuiTablePagination-selectLabel"]':
      {
        color: "black",
        marginTop: "8px",
      },
    '[class*="MuiTablePagination-root"] [class*="MuiTablePagination-displayedRows"]':
      {
        color: "black",
        marginTop: "11px",
      },
  };
};

export const FormTextBoxStyle = () => {
  return {
    '& [class*="MuiFormControl-root"][class*="MuiTextField-root"]': {
      backgroundColor: isdarkmode() ? "#252424" : "#ffffff",
    },
    '& [class*="MuiOutlinedInput-notchedOutline"]': {
      borderColor: isdarkmode() ? "rgba(223, 223, 223, 0.7)" : "#c4c4c4",
    },
    '& [class*="MuiFormLabel-root"][class*="MuiInputLabel-root"]': {
      color: isdarkmode()
        ? themes.darkmodefontColor
        : themes.lightmodeFontColor,
    },
    '& [class*="MuiInputBase-input"][class*="MuiOutlinedInput-input"]': {
      color: isdarkmode()
        ? themes.darkmodefontColor
        : themes.lightmodeFontColor,
    },
    '& [class*="MuiFormControl-root"][class*="MuiTextField-root"]': {
      backgroundColor: "#252424",
    },
    '& [class*="MuiInputBase-input"][class*="MuiOutlinedInput-input"]': {
      color: isdarkmode()
        ? themes.darkmodefontColor
        : themes.lightmodeFontColor,
    },
    '& [class*="MuiFormLabel-root"][class*="MuiInputLabel-root"]': {
      color: isdarkmode()
        ? themes.darkmodefontColor
        : themes.lightmodeFontColor,
    },
  };
};
