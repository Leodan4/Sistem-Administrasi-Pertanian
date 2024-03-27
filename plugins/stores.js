import { useGeneralStore } from "~/stores/general";
import { useDashboardSiswaStore } from "~/stores/dashboard_siswa";
import { useFormSiswaStore } from "~/stores/form_siswa";
import { useFormGuruStore } from "~/stores/form_guru";
import { useFormKurirStore } from "~/stores/form_kurir";
import { useLoginStore } from "~/stores/login";
import { useForgetPasswordStore } from "~/stores/forget_password";
import { useProfileStore } from "~/stores/profile";
import { useDashboardKaryawanStore } from "~/stores/dashboard_karyawan";
import { useMainDashboard } from "~/stores/main_dashboard";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      generalStore: useGeneralStore(),
      mainDashboard: useMainDashboard(),
      dashboardSiswaStore: useDashboardSiswaStore(),
      formSiswaStore: useFormSiswaStore(),
      loginStore: useLoginStore(),
      forgetPasswordStore: useForgetPasswordStore(),
      formSiswaStore: useFormSiswaStore(),
      formGuruStore: useFormGuruStore(),
      formKurirStore: useFormKurirStore(),
      loginStore: useLoginStore(),
      profileStore: useProfileStore(),
      dashboardKaryawanStore: useDashboardKaryawanStore(),
      dashboardLayananStore: useDashboardLayananStore(),
    },
  };
});
