import { Outlet, createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { Dashboard, Home, SignIn, SignUp } from "../pages";
import { MovieDetails } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Outlet />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: ":id",
            element: <MovieDetails />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page not found!</h1>,
  },
]);
