<template>
  <div class="row">
    <div
      class="col col-md-6 col-sm-6 col-xs-6 col-lg-6"
      v-show="item.name == 'Tractor'"
    >
      <div class="classWithPadEquipment">
        <q-select
          square
          outlined
          v-model="company"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="tractorList"
          label="Company"
        >
        </q-select>
      </div>

    </div>
    <div
      class="col col-md-6 col-sm-6 col-xs-6 col-lg-6"
      v-show="item.name == 'Tractor'"
    >
      <div class="classWithPadEquipment">
        <q-input
          v-model="km"
          square
          outlined
          v-model.number="quantity"
          :label="$t('KM Driven')"
        />
        </q-select>
      </div>

    </div>
    <div
      class="col col-md-6 col-sm-6 col-xs-6 col-lg-6"
      v-show="item.name == 'Harvester'"
    >
      <div class="classWithPadEquipment">
        <q-select
          square
          outlined
          v-model="company"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="harvesterList"
          label="Company"
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
export default {
  name: 'Equipment',
  props: ['item']
  ,
  data () {
    return {
      company: '',
      tractorList: ['Mahindra', 'Gujarat', 'Escorts', 'TAFE', 'Sonalika', 'Eicher', 'Escorts', 'John Deere', 'Force', 'Swaraj', 'Standard', 'Captain', 'New Holland', 'Indo Farm', 'Preet', 'Kubota', 'Other'],
      harvesterList: ['John Deere', 'Case International', 'New Holland', 'Massey Ferguson', 'Other'],
      price: ''
    }
  },
  created () {
  }
}
</script>

<style lang="sass">
.classWithPadEquipment
 margin: 4px

</style>