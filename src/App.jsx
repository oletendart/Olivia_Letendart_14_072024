import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="current-employess" element={<CurrentEmployees />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
