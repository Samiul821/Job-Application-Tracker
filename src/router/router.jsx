import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import error from "../pages/Error/Error";
import Error from "../pages/Error/Error";
import { h1, path } from "framer-motion/client";
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import profile from "../pages/Profile/profile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: Error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'contact',
        element: <h1>Contact</h1>
      }
    ],
  },

  // Auth
 {
  path: "/",
  Component: AuthLayout,
  children: [
    {
      path: "/login",
      Component: Login
    },
    {
      path: '/register',
      Component: Register
    }
  ]
 },

  // Dashboard
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard
      },
      {
        path: 'profile',
        Component: profile
      }
    ]
  }
]);

export default router;
