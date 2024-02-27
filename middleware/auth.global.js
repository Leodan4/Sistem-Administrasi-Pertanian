export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = localStorage.getItem("token");
  const authenticatedPaths = [
    "/admin/dashboard",
    "/admin/karyawan",
    "/admin/layanan",
    "/admin/siswa",
  ];
  const requiresAuth = authenticatedPaths.some((path) =>
    to.path.startsWith(path)
  );

  if (token && to.path === "/admin/login") {
    return navigateTo("/admin/dashboard");
  }

  if (!token && requiresAuth) {
    return navigateTo("/admin/login");
  }

  if (to.path === "/" && token) {
    return navigateTo("/admin/dashboard");
  }

  if (to.path === "/" && !token) {
    return navigateTo("/admin/login");
  }
});
