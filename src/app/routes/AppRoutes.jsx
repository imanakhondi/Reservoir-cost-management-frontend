import React from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { PAGE_COMPONENTS } from "../../types";

const routesMap = {
  notAuthenticated: [
    { path: "/errors/404", element: <PAGE_COMPONENTS.Error404 /> },
    { path: "/admins/login", element: <PAGE_COMPONENTS.Login /> },
    { path: "*", element: <Navigate to="/errors/404" /> },
  ],
  authenticated: [
    { path: "/errors/404", element: <PAGE_COMPONENTS.Error404 /> },
    { path: "/users", element: <PAGE_COMPONENTS.Users /> },
    { path: "/users/add", element: <PAGE_COMPONENTS.AddUser /> },
    { path: "/users/edit/:id", element: <PAGE_COMPONENTS.EditUser /> },
    { path: "/tanks", element: <PAGE_COMPONENTS.ManageTanksPage /> },
    { path: "/tanks/add", element: <PAGE_COMPONENTS.AddTank /> },
    { path: "/tanks/edit/:id", element: <PAGE_COMPONENTS.EditTank /> },
    { path: "/services", element: <PAGE_COMPONENTS.ManageServicesPage /> },
    { path: "/services/add", element: <PAGE_COMPONENTS.AddService /> },
    { path: "/services/edit/:id", element: <PAGE_COMPONENTS.EditService /> },
    { path: "/costs", element: <PAGE_COMPONENTS.ManageCostsPage /> },
    { path: "/costs/add", element: <PAGE_COMPONENTS.AddCost /> },
    { path: "/costs/update/:id", element: <PAGE_COMPONENTS.UpdateCost /> },
    { path: "/costs/edit/:id", element: <PAGE_COMPONENTS.EditCost /> },
    { path: "/", element: <PAGE_COMPONENTS.Dashboard /> },
    { path: "*", element: <Navigate to="/errors/404" /> },
  ],
  internalManager: [
    { path: "/errors/404", element: <PAGE_COMPONENTS.Error404 /> },
    { path: "/users", element: <PAGE_COMPONENTS.Users /> },
    { path: "/users/add", element: <PAGE_COMPONENTS.AddUser /> },
    { path: "/users/edit/:id", element: <PAGE_COMPONENTS.EditUser /> },
    { path: "/tanks", element: <PAGE_COMPONENTS.ManageTanksPage /> },
    { path: "/tanks/add", element: <PAGE_COMPONENTS.AddTank /> },
    { path: "/tanks/edit/:id", element: <PAGE_COMPONENTS.EditTank /> },
    { path: "/services", element: <PAGE_COMPONENTS.ManageServicesPage /> },
    { path: "/services/add", element: <PAGE_COMPONENTS.AddService /> },
    { path: "/services/edit/:id", element: <PAGE_COMPONENTS.EditService /> },
    { path: "/", element: <PAGE_COMPONENTS.Dashboard /> },
    { path: "*", element: <Navigate to="/errors/404" /> },
  ],
  operator: [
    { path: "/errors/404", element: <PAGE_COMPONENTS.Error404 /> },
    { path: "/costs", element: <PAGE_COMPONENTS.ManageCostsPage /> },
    { path: "/costs/add", element: <PAGE_COMPONENTS.AddCost /> },
    { path: "/costs/update/:id", element: <PAGE_COMPONENTS.UpdateCost /> },
    { path: "/costs/edit/:id", element: <PAGE_COMPONENTS.EditCost /> },
    { path: "/", element: <PAGE_COMPONENTS.Dashboard /> },
    { path: "*", element: <Navigate to="/errors/404" /> },
  ],
  financial: [
    { path: "/errors/404", element: <PAGE_COMPONENTS.Error404 /> },
    { path: "/costs", element: <PAGE_COMPONENTS.ManageCostsPage /> },
    { path: "/costs/update/:id", element: <PAGE_COMPONENTS.UpdateCost /> },
    { path: "/", element: <PAGE_COMPONENTS.Dashboard /> },
    { path: "*", element: <Navigate to="/errors/404" /> },
  ],
  merchant: [
    { path: "/errors/404", element: <PAGE_COMPONENTS.Error404 /> },
    { path: "/costs", element: <PAGE_COMPONENTS.ManageCostsPage /> },
    { path: "/costs/update/:id", element: <PAGE_COMPONENTS.UpdateCost /> },
    { path: "/", element: <PAGE_COMPONENTS.Dashboard /> },
    { path: "*", element: <Navigate to="/errors/404" /> },
  ],
};

const generateRoutes = (role) => {
  return routesMap[role]?.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));
};

const AppRoutes = () => {
  const adminState = useSelector((state) => state.adminReducer);

  return (
    <Router>
      <Routes>
        {!adminState?.admin && generateRoutes("notAuthenticated")}
        {adminState?.admin && generateRoutes("authenticated")}
        {adminState?.internalManager && generateRoutes("internalManager")}
        {adminState?.operator && generateRoutes("operator")}
        {adminState?.financial && generateRoutes("financial")}
        {adminState?.merchant && generateRoutes("merchant")}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
