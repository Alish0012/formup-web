import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import YoneticiPaneli from "./pages/YoneticiPaneli";
import EgitmenPaneli from "./pages/EgitmenPaneli";
import OgrenciPaneli from "./pages/OgrenciPaneli";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yonetici-paneli" element={<YoneticiPaneli />} />
        <Route path="/egitmen-paneli" element={<EgitmenPaneli />} />
        <Route path="/ogrenci-paneli" element={<OgrenciPaneli />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;