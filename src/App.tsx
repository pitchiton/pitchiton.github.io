import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateApplication from "./pages/CreateApplication";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/application-form" element={<CreateApplication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
