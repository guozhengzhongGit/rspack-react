import LayoutIndex from "../../layouts/default";

import Home from "../../pages/Home";

// 首页模块
const homeRouter = [
  {
    path: '/home',
    element: <LayoutIndex />,
    children: [
      {
        path: "/index",
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home",
        },
      },
    ],
  },
];

export default homeRouter;
