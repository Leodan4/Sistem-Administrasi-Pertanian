import { useGeneralStore } from "~/stores/general";
import { useDashboardDinasStore } from "~/stores/dashboardDInas";
import { useFormSiswaStore } from "~/stores/form_siswa";
import { useFormGuruStore } from "~/stores/form_guru";
import { useFormKurirStore } from "~/stores/form_kurir";
import { useLoginStore } from "~/stores/login";
import { useForgetPasswordStore } from "~/stores/forget_password";
import { useProfileStore } from "~/stores/profile";
import { useDashboardBPPStore } from "~/stores/dashboardBPP";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      generalStore: useGeneralStore(),
      useDashboardDinasStore: useDashboardDinasStore(),
      formSiswaStore: useFormSiswaStore(),
      loginStore: useLoginStore(),
      forgetPasswordStore: useForgetPasswordStore(),
      formSiswaStore: useFormSiswaStore(),
      formGuruStore: useFormGuruStore(),
      formKurirStore: useFormKurirStore(),
      loginStore: useLoginStore(),
      profileStore: useProfileStore(),
      useDashboardBPPStore: useDashboardBPPStore(),
    },
  };
});
