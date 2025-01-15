import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./gpt-frontend/routes/homepage/Homepage";
import DashboardPage from "./gpt-frontend/routes/dashboardPage/DashboardPage";
import ChatPage from "./gpt-frontend/routes/chatPage/ChatPage";
import RootLayout from "./gpt-frontend/layouts/rootLayout/RootLayout";
import DashboardLayout from "./gpt-frontend/layouts/dashboardLayout/DashboardLayout";
import SignInPage from "./gpt-frontend/routes/signInPage/signInPage";
import SignUpPage from "./gpt-frontend/routes/signUpPage/signUpPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
