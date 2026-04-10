import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Lista from "./pages/Lista";
import Formulario from "./pages/Formulario";
import Detalhe from "./pages/Detalhe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/novo" element={<Formulario />} />
        <Route path="/editar/:id" element={<Formulario />} />
        <Route path="/detalhe/:id" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;