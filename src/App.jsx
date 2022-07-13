import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Techonology";
import MargerRoute from "./Components/MargerRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MargerRoute></MargerRoute>}>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route
            path="/destination"
            element={<Destination></Destination>}
          ></Route>
          <Route path="/crew" element={<Crew></Crew>}></Route>
          <Route path="/technology" element={<Technology></Technology>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
