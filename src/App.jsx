import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/layout/home-layout";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import FindJob from "./pages/home/find-job";
import BrowserCompanies from "./pages/home/browser-companies";
import AuthLayout from "./pages/layout/auth-layout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <h1 className="text-3xl font-bold underline">Home</h1>,
        },
        {
          path: "/find-job",
          element: <FindJob />,
        },
        {
          path: "/browser-companies",
          element: <BrowserCompanies />,
        },
      ],
    },
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
    },

    {
      path: "/home",
      element: <h1 className="text-3xl font-bold underline">Home</h1>,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
