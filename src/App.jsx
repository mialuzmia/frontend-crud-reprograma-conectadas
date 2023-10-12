import { BooksProvider } from "./context/Books";
import { Router } from "./routes/app.routes";

//TODO: Substituir o Provider
function App() {
  return (
    <BooksProvider>
      <Router />
    </BooksProvider>
  );
}

export default App;
