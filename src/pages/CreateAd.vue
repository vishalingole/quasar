<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      done-color="deep-orange"
      active-color="purple"
      inactive-color="secondary"
      vertical
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
      >
        <div class="row">

          <div class="col col-md-6 col-sm-6 col-xs-6 col-lg-6">
            <div class="classWithPad">
              <q-select
                square
                outlined
                v-model="category"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="categoryList"
                @filter="filterFn"
                option-value="id"
                option-label="name"
                label="Category"
              >
              </q-select>
            </div>
          </div>
          <div class="col col-md-6 col-sm-6 col-xs-6 col-lg-6">
            <div class="classWithPad">
              <q-select
                square
                outlined
                v-model="item"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="itemList"
                @filter="filterFn"
                label="Item"
                option-label="name"
                option-value="id"
              >
              </q-select>
            </div>
          </div>

        </div>
        <div>
          <Equiment
            v-show="category.id == 5"
            :item="item"
          />
          <Vegetables v-show="category.id == 3" />
        </div>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            glossy
            color="green"
            :label="step === 3 ? 'Finish' : 'Continue'"
            outline
            size="sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-uploader
          url="http://localhost:4444/upload"
          label="Batch upload"
          multiple
          batch
          style="max-width: 300px"
        />
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            glossy
            color="green"
            :label="step === 3 ? 'Finish' : 'Continue'"
            size="sm"
            outline
          />
          <q-btn
            v-if="step > 1"
            color="green"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
            size="sm"
            outline
            glossy
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Create an ad"
        icon="add_comment"
      >
        Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="submit()"
            glossy
            color="green"
            label="Finish"
            outline
            size="sm"
          />
          <q-btn
            v-if="step > 1"
            color="green"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
            size="sm"
            outline
            glossy
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>

  </div>
</template>

<style lang="sass" scoped>
.classWithPad
 margin: 4px
.classWithPadEquipment
 margin: 4px

</style>

<script>

import { CategoryMixin } from '../mixins/CategoryMixin'
import Equiment from './FarmEquipment'
import Vegetables from './Vegetables'

const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

const qualityOptions = [
  'Very Good', 'Good', 'Medium', 'Poor'
]

const unitOptions = [
  'Kilogram', 'Gram', 'Tun'
]
export default {
  mixins: [CategoryMixin],
  components: {
    Equiment,
    Vegetables
  },
  data () {
    return {
      model: null,
      options: stringOptions,
      step: 1,
      text: '',
      categoryList: [],
      category: '',
      item: {},
      itemList: [],
    }
  },

  methods: {
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterQuality (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.quality = qualityOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterUnit (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.unitList = unitOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    submit () {
      console.log(this.category.name)
      console.log(this.item.name)
      console.log(this.$children.options)
      console.log(this.$children)
    }
  },
  created () {
    this.getCategory().then((result) => {
      this.categoryList = result.data
      this.categoryOptions = result.data
    }).catch((err) => {

    });
  },
  watch: {
    category () {
      this.item = ''
      console.log(this.category)
      this.getSubCategory(this.category.id).then((result) => {
        this.itemList = result.data
        this.itemOptions = result.data
      }).catch((err) => {

      });
    }
  }
}</script>