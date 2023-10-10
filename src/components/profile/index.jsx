import { Box, Avatar } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NumbersIcon from "@mui/icons-material/Numbers";
import PersonIcon from "@mui/icons-material/Person";
import DialpadIcon from "@mui/icons-material/Dialpad";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import { auth } from "../../services/firebase";
import Header from "../layout/header";
import ProfileInfo from "../layout/profileDetails";
import { ProfileBoxStyle } from "../../styles/muiStyles";
import ProfileDateField from "../layout/dateField/index";
import ProfileDivider from "../layout/ProfileDivider/index";

function Profile() {
  const { t } = useTranslation();
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const storedUser = useSelector((state) => state.AuthReducer.user);
  return (
    <>
      <Header title="Profile Details" subtitle="View Your Profile Details" />
      <Box sx={ProfileBoxStyle(isNonMobile)}>
        <Stack direction="row" spacing={4}>
          <ProfileDivider />
          <Stack direction="column" justifyContent="space-evenly">
            <Avatar
              alt="Remy Sharp"
              src={storedUser ? storedUser.photo : user.photoURL}
              sx={{ width: 200, height: 200 }}
              padding="50px"
            />
          </Stack>
          <ProfileDivider />
          <Stack direction="column" justifyContent="space-evenly" spacing={3}>
            <ProfileInfo
              label={t("employee.id")}
              value="23"
              AvatarIcon={NumbersIcon}
            />
            <ProfileInfo
              label={t("employee.name")}
              value={storedUser ? storedUser.name : user.displayName}
              AvatarIcon={PersonIcon}
            />
            <ProfileInfo
              label={t("employee.email")}
              value={storedUser ? storedUser.email : user.email}
              AvatarIcon={AlternateEmailIcon}
            />
            <ProfileInfo
              label={t("employee.Contact")}
              value="03312470377"
              AvatarIcon={DialpadIcon}
            />
          </Stack>
          <ProfileDivider />
          <Stack direction="column" justifyContent="space-evenly" spacing={3}>
            <ProfileInfo
              label={t("employee.Designation")}
              value="Admin"
              AvatarIcon={WorkIcon}
            />
            <ProfileInfo
              label={t("employee.cnic")}
              value="42201-6634859-3"
              AvatarIcon={DescriptionIcon}
            />
            <ProfileInfo
              label={t("employee.address")}
              value="Folio3 Tower, Plot 26 Shahrah-e-Faisal Rd,Karachi"
              AvatarIcon={HomeIcon}
            />
            <ProfileDateField
              label={t("employee.DateofJoining")}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </Stack>
          <ProfileDivider />
        </Stack>
      </Box>
    </>
  );
}

export default Profile;
