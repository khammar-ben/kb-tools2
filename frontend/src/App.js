import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import IpExtractor from "./pages/IpExtractor.js";
import ExtractDomains from "./pages/ExtractDomains.js";
import Check_spf_dmarc from "./pages/check_spf_dmarc.js";
import Shufl_U_L from "./pages/Shufl_U_L.js";
import Shufl_Lines from "./pages/Shufl_Lines.js";
import TextToHtml from "./pages/TextToHtml.js";

export function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>SORROY.........</h1>,
    },

    {
      path: "/IpExtractor",
      element: <IpExtractor />,
    },

    {
      path: "/ExtractDomains",
      element: <ExtractDomains />,
    },

    {
      path: "/Check_spf_dmarc",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Check_spf_dmarc />,
    },

    {
      path: "/Shufl_U_L",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Shufl_U_L />,
    },

    {
      path: "/Shufl_Lines",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Shufl_Lines />,
    },
    {
      path: "/TextToHtml",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <TextToHtml />,
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}
export default App; // Ensure this line exports App as the default export