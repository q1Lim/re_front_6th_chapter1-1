export const isTestEnv = () => typeof import.meta.env.MODE !== "undefined" && import.meta.env.MODE === "test";
