import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./pages/Home";
import Start from "./pages/Start";
import routerData from "./router";
console.log(routerData);
const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path={routerData[0].path} element={routerData[0].element}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
