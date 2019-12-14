<template>
  <div class="row">
    <div class="col col-md-6 col-sm-6 col-xs-6 col-lg-6">
      <div class="classWithPad">
        <q-select
          square
          outlined
          v-model="qualityType"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="quality"
          label="Quality"
        >
        </q-select>
      </div>
    </div>
    <div class="col col-md-6 col-sm-6 col-xs-6 col-lg-6">
      <div class="classWithPad">
        <q-input
          square
          outlined
          type="number"
          v-model.number="quantity"
          label="Quantity"
        />
      </div>
    </div>
    <div class="col col-md-6 col-sm-6 col-xs-6 col-lg-6">
      <div class="classWithPad">
        <q-select
          square
          outlined
          v-model="unit"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="unitList"
          label="Measurement Unit"
        >
        </q-select>
      </div>
    </div>
    <div class="col col-md-6 col-sm-6 col-xs-6 col-lg-6">
      <div class="classWithPad">
        <q-input
          square
          outlined
          v-model="price"
          type="number"
          prefix="$"
        >
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
          </template>
        </q-input>
      </div>
    </div>

    {{item}}
  </div>
</template>

<script>

const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

const qualityOptions = [
  'Very Good', 'Good', 'Medium', 'Poor'
]

const unitOptions = [
  'Kilogram', 'Gram', 'Tun', 'Quintal', 'Dozen', 'Carrot'
]

export default {
  name: 'Vegetables',
  props: {
    item: Object
  },
  data () {
    return {
      unitList: unitOptions,
      quality: qualityOptions,
      unit: '',
      price: null,
      quality: qualityOptions,
      qualityType: '',
      quantity: 0,
      unitList: unitOptions,
      unit: '',
    }
  },
  created () {
  }
}
</script>

<style lang="sass">
.classWithPad
 margin: 4px

</style>