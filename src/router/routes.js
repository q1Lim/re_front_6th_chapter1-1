import { ProductListPage, initializeProductListPage } from "../pages/productListPage.js";

export const routes = [
  {
    path: "/",
    component: ProductListPage,
    initializer: initializeProductListPage,
  },
];
