import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import Wrapper from "../components/Wrapper";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<Wrapper> <route.element /> </Wrapper>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
