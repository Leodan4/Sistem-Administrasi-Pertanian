import { verifyAuth } from "~/lib/auth";
import { useProfileStore } from "~/stores/profile";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = localStorage.getItem("token");

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }));

  const authenticatedPaths = [
    "/adminBPP/dashboard",
    "/adminBPP/baru",
    "/adminBPP/tidak-valid",
    "/adminBPP/revisi",
    "/adminBPP/realisasi",
    "/adminBPP/tervalidasi",
    "/adminBPP/arsip-data",
    "/adminBPP/help",

    "/adminDinas/dashboard",
    "/adminDinas/baru",
    "/adminDinas/tidak-sesuai",
    "/adminDinas/tervalidasi",
    "/adminDinas/import-data",
    "/adminDinas/arsip-data",
    "/adminDinas/rekap-data",
    "/adminDinas/realisasi",
    "/adminDinas/sumber-dana",
    "/adminDinas/help",
    
  ];
  const requiresAuth = authenticatedPaths.some((path) =>
    to.path.startsWith(path)
  );

  if (verifiedToken && to.path === "/login") {
    return navigateTo("/adminBPP/dashboard");
  }

  if (!verifiedToken && requiresAuth) {
    return navigateTo("/login");
  }

  // if (verifiedToken && requiresAuth && !useProfileStore().$state.IsSave) {
  //   useNuxtApp().$profileStore.getUserLogin();
  // }

  if (to.path === "/" && verifiedToken) {
    return navigateTo("/adminBPP/dashboard");
  }

  if (to.path === "/" && !verifiedToken) {
    return navigateTo("/login");
  }
});
