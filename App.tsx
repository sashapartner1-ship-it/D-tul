import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstContact from "./pages/FirstContact"
import Home from "./pages/Home"
import AiWorkflows from "./pages/AiWorkflows"
import Architecture from "./pages/Architecture"
import "./components/HomeStyles.css"
import "./components/MobileStyles.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* DTUL/Product route removed as it was a dummy */}
        <Route path="/first-contact" element={<FirstContact />} />
        <Route path="/ai-workflows" element={<AiWorkflows />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </BrowserRouter>
  )
}
