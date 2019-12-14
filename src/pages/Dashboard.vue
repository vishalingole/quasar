<template>
  <q-page padding>
    <div class="q-pa-md">
      <div
        class="q-mb-md"
        style="border: 1px solid #ccc; width: 100%"
      >
        <div class="row q-col-gutter-xs">
          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="my-content">
              <q-select
                outlined
                square
                v-model="category"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="categoryList"
                @filter="filterCategory"
                label="Dropdown"
                option-label="name"
                option-value="id"
              >
                <template v-slot:prepend>
                  <q-icon
                    name="place"
                    color="green-2"
                  />
                </template>
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="my-content">
              <q-select
                outlined
                square
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
                <template v-slot:prepend>
                  <q-icon
                    name="place"
                    color="green-2"
                  />
                </template>
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="my-content">
              <q-select
                outlined
                square
                v-model="model"
                :options="options"
                label="Location"
                color="green-4"
                clearable
                options-selected-class="text-deep-orange"
              >
                <template v-slot:option="scope">
                  <q-item
                    v-bind="scope.itemProps"
                    v-on="scope.itemEvents"
                  >
                    <q-item-section avatar>
                      <q-icon :name="scope.opt.icon" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label v-html="scope.opt.label" />
                      <q-item-label caption>{{ scope.opt.description }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-6">
            <div style="margin-top:15px">
              <q-btn
                outline
                size="md"
                color="teal-4"
              >Search</q-btn>
            </div>
          </div>
        </div>
      </div>
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
            <q-item-label caption><b>Neha Bobde</b></q-item-label>
            <q-item-label class="text-orange">Rs: 60/Kg</q-item-label>
            <q-item-label caption>2 mssin ago</q-item-label>
            <q-item-label caption>
              <q-icon name="place"></q-icon> Pune
            </q-item-label>
            <q-item-label style="margin-top:10px">
              <q-btn
                outline
                color="green"
                size="sm"
                @click="$router.push({ name: 'detail'})"
              >View</q-btn>
            </q-item-label>

          </q-item-section>
        </q-item>
        <!-- <q-separator spaced inset /> -->
        <q-item class="post">
          <q-item-section
            top
            thumbnail
            class="q-ml-none"
          >
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-item-section>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-item-label
              caption
              class="text-black"
            >Voted!</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-separator spaced inset /> -->
        <q-item class="post">
          <q-item-section
            top
            thumbnail
            class="q-ml-none"
          >
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-item-section>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-badge
              color="teal"
              label="10k"
            />
          </q-item-section>
        </q-item>
        <!-- <q-separator spaced inset /> -->
        <q-item class="post">
          <q-item-section
            top
            thumbnail
            class="q-ml-none"
          >
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-item-section>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-item-label caption>2 min ago</q-item-label>
            <div class="text-orange">
              <q-icon name="star" />
              <q-icon name="star" />
              <q-icon name="star" />
            </div>
          </q-item-section>
        </q-item>
        <!-- <q-separator spaced inset /> -->
        <q-item class="post">
          <q-item-section
            top
            thumbnail
            class="q-ml-none"
          >
            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
          </q-item-section>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-item-label caption>meta</q-item-label>
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