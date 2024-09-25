import React, { useEffect, useState } from "react";
import { messaging, getToken } from "../firebase";
import { AppProvider } from "./app-provider";
import AppRoutes from "./routes/AppRoutes";
import InstallPrompt from "../components/ui/InstallPrompt";
import { Toaster } from "react-hot-toast";
import { requestFCMPermissionAndToken } from "../utils";

const App = () => {
  const [currentToken, setCurrentToken] = useState(null);

  useEffect(() => {
    requestFCMPermissionAndToken(setCurrentToken);
  }, []);

  return (
    <AppProvider>
      <Toaster />
      <InstallPrompt />
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
