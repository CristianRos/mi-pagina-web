// Layout
import AdminLayout from "../layouts/AdminLayout";
import BasicLayout from "../layouts/BasicLayout";

// Admin Pages
import AdminHome from "../Pages/Admin";
import AdminLogIn from "../Pages/Admin/LogIn";

// Pages
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

// Others
import Error404 from "../Pages/Error404";

const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminLogIn,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: BasicLayout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/Contact",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
