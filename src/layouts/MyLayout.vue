<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <NavigationDrawer v-if="!$route.meta.allowAnonymous"/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from './Header'
import NavigationDrawer from './NavigationDrawer'

export default {
  name: 'MyLayout',
  components: {
    Header,
    NavigationDrawer
  },
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  methods: {

  }
}
</script>
