import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootlayoutRout from "./layout/RootlayoutRout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Cours from "./pages/Cours";
import ErrorPage from "./layout/ErrorPage";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootlayoutRout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "article",
          element: <Cours />,

        },

        {
          path: "about",
          element: <Help />,
        },

      ],
    },
  ]);
  <RouterProvider router={routes} />;
}
export default App;
