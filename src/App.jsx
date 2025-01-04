import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootlayoutRout from "./layout/RootlayoutRout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Cours from "./pages/Cours";
import ErrorPage from "./layout/ErrorPage";
import Login from "./pages/register/Login";
import Register from "./pages/register/Register";


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
          path: "course",
          element: <Cours />,

        },

        {
          path: "help",
          element: <Help />,
        },
        {
          path: "kirish",
          element: <Login />,
        },
        {
          path: "ro'yhat",
          element: <Register />,
        },

      ],
    },
  ]);
  return (
    <div className="App  container">
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
