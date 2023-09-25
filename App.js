import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppNavigator from "./src/Navigator";
import axios from "axios";
import { AuthProvider } from "./src/provider/AuthProvider";

axios.defaults.baseURL = "http://localhost:3000";
//axios.defaults.baseURL = "http://10.10.247.80:3000/";
axios.create({
  withCredentials: true
});

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light"
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
