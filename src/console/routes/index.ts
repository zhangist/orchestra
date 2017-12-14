import App from "./common/app";
import Default from "./site/default";
import Login from "./site/login";

const routes = [
  {
    component: App,
    routes: [
      {
        component: Default,
        exact: true,
        path: "/",
      },
      {
        component: Login,
        path: "/login",
      },
    ],
  },
];

export default routes;
