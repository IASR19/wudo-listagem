import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import ContextProvider from "../context";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}