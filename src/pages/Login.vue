<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section class="text-center">
              <q-img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" style="height: 150px; max-width: 150px;"/>
              <h4 class="text-h5 text-center">{{$t('Quasar Login')}}</h4>
            <q-form class="q-gutter-md">
              <q-input square clearable v-model="email" type="email" :label="$t('Email')" outlined />
              <q-input square clearable v-model="password" type="password" :label="$t('Password')" outlined/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-green-7" size="md" class="full-width" :label="$t('Login')" outline glossy />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.q-card {
  width: 360px;
}
</style>