import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  Register,
  Login,
  HomeLayout,
  ErrorPage,
  Profile,
  AddJob,
  AllJobs,
  Stats,
  DashboardLayout,
  Admin,
} from "./pages";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global.ts";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark-theme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
