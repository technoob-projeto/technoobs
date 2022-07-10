import { GlobalStyle } from "./style";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
