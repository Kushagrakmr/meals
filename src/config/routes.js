import React from "react";
import Home from "../components/Home";
import User from "../components/User";
import UserProfile from "../components/User/UserProfile";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/user",
        element: <User />,
    },
    {
        path: "/profile/:userProfileId",
        element: <UserProfile />
    },
];
