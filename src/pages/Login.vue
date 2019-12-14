<template>
  <div class="row">
    <img
      src="~assets/home.jpg"
      height="650px"
      width="100%"
    />
    <!-- <div class="col-0 col-md-8 col-sm-6 col-lg-9 col-xl-8 col-xs-0 fullscreen">

    </div> -->
    <div
      class="col-12 col-md-4 col-sm-6 col-lg-3 col-xl-4 col-xs-12 absolute-right"
      style="opacity: 0.8;"
    >
      <q-card
        square
        bordered
        class="q-pa-lg shadow-1"
        style="height:100%; opicity: 0.5"
      >
        <q-card-section class="text-center">
          <q-img
            src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
            style="height: 100px; max-width: 100px;"
          />
          <h4 class="text-h5 text-center">{{ $t("Welcome To Shetkari") }}</h4>
          <q-form class="q-gutter-md login">
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
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="md"
            class="full-width text-white"
            :label="$t('Login')"
            @click="login"
            outline
          />
        </q-card-actions>
        <q-separator
          spaced
          color="grey-6"
          class="q-mt-sm"
        />
        <q-card-section class="text-center q-pa-none">
          <div class="row q-mt-lg">
            <div class="col-md-6 col-sm-6 col-6 q-mt-lg text-grey-6 text-bold">
              Can We Help?

            </div>
            <div class="col-md-6 col-sm-6 col-6 text-left text-green">
              <div
                class="green"
                @click="$router.push('/register')"
              >
                Register New Account
              </div>
              <div
                class="q-mt-sm"
                @click="$router.push('/register')"
              >
                Forgot My Password
              </div>

              <div class="q-mt-md">
                <q-select
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  v-model="lang"
                  :options="langs"
                  style="width: 150px;"
                  option-label="label"
                  option-value="value"
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
          label: 'Hindi',
          value: 'hn'
        },
        {
          label: 'Marathi',
          value: 'mr'
        }
      ],
      lang: this.$i18n.locale,
    };
  },
  methods: {
    async login () {
      this.showLoader();

      try {
        await this.$store.dispatch("login/login", {
          email: this.email,
          password: this.password
        }).then(() => {
          this.hideLoader();
          this.$router.push("/");
        })
      } catch (e) {
        this.error = e
        console.log(e.status)
        this.hideLoader();

        this.$q.notify({
          color: 'negative',
          message: 'Woah! Danger! You are getting good at this!',
          icon: 'report_problem',
          position: 'top',

        })
      }



      // this.$store
      //   .dispatch("login/login", {
      //     email: this.email,
      //     password: this.password
      //   })
      //   .then(() => {
      //     this.hideLoader();
      //     this.$router.push("/");
      //   });
    }
  },
  watch: {
    lang (lang) {
      console.log(lang)
      this.$i18n.locale = lang.value
      // set quasar's language too!!
      import(`quasar/lang/${lang.value}`).then(language => {        this.$q.lang.set(language.default)
      })
    }
  }
};
</script>

<style scoped lang="scss">
.login-bg {
  background: url("~assets/home.jpg") no-repeat center center fixed;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
