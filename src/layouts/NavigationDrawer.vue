<template>
  <q-drawer
    v-model="drawerState"
    show-if-above
    bordered
    content-class="inset-shadow bg-white-7 text-green-9"
  >
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item
        clickable
        :to="item.link"
        v-for="(item, index) in options"
        :key="index"
      >
        <q-item-section avatar>
          <q-icon
            :name="item.logo"
            color="green-9"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.title}}</q-item-label>
          <!-- <q-item-label caption>{{item.description}}</q-item-label> -->
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  props: {

  },
  computed: {
    drawerState: {
      get () {
        return this.$store.state.showcase.drawerState
      },
      set (val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    }
  },
  data () {
    return {
      options: [
        {
          link: '/',
          title: 'Home',
          logo: 'home',
          description: 'quasar.dev'
        },
        {
          link: 'search',
          title: 'Search',
          logo: 'search',
          description: 'github.com/quasarframework'
        },
        {
          link: 'mypost',
          title: 'My Post',
          logo: 'list',
          description: 'chat.quasar.dev'
        },
        {
          link: 'retailer',
          title: 'Retailer',
          logo: 'record_voice_over',
          description: 'forum.quasar.dev'
        },
        {
          link: 'whole-saler',
          title: 'Wholesaler',
          logo: 'rss_feed',
          description: '@quasarfreamework'
        },
        {
          link: 'about',
          title: 'About',
          logo: 'public',
          description: '@quasarfreamework'
        },
        {
          link: 'contact-us',
          title: 'Contact Us',
          logo: 'dashboard',
          description: '@quasarfreamework'
        },
        {
          link: 'privacy',
          title: 'Privacy',
          logo: 'lock',
          description: '@quasarfreamework'
        },
        {
          link: 'terms',
          title: 'Terms',
          logo: 'mdi-alert-circle-outline',
          description: '@quasarfreamework'
        }
      ]
    }
  }
}
</script>