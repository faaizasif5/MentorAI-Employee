import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import SubjectIcon from "@mui/icons-material/Subject";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { logout } from "../../../services/firebase";
import "./sidebar.css";
import { clearUser } from "../../../redux/reducers/AuthReducer";
import AppRoutes from "../../../config/routes";
import isdarkmode from "../../../helpers/darkmodeHelper";
import { removeItem } from "../../../services/storage-service";

function Sidebar({ children }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.05,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.05,
      },
    },
  };
  function handleClick(e) {
    if (e === "Logout") {
      logout();
      dispatch(clearUser());
      removeItem("AccessToken");
    }
  }
  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "250px" : "75px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar ${isdarkmode() ? "dark-mode" : ""}`}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                {t("sidebar.heading")}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          <div className="bars">
            <SubjectIcon onClick={toggle} />
          </div>
          {AppRoutes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={setIsOpen}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                />
              );
            }

            return (
              <NavLink
                to={route.path}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`link ${isdarkmode() ? "dark-mode" : ""}`}
                activeclassname={`active ${isdarkmode() ? "dark-mode" : ""}`}
                onClick={() => handleClick(route.name)}
              >
                <div className="icon">
                  <Tooltip title={route.name}>{route.icon}</Tooltip>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>

      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
