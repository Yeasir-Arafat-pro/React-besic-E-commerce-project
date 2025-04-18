import React from "react";

import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./layouts/Navbar";
import SignIn from "./pages/SignIn";
import ProductDetails from "./components/ProductDetails";
import AdminProfile from "./components/admin/AdminProfile";
import UserOrders from "./components/user/UserOrders";
import UserProfile from "./components/user/UserProfile";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AdminProduct from "./components/admin/AdminProduct";
import AdminManageUsers from "./components/admin/AdminManageUsers";
import AdminCategories from "./components/admin/AdminCategories";
import AdminProtected from "./routes/AdminProtected";
import Footer from "./pages/Footer";

const App = () => {
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },

        {
          path: "dashboard/user",
          element: <ProtectedRoutes />,
          children: [
            
            {
              path: "orders",
              element: <UserOrders />,
            },
            {
              path: "profile",
              element: <UserProfile />,
            }

          ]
        },

        {
          path: "dashboard/admin",
          element: <AdminProtected />,
          children: [
            
            {
              path: "profile",
              element: <AdminProfile />,
            },
            {
              path: "products",
              element: <AdminProduct />,
            },
            {
              path: "categories",
              element: <AdminCategories />,
            },
            {
              path: "manage-users",
              element: <AdminManageUsers />,
            }

          ]
        },



      ],
    },

   
      
  ])

  return (
    
    <div className="con">
      <RouterProvider router={router} />
      <Footer/>
     
    </div>
  );
};

export default App;
//https://react-blog-app-4-2025.netlify.app/
