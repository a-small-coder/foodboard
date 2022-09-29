import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <ChakraProvider>
         <App />
      </ChakraProvider>
   </React.StrictMode>
);

reportWebVitals();
