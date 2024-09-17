import React from "react";

import { AppProvider } from "./app-provider";
import AppRoutes from "./routes/AppRoutes";
import InstallPrompt from "../components/ui/InstallPrompt";

const App = () => {
  return (
    <AppProvider>
      <InstallPrompt/>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
