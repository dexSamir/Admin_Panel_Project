import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/product/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import Product from "./pages/singleProduct/product";
import User from "./pages/user/user";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />,
        children: [
            {
                path: "/", 
                element: <Home />
            }, 
            {
                path: "/users", 
                element: <Users />
            },
            {
                path: "/products", 
                element: <Products />
            }, 
            {
              path: "/users/:id",
              element: <User />,
            },
            {
              path: "/products/:id",
              element: <Product />,
            }, 
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
