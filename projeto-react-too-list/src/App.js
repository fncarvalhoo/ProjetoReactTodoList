import { Formulario } from "./components/Form/index.js";
import { GlobalStyle } from "../src/styles/global.js";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../src/components/Header/index.js";
import { Routess } from "./components/Routes/index.js";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routess/>
      <Formulario />

    </BrowserRouter>
  );
}
