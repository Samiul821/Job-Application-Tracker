import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import error from "../pages/Error/Error";
import Error from "../pages/Error/Error";
import { path } from "framer-motion/client";
import Register from "../pages/Register/Register";
import login from "../pages/Login/login";
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import profile from "../pages/Profile/profile";

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
        path: 'login',
        Component: login
      },
      {
        path: 'register',
        Component: Register
      },
    ],
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
