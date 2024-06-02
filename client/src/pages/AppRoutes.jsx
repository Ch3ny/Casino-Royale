import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Login from "./Login/Login";
import Registration from "./Login/Registeration";
import Roulette from "./Roulette/Roulette";
import GuessingGame from "./GuessingGame/GuessingGame";
import SlotMachine from "./SlotMachine/SlotMachine";
import TOS from "./TOS/TOS";
import About from "./About/About";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/guess" element={<GuessingGame/>} />
        <Route path="/slot" element={<SlotMachine/>} />
        <Route path="/TOS" element={<TOS/>}/>

      </Routes>
    </BrowserRouter>
  );
}
