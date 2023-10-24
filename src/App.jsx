import Wrapper from "./components/Wrapper";
import { BooksProvider } from "./context/Books";
import { Router } from "./routes/app.routes";

//TODO: Substituir o Provider
function App() {
  return (
    <BooksProvider>
      <Wrapper>
        <Router />
      </Wrapper>
    </BooksProvider>
  );
}

export default App;
