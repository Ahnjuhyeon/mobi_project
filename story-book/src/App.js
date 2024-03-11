import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./pages";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([{ path: "/", element: <MainPage /> }])}
    />
  );
}

export default App;
