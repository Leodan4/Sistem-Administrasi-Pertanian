// import { verifyAuth } from "~/lib/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = localStorage.getItem("token");
  const docs = localStorage.getItem("docs");
  const form = localStorage.getItem("Form");
  const formhasil = localStorage.getItem("formhasil");

  // Halaman publik yang tidak membutuhkan autentikasi
  const publicPages = ["/login", "/register"];

  // Check if the token exists
  if (!token) {
    // Redirect to login page if the token is not found in localStorage
    if (!publicPages.includes(to.path)) {
      return navigateTo("/login");
    }
    return;
  }

  const pagesRequiringDocs = ["/user/revisi_dokumen"];
  const pagesRequiringFormHasil = ["/user/pengumuman_hasil"];
  const pagesRequiringVerifikasi = ["/user/verifikasi"];

  if (pagesRequiringDocs.some((path) => to.path.startsWith(path)) && docs === "false") {
    alert("Anda belum memiliki akses untuk revisi dokumen");
    return navigateTo("/user/dashboard");
  }

  if (
    pagesRequiringFormHasil.some((path) => to.path.startsWith(path)) &&
    formhasil === "false"
  ) {
   alert("Anda belum memiliki akses untuk pengumuman hasil");
    return navigateTo("/user/dashboard");
  }

  if (pagesRequiringVerifikasi.some((path) => to.path.startsWith(path)) && form === "false") {
    alert("Anda belum memiliki akses untuk verifikasi");

    return navigateTo("/user/dashboard");
  }

  // const verifiedToken = await verifyAuth(token).catch((err) => {
  //   console.log(err);
  //   // Token verification failed, remove the token from localStorage
  //   localStorage.removeItem("token");
  // });

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

  // if (verifiedToken && to.path === "/login") {
  //   return navigateTo("/adminBPP/dashboard");
  // }

  // if (!verifiedToken && requiresAuth) {
  //   return navigateTo("/login");
  // }

  // // if (verifiedToken && requiresAuth && !useProfileStore().$state.IsSave) {
  // //   useNuxtApp().$profileStore.getUserLogin();
  // // }

  // if (to.path === "/" && verifiedToken) {
  //   return navigateTo("/adminBPP/dashboard");
  // }

  // if (to.path === "/" && !verifiedToken) {
  //   return navigateTo("/login");
  // }
});
