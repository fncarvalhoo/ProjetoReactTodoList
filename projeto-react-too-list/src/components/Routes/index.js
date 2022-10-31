import React from "react";
import { Route, Routes } from "react-router-dom";

import { Formulario } from "../Form/index.js";
import { Certificados, Config } from "../Certificados";
import {About } from "../Sobre"

export function Routess() {
  return (
    <Routes>
      <Route exact patch="/" element={<Formulario />}>
      </Route>
      <Route exact path="/Sobre" element={<About />}>
      </Route>
      <Route exact path="/Certificados" element={<Certificados />}>
      </Route>
    </Routes>
  );
}
