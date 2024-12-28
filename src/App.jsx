import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Applayout from "./page/Applayout";
import Registration from "./page/Registration";
import Findpage from "./page/Findpage";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "find",
        element: <Findpage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
