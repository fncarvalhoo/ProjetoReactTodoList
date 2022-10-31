import React from "react";
import { Route, Routes } from "react-router-dom";

import { Formulario } from "../Form/index.js";
import { Config } from "../Config";

export function Routess() {
  return (
    <Routes>
      <Route exact patch="/" element={<Formulario />}>
      </Route>
      <Route exact path="/config" element={<Config />}>
      </Route>
    </Routes>
  );
}
