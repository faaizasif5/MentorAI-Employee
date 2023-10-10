import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PortraitIcon from "@mui/icons-material/Portrait";
import TaskIcon from "@mui/icons-material/Task";
import Logout from "@mui/icons-material/Logout";
import React, { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Dashboard = React.lazy(() => import("../components/dashboard"));
const EmployeeList = React.lazy(() => import("../components/employeeList"));
const AddEmployee = React.lazy(() => import("../components/addEmployee"));
const LineManagerList = React.lazy(() =>
  import("../components/lineManagerPortal/lineManagerList"),
);
const ProjectList = React.lazy(() =>
  import("../components/projectsList/index"),
);
const AddProject = React.lazy(() => import("../components/addProject/index"));
const Profile = React.lazy(() => import("../components/profile/index"));

const SidebarRoutes = [
  {
    path: "/dashboard/home",
    name: "Dashboard",
    icon: <HomeOutlinedIcon />,
  },
  {
    path: "/dashboard/employee",
    name: "Employee List",
    icon: <PeopleOutlinedIcon />,
  },
  {
    path: "/dashboard/lineManager",
    name: "Line Manager Portal",
    icon: <SupervisorAccountIcon />,
  },
  {
    path: "/dashboard/projects",
    name: "Projects",
    icon: <TaskIcon />,
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    icon: <PortraitIcon />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <Logout />,
  },
];

export default SidebarRoutes;

export const routes = [
  {
    path: "home",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "employee",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <EmployeeList />
      </Suspense>
    ),
  },
  {
    path: "addEmployee",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <AddEmployee />
      </Suspense>
    ),
  },
  {
    path: "lineManager",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <LineManagerList />
      </Suspense>
    ),
  },
  {
    path: "projects",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <ProjectList />
      </Suspense>
    ),
  },
  {
    path: "addProject",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <AddProject />
      </Suspense>
    ),
  },
  {
    path: "profile",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <Profile />
      </Suspense>
    ),
  },
];
