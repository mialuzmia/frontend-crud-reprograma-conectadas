import Cadastrar from "../pages/cadastrar";
import Editar from "../pages/editar";
import Home from "../pages/home";
import Sobre from "../pages/sobre";
import Visualizar from "../pages/visualizar";

// TODO: Modificar rotas para aplicação
export const PATHS = {
  HOME: "/",
  CADASTRAR: "/cadastrar",
  VISUALIZAR: "/animes/:id",
  EDITAR: "/animes/:id/editar",
  SOBRE: "/sobre",
};

const ROUTES = [
  {
    path: PATHS.HOME,
    element: Home,
  },
  {
    path: PATHS.CADASTRAR,
    element: Cadastrar,
  },
  {
    path: PATHS.VISUALIZAR,
    element: Visualizar,
  },
  {
    path: PATHS.EDITAR,
    element: Editar,
  },
  {
    path: PATHS.SOBRE,
    element: Sobre,
  },
];

export default ROUTES;
