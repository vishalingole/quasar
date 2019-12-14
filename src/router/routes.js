import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Dashboard from "../pages/Dashboard.vue";
import Detail from "../pages/Detail.vue";
import CreateAd from "../pages/CreateAd.vue";
import WholeSaler from "../pages/WholeSaler.vue";
import Retailer from "../pages/Retailer.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "login",
        component: Login,
        meta: {
          allowAnonymous: true
        }
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "register",
        component: Register,
        meta: {
          allowAnonymous: true
        }
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
          allowAnonymous: false
        }
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "detail",
        name: "detail",
        component: Detail,
        meta: {
          allowAnonymous: false
        }
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "create-ad",
        name: "create-ad",
        component: CreateAd,
        meta: {
          allowAnonymous: false
        }
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "whole-saler",
        name: "whole-saler",
        component: WholeSaler,
        meta: {
          allowAnonymous: false
        }
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "retailer",
        name: "retailer",
        component: Retailer,
        meta: {
          allowAnonymous: false
        }
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
