import lazyLoad from "../utils/lazyLoad";
import LayoutIndex from "../../layouts/default";
import React from "react";

// 外部链接模块
const linkRouter = [
  {
    path: "/link",
    element: <LayoutIndex />,
    meta: {
      title: "外部链接",
    },
    children: [
      {
        path: "/gitee",
        element: lazyLoad(React.lazy(() => import("../../pages/Link/Gitee"))),
        meta: {
          requiresAuth: true,
          title: "Gitee 仓库",
          key: "gitee",
        },
      },
      {
        path: "/github",
        element: lazyLoad(React.lazy(() => import("../../pages/Link/Github"))),
        meta: {
          requiresAuth: true,
          title: "GitHub 仓库",
          key: "github",
        },
      },
    ],
  },
];

export default linkRouter;
