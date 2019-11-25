import Vue from 'vue'
import Vuex from 'vuex'

import showcase from './showcase'
import login from './login'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      showcase,
      login
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  // if (process.env.DEV && module.hot) {
    // module.hot.accept(['./showcase'], () => {
    //   const newShowcase = require('./showcase').default
    //   Store.hotUpdate({ modules: { showcase: newShowcase } })
    // })
  // }

  return Store
}
