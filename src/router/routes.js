const routes = [
  {
    path: "",
    redirect: "/ys_pc",
  },
  {
    name: "PcIndex",
    path: "/ys_pc",
    component: () => import("@/view/PcIndex"),
  },
  {
    name: "PmdIndex",
    path: "/ys_pmd",
    component: () => import("@/view/PmdIndex"),
  },
];

export default routes;