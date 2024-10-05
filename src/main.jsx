import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
// import A1 from "./Pages/5. prop-drill/A1";
// import Decrement from "./Pages/1.increment counter/Decrement";
// import Home from "./Pages/1.increment counter/Home";
// import Homepage from "./Pages/6. Dark-theme v2/pages/Homepage/homepage";
// import Increment from "./Pages/1.increment counter/increment";
// import Multiply from "./Pages/1.increment counter/multiple";
// import ParentCounter from "./Pages/1.increment counter/parent-counter";
// import Path from "./Pages/3.Query and path selector/1.path";
// import Profile from "./Pages/2. getQuery/1. query";
// import ThemeContext from "./Pages/6. Dark-theme v2/context/themeContext.jsx";
// import ProfileContext from "./Pages/6. Dark-theme v2/context/profileContext.jsx";
// import StateContext from "./Pages/6. Dark-theme v2/context/statecontext";
import StopwatchHomepage from "./Pages/7.Stopwatch/pages/homepage/stopwatchhomepage";
import StopwatchContext from "./Pages/7.Stopwatch/context/stopwatch"
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   path: "/themev2",
  //   element: <Homepage />,
  // },
  // {
  //   path: "/increment",
  //   element: <Increment />,
  // },
  // {
  //   path: "/decrement",
  //   element: <Decrement />,
  // },
  // {
  //   path: "/multiple",
  //   element: <Multiply />,
  // },
  // {
  //   path: "/counter",
  //   element: <ParentCounter />,
  // },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/Path",
  //   element: <Path />,
  // },
  // {
  //   path: "/prop-drill",
  //   element: <A1 />,
  // },
  {
    path: "/stopwatch",
    element: <StopwatchHomepage />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <ProfileContext>
  // <ThemeContext>
  // <StateContext>
  <StopwatchContext>
    <RouterProvider router={router} />
  </StopwatchContext>
  // </StateContext>
  // </ThemeContext>
  // </ProfileContext>
);
