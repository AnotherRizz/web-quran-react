import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
