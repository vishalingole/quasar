<template>
     <q-header elevated >
      <q-toolbar class="bg-teal-5 glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleDrawer"

        />
        <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <div class="q-mr-md">
          <q-select
            square
            outlined
            transition-show="flip-up"
            transition-hide="flip-down"
            v-model="lang"
            :options="langs"
            :label="$t('Language')"
            style="width: 150px"
            dense/>
        </div>
        <q-btn-dropdown
          icon="img:https://cdn.quasar.dev/img/avatar.png"
          flat
        >
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />
            {{this.$store.state.user}}

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <div class="text-subtitle1 q-mt-md q-mb-xs">{{this.$store.state.login.user.username}}</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
              glossy
              @click="logout"
            />
          </div>
        </div>
    </q-btn-dropdown>

      </q-toolbar>
    </q-header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toggleDrawer () {
            this.$store.commit('showcase/updateDrawerState', !this.$store.state.showcase.drawerState)
        },
        logout () {
          this.$store.dispatch("login/logout").then(() => {
          this.$router.push("/login")
          });
        }
    },
    data () {
      return {
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
        mobileData: true,
        bluetooth: false
    }
  },
  watch: {
    lang(lang) {
      console.log(lang)
      this.$i18n.locale = lang.value
      // set quasar's language too!!
      import(`quasar/lang/${lang.value}`).then(language =>
      {this.$q.lang.set(language.default)
      })
    }
  }
}
</script>