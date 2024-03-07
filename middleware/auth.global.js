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
    "/admin/dashboard",
    "/admin/karyawan",
    "/admin/layanan",
    "/admin/siswa",
    "/admin/profile",
  ];
  const requiresAuth = authenticatedPaths.some((path) =>
    to.path.startsWith(path)
  );

  if (verifiedToken && to.path === "/admin/login") {
    return navigateTo("/admin/dashboard");
  }

  if (!verifiedToken && requiresAuth) {
    return navigateTo("/admin/login");
  }

  if (verifiedToken && requiresAuth && !useProfileStore().$state.IsSave) {
    useNuxtApp().$profileStore.getUserLogin();
  }

  if (to.path === "/" && verifiedToken) {
    return navigateTo("/admin/dashboard");
  }

  if (to.path === "/" && !verifiedToken) {
    return navigateTo("/user/welcoming");
  }
});
