import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Login from "./Login/Login";
import NewAccount from "./Login/NewAccount";
import Registration from "./Login/Registeration";
import Roulette from "./Roulette/Roulette";
import GuessingGame from "./GuessingGame/GuessingGame";
import SlotMachine from "./SlotMachine/SlotMachine";
import Terms from "./Terms/Terms";
import About from "./About/About";
import ScratchCards from "./ScratchCards/ScratchCards";


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
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/scratch" element={<ScratchCards/>}/>
        <Route path="/account/:id" element={<NewAccount />} />



      </Routes>
    </BrowserRouter>
  );
}
