import { useGeneralStore } from "~/stores/general";
import { useDashboardSiswaStore } from "~/stores/dashboard_siswa";
import { useFormSiswaStore } from "~/stores/form_siswa";
import { useFormGuruStore } from "~/stores/form_guru";
import { useLoginStore } from "~/stores/login";
import { useForgetPasswordStore } from "~/stores/forget_password";
import { useProfileStore } from "~/stores/profile";



export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      generalStore: useGeneralStore(),
      dashboardSiswaStore: useDashboardSiswaStore(),
      formSiswaStore : useFormSiswaStore(),
      loginStore : useLoginStore(),
      forgetPasswordStore : useForgetPasswordStore(),
      formSiswaStore: useFormSiswaStore(),
      formGuruStore : useFormGuruStore(),
      loginStore: useLoginStore(),
      profileStore: useProfileStore(),
    },
  };
});
