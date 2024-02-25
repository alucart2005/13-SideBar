import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Productos } from "../pages/Productos";
import { Estadisticas } from "../pages/Estadisticas";
import { Diagramas } from "../pages/Diagramas";
import { Reportes } from "../pages/Reportes";
import { Configuracion } from "../pages/Configuracion";
import { Exit } from "../pages/Exit";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/estadisticas" element={<Estadisticas />} />
      <Route path="/diagramas" element={<Diagramas />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/configuracion" element={<Configuracion />} />
      <Route path="/exit" element={<Exit />} />
    </Routes>
  );
}
