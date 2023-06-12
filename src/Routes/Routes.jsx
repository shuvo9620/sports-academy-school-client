import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/Instructor/ManageUsers/ManageUsers";
import Payment from "../pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../pages/Dashboard/Instructor/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import AddClasses from "../pages/Dashboard/Instructor/AddClasses/AddClasses";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import StudentRoute from "./StudentRoute";
import Instructors from "../pages/Dashboard/Instructors/Instructors";
import Classes from "../pages/Dashboard/Classes/Classes";
import ErrorPage from "../../ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'manageclasses',
                element: <PrivateRoute><AdminRoute><ManageClasses></ManageClasses></AdminRoute></PrivateRoute>
            },
            {
                path: 'manageusers',
                element: <PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>
            },
            {
                path: 'addclasses',
                element: <PrivateRoute><InstructorRoute><AddClasses></AddClasses></InstructorRoute></PrivateRoute>
            },
            {
                path: 'myclasses',
                element: <PrivateRoute><InstructorRoute><MyClasses></MyClasses></InstructorRoute></PrivateRoute>
            },
            {
                path: 'selectedclasses',
                element: <PrivateRoute><StudentRoute><SelectedClasses></SelectedClasses></StudentRoute></PrivateRoute>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    }
]);