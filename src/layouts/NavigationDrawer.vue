<template>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="inset-shadow"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable :to="item.link" v-for="(item, index) in options" :key="index">
          <q-item-section avatar>
            <q-icon :name="item.logo" color="teal-5"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.title}}</q-item-label>
            <q-item-label caption>{{item.description}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>

<script>
export default {
    props: {
        leftDrawerOpen: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        status () {
            return this.isOpen
        }
    },
    data () {
      return {
        options: [
          {
            link: '',
            title: 'Docs',
            logo: 'school',
            description: 'quasar.dev'
          },
          {
            link: '',
            title: 'Github',
            logo: 'code',
            description: 'github.com/quasarframework'
          },
          {
            link: '',
            title: 'Discord Chat Channel',
            logo: 'chat',
            description: 'chat.quasar.dev'
          },
          {
            link: '',
            title: 'Forum',
            logo: 'record_voice_over',
            description: 'forum.quasar.dev'
          },
          {
            link: '',
            title: 'Twitter',
            logo: 'rss_feed',
            description: '@quasarfreamework'
          },
          {
            link: '',
            title: 'Facebook',
            logo: 'public',
            description: '@quasarfreamework'
          },
          {
            link: '/dashboard',
            title: 'Dashboard',
            logo: 'dashboard',
            description: '@quasarfreamework'
          }
        ]
      }
    }
}
</script>