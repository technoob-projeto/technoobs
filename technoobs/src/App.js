import { GlobalStyle } from "./style";
import Home from "./pages/Home";
import Header from "../src/components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
