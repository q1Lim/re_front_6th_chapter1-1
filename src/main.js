import { Router } from "./router/index.js";
import { routes } from "./router/routes.js";
import { isTestEnv } from "./utils/isTestEnv.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

function main() {
  const router = Router();
  routes.forEach((route) => {
    router.registerRoute(route.path, route.component, route.initializer);
  });
  router.router();
}

// 애플리케이션 시작
if (!isTestEnv()) {
  enableMocking().then(main);
} else {
  main();
}
