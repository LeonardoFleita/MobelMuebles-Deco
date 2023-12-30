import { Route, Routes } from "react-router-dom";
import Rutas from "./Rutas";
import Home from "../components/pages/home/Home";
import MueblesALaMedida from "../components/pages/mueblesALaMedida/MueblesALaMedida";
import Contacto from "../components/pages/contacto/Contacto";
import Decoracion from "../components/pages/decoracion/Decoracion";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Rutas />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/mueblesALaMedida"} element={<MueblesALaMedida />} />
        <Route path={"/decoracion"} element={<Decoracion />} />
        <Route path={"/contacto"} element={<Contacto />} />
      </Route>
      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
