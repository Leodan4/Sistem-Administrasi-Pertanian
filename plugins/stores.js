import { useGeneralStore } from "~/stores/general";
import { useDashboardSiswaStore } from "~/stores/dashboard_siswa";
import { useFormSiswaStore } from "~/stores/form_siswa";
import { useLoginStore } from "~/stores/login";
import { useForgetPasswordStore } from "~/stores/forget_password";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      generalStore: useGeneralStore(),
      dashboardSiswaStore: useDashboardSiswaStore(),
      formSiswaStore : useFormSiswaStore(),
      loginStore : useLoginStore(),
      forgetPasswordStore : useForgetPasswordStore(),
    },
  };
});
