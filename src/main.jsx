import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";


const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
    // errorElement: <ErrorPage />,
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
