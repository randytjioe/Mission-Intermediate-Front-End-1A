import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import Admin from "./pages/adminPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import FilmPage from "./pages/filmPage";
import DetailPage from "./pages/detailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="register" element={<Register />} />
        <Route path="/films" element={<FilmPage />} />
        <Route path="/films/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
