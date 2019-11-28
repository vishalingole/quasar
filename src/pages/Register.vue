<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card
          square
          bordered
          class="q-pa-lg shadow-1 text-white"
          style="background-color:rgba(2,2,2,.8)"
        >
          <q-card-section class="text-center">
            <q-img
              src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
              style="height: 100px; max-width: 100px;"
            />
            <h4 class="text-h5 text-center">{{ $t("Register") }}</h4>
            <q-form class="q-gutter-md">
              <q-input
                square
                clearable
                v-model="email"
                type="email"
                :label="$t('Email')"
                outlined
              />
              <q-input
                square
                clearable
                v-model="password"
                type="password"
                :label="$t('Password')"
                outlined
              />
              <q-input
                square
                clearable
                v-model="confirm_password"
                type="password"
                :label="$t('Confirm Password')"
                outlined
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="light-green-7"
              size="md"
              class="full-width"
              :label="$t('Register')"
              @click="register"
              outline
            />
          </q-card-actions>
          <q-separator
            spaced
            color="grey-9"
          />
          <q-card-section class="text-center q-pa-none ">
            <div class="row q-mt-sm">
              <div class="col-md-6 col-sm-6 col-6 q-mt-md text-grey-6 text-bold">
                Can We Help?
              </div>
              <div class="col-md-6 col-sm-6 col-6 text-left text-teal-4">
                <div
                  class="teal"
                  @click="$router.push('/login')"
                >
                  Log In
                </div>
                <div class="q-mt-sm">
                  <q-select
                    transition-show="flip-up"
                    transition-hide="flip-down"
                    v-model="lang"
                    :options="langs"
                    style="width: 150px"
                    :option-label="$t('label')"
                    option-value="value"
                    label="Language"
                    dense
                    outlined
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { LoaderMixin } from "../mixins/LoaderMixin";

export default {
  name: "Login",
  mixins: [LoaderMixin],
  data () {
    return {
      email: "",
      password: "",
      confirm_password: "",
      langs: [
        {
          label: 'German',
          value: 'de'
        },
        {
          label: 'English',
          value: 'en-us'
        },
        {
          label: 'हिन्दी',
          value: 'hn'
        },
        {
          label: 'मराठी',
          value: 'mr'
        }
      ],
      lang: this.$i18n.locale,
    };
  },
  methods: {
    register () {
      this.showLoader();
      this.$store
        .dispatch("login/register", {
          email: this.email,
          password: this.password,
          username: "Vishal Ramdas Ingole",
          isActive: true,
          role: "Admin",
          deviceId: "",
          fcmToken: "",
          device: ""
        })
        .then(() => {
          this.hideLoader();
          this.$router.push("/");
        });
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang.value
      // set quasar's language too!!
      import(`quasar/lang/${lang.value}`).then(language => {        this.$q.lang.set(language.default)
      })
    }
  }
};
</script>

<style scoped>
.q-card {
  width: 450px;
}
</style>
