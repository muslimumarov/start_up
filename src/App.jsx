import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootlayoutRout from "./layout/RootlayoutRout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Cours from "./pages/Cours";
import ErrorPage from "./layout/ErrorPage";
import Login from "./pages/register/Login";
import Register from "./pages/register/Register";
import Allcourse from "./pages/help/Allcourse";
import ForeginLanguage from "./pages/help/ForeginLanguage";
import ItProgram from "./pages/help/ItProgram";
import KompGrafig from "./pages/help/KompGrafig";
import FinansBusnes from "./pages/help/FinansBusnes";

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
          path: "kurs",
          element: <Allcourse />,
        },
        {
          path: "til",
          element: <ForeginLanguage />,
        },
        {
          path: "dastur",
          element: <ItProgram />,
        },
        {
          path: "grafika",
          element: <KompGrafig />,
        },
        {
          path: "moliya",
          element: <FinansBusnes />,
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
    <div className="App container">
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
