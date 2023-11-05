import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import ContactMe from "./pages/ContactMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/aboutMe",
        element: <AboutMe />,
      },
      {
        path: "/contactMe",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
