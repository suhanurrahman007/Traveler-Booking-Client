import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Hotel from "../Pages/Hotel/Hotel";
import Tour from "../Pages/Tour/Tour";
import Activity from "../Pages/Activity/Activity";
import Car from "../Pages/Car/Car";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/hotel",
        element: <Hotel></Hotel>,
      },
      {
        path: "/tour",
        element: <Tour></Tour>,
      },
      {
        path: "/activity",
        element: <Activity></Activity>,
      },
      {
        path: "/car",
        element: <Car></Car>,
      },
    ],
  },
]);

export default router;
