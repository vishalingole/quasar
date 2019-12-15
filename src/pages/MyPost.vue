<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-list>
        <q-item class="post">
          <q-item-section
            center
            thumbnail
            class="q-ml-none"
          >
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('Onion with very good condition')}}</q-item-label>
            <q-item-label
              caption
              lines="2"
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label class="text-orange">Rs: 60/Kg</q-item-label>
            <q-item-label caption>2 mssin ago</q-item-label>
            <q-item-label caption>
              <q-icon name="place"></q-icon> Pune
            </q-item-label>
            <q-item-label
              class="row"
              style="margin-top:10px;"
            >
              <q-btn
                class="q-mr-sm"
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >Sold</q-btn>
              <q-btn
                class="q-mr-sm"
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >View</q-btn>
              <q-btn
                class="q-mr-sm"
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >Edit</q-btn>
              <q-btn
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >Delete</q-btn>
            </q-item-label>

          </q-item-section>
        </q-item>
        <q-item class="post">
          <q-item-section
            center
            thumbnail
            class="q-ml-none"
          >
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('Onion')}} {{$t('with very good quality')}}</q-item-label>
            <q-item-label
              caption
              lines="2"
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label class="text-orange">Rs: 60/Kg</q-item-label>
            <q-item-label caption>2 mssin ago</q-item-label>
            <q-item-label caption>
              <q-icon name="place"></q-icon> Pune
            </q-item-label>
            <q-item-label class="row q-mt-sm">
              <q-btn
                class="q-mr-sm"
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >Sold</q-btn>
              <q-btn
                class="q-mr-sm"
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >View</q-btn>
              <q-btn
                class="q-mr-sm"
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >Edit</q-btn>
              <q-btn
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >Delete</q-btn>
            </q-item-label>

          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.my-content
  padding: 5px
</style>

<script>

import { LoaderMixin } from '../mixins/LoaderMixin'
import { CategoryMixin } from '../mixins/CategoryMixin'

export default {

  mixins: [LoaderMixin, CategoryMixin],
  data () {
    return {
      model: null,
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      stringOptions: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      categoryList: [],
      categoryOptions: [],
      category: '',
      item: '',
      itemList: [],
      itemOptions: [],
      options: [
        {
          label: 'Google',
          value: 'Google',
          description: 'Search engine',
          icon: 'mail'
        },
        {
          label: 'Facebook',
          value: 'Facebook',
          description: 'Social media',
          icon: 'bluetooth'
        },
        {
          label: 'Twitter',
          value: 'Twitter',
          description: 'Quick updates',
          icon: 'map'
        },
        {
          label: 'Apple',
          value: 'Apple',
          description: 'iStuff',
          icon: 'golf_course'
        },
        {
          label: 'Oracle',
          value: 'Oracle',
          disable: true,
          description: 'Databases',
          icon: 'casino'
        }
      ]
    }
  },

  methods: {
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = this.stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterCategory (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        // this.categoryList = this.categoryOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
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
      this.getSubCategory(this.category.id).then((result) => {
        this.itemList = result.data
        this.itemOptions = result.data
      }).catch((err) => {

      });
    }
  }
}
</script>


<style scoped lang="sass">

.post
    border: 1px solid #ccc
    padding: 15px 15px 15px 25px
    margin: 5px
    cursor: pointer

.post:hover
    border: 1px solid teal
    box-shadow: 2px 2px #ccc

</style>