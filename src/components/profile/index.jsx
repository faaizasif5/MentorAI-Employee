import { Box, Avatar } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NumbersIcon from "@mui/icons-material/Numbers";
import PersonIcon from "@mui/icons-material/Person";
import DialpadIcon from "@mui/icons-material/Dialpad";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import Header from "../layout/header";
import AvatarImage from "../../assets/profileImage.jpg";
import ProfileInfo from "../layout/profileDetails";
import ProfileDateField from "../layout/dateField";
import ProfileDivider from "../layout/ProfileDivider";
import { ProfileBoxStyle } from "../layout/muiStyles";
import { useDarkMode } from "../../context/DarkModeContext";

function Profile() {
  const { t } = useTranslation();
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Header title="Profile Details" subtitle="View Your Profile Details" />
      <Box sx={ProfileBoxStyle}>
        <Stack direction="row" spacing={4}>
          <ProfileDivider isDarkMode={isDarkMode} />
          <Stack direction="column" justifyContent="space-evenly">
            <Avatar
              alt="Remy Sharp"
              src={AvatarImage}
              sx={{ width: 200, height: 200 }}
              padding="50px"
            />
          </Stack>
          <ProfileDivider isDarkMode={isDarkMode} />
          <Stack direction="column" justifyContent="space-evenly" spacing={3}>
            <ProfileInfo
              label={t("employee.id")}
              value="23"
              AvatarIcon={NumbersIcon}
              isDarkMode={isDarkMode}
            />
            <ProfileInfo
              label={t("employee.name")}
              value="Syed Faaiz Asif"
              AvatarIcon={PersonIcon}
              isDarkMode={isDarkMode}
            />
            <ProfileInfo
              label={t("employee.email")}
              value="syedfaaizasif@folio3.com"
              AvatarIcon={AlternateEmailIcon}
              isDarkMode={isDarkMode}
            />
            <ProfileInfo
              label={t("employee.Contact")}
              value="03312470377"
              AvatarIcon={DialpadIcon}
              isDarkMode={isDarkMode}
            />
          </Stack>
          <ProfileDivider isDarkMode={isDarkMode} />
          <Stack direction="column" justifyContent="space-evenly" spacing={3}>
            <ProfileInfo
              label={t("employee.Designation")}
              value="Admin"
              AvatarIcon={WorkIcon}
              isDarkMode={isDarkMode}
            />
            <ProfileInfo
              label={t("employee.cnic")}
              value="42201-6634859-3"
              AvatarIcon={DescriptionIcon}
              isDarkMode={isDarkMode}
            />
            <ProfileInfo
              label={t("employee.address")}
              value="Folio3 Tower, Plot 26 Shahrah-e-Faisal Rd,Karachi"
              AvatarIcon={HomeIcon}
              isDarkMode={isDarkMode}
            />
            <ProfileDateField
              label={t("employee.DateofJoining")}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              isDarkMode={isDarkMode}
            />
          </Stack>
          <ProfileDivider isDarkMode={isDarkMode} />
        </Stack>
      </Box>
    </>
  );
}

export default Profile;
