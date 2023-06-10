import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import ManageClass from "../pages/ManageClass/ManageClass";
import ManageUsers from "../pages/manageUsers/manageUsers";
import Instructors from "../pages/Instructors/Instructors";
import AddSession from "../pages/AddSession/AddSession";
import MySession from "../pages/MySession/MySession";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'manageclass',
                element: <ManageClass></ManageClass>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addsession',
                element: <AddSession></AddSession>
            },
            {
                path: 'mysession',
                element: <MySession></MySession>
            }
        ]
    }
]);