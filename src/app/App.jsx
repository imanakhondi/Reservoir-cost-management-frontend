import React from "react";

import { AppProvider } from "./app-provider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
