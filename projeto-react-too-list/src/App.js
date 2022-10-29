import { Formulario } from "./components/Form/index.js";
import { GlobalStyle } from "../src/styles/global.js";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Formulario />
    </div>
  );
}
