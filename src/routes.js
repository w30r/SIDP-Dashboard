import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import BetterMap from "views/BetterMap.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Users from "views/Users.js";
import About from "views/About.js";
import Login from "views/Login.js";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   component: Login,
  //   layout: "/login",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-badge",
    component: Users,
    layout: "/admin",
  },
  // {
  //   path: "/userprofile",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  {
    path: "/betteramp",
    name: "Map",
    icon: "nc-icon nc-pin-3",
    component: BetterMap,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    icon: "nc-icon nc-quote",
    component: About,
    layout: "/admin",
  },
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  {
    path: "/icons",
    // name: "Icons",
    // icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
];

export default dashboardRoutes;
