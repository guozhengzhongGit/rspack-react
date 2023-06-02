import { Navigate, useRoutes } from "react-router-dom";

const routes = require.context("./modules", false, /\.jsx$/);
console.log(routes.keys());
let routeList = [];
routes.keys().forEach((key) => {
  const route = routes(key).default;
  routeList = routeList.concat(route);
});
console.log(routeList);
export default routeList;
