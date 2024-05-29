import { useGeneralStore } from "~/stores/general";
import { useLoginStore } from "~/stores/login";

//BPP
import { useDashboardBPPStore } from "~/stores/dashboardBPP";
import { useBaruBPPStore } from "~/stores/baruBPP";

//Dinas
import { useDashboardDinasStore } from "~/stores/dashboardDinas";
import { useBaruDinasStore } from "~/stores/baruDinas";
import { useTidakSesuaiStore } from "~/stores/tidak-sesuai";
import { useTervalidasiDinasStore } from "~/stores/tervalidasiDinas";
import { useRealisasiDinasStore } from "~/stores/realisasiDInas"

// import { useForgetPasswordStore } from "~/stores/forget_password";
// import { useProfileStore } from "~/stores/profile";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      generalStore: useGeneralStore(),
      loginStore: useLoginStore(),

      //dinas
      useDashboardDinasStore: useDashboardDinasStore(),
      baruDinasStore: useBaruDinasStore(),
      tidakSesuaiStore: useTidakSesuaiStore(),
      tervalidasiDinasStore: useTervalidasiDinasStore(),
      realisasiDinasStore: useRealisasiDinasStore(),

      //BPP
      useDashboardBPPStore: useDashboardBPPStore(),
      baruBPPStore: useBaruBPPStore(),
      
      // profileStore: useProfileStore(),
      // forgetPasswordStore: useForgetPasswordStore(),
      
    },
  };
});
