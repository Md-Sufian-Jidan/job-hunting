import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import ErrorPage from "../Pages/ErrorPage";
import MyPostedJobs from "../Pages/MyPostedJobs";
import UpdateJob from "../Pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../Components/MyBids";
import BidRequests from "../Components/BidRequests";
import AllJobs from "../Pages/AllJobs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateJob /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: '/my-bids',
                element: <PrivateRoute><MyBids /></PrivateRoute>
            },
            {
                path: '/bid-requests',
                element: <PrivateRoute><BidRequests /></PrivateRoute>
            },
            {
                path: '/all-jobs',
                element: <PrivateRoute><AllJobs /></PrivateRoute>
            },
        ]
    }
])

export default router;