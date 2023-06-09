// import { Login } from "./pages/Login";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import { darkModeContext } from "./context/darkModeContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(darkModeContext);

  const queryclient = new QueryClient();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const Layout = () => {
    return (
      <QueryClientProvider client={queryclient}>
        <div>
          <Navbar />
          <div className="flex ">
            <div className="lg:block hidden sm:block" style={{ flex: "2" }}>
              <Leftbar />
            </div>
            <div style={{ flex: "6" }}>
              <Outlet />
            </div>
            <div className="lg:block hidden" style={{ flex: "3" }}>
              <Rightbar />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
