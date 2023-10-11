import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../layout/topbar/Topbar";
import Sidebar from "../layout/sidebar/Sidebar";
import { routes } from "../../config/routes";
import { ColorModeContext, useMode } from "../../theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function MainDashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MainDashboard;
