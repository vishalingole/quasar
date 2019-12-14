<template>
  <q-page padding>
    <div class="row q-col-gutter-xs mt-2">
      <div
        class="col-xl-6 col-lg-3 col-md-3 col-sm-6 col-xs-12 col-3"
        v-for="(n,index) in results"
        :key="`xs-${index}`"
      >
        <div class="my-content">
          <q-card
            class="my-card"
            @click="$router.push({ name: 'dashboard' })"
          >
            <img
              :src="n.img"
              style="max-height: 120px"
            >

            <q-card-section>
              <div class="text-weight-medium">{{$t(n.title)}}</div>
              <div class="row mb-2 mt-2">
                <div class="text-weight-thin q-mt-sm q-mb-sm col-6">{{$t(n.name)}}</div>
                <div class="col-6 q-mt-sm q-mb-sm text-right">
                  <q-rating
                    size="14px"
                    v-model="n.stars"
                    :max="5"
                    color="red-5"
                  />
                </div>
              </div>

              <div class="row q-mt-sm">
                <div class="text-left col-6">
                  <q-icon
                    name="phone_in_talk"
                    class="q-mr-5"
                    color="grey"
                  /> 9665988376
                </div>
                <div class="text-right col-6">
                  <q-icon
                    name="place"
                    color="grey"
                  /> pune
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>

import { CategoryMixin } from '../mixins/CategoryMixin'

export default {
  name: 'PageIndex',
  mixins: [CategoryMixin],
  data () {
    return {
      categoryList: [],
      category: '',
      results: [
        {
          title: 'Jai Bajrand Tradeing company fdsddr sdfsdhe',
          img: 'https://cdn.quasar.dev/img/avatar6.jpg',
          name: 'Rohit Khatri',
          stars: 5,
          price: '54'
        },
        {
          title: 'JavaScript - The Complete  (Beginner + Advanced)',
          img: 'https://i.udemycdn.com/course/240x135/1436332_1fc3_5.jpg',
          name: 'Maximilian',
          stars: 4,
          price: 360

        },
        {
          title: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
          img: 'https://i.udemycdn.com/course/240x135/1743420_0062.jpg',
          name: 'Daniel jack',
          stars: 5,
          price: 360

        },
        {
          title: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
          img: 'https://i.udemycdn.com/course/240x135/1171102_e839.jpg',
          name: 'David Back',
          stars: 1,
          price: 360

        },
        {
          title: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
          img: 'https://i.udemycdn.com/course/240x135/2201164_831a.jpg',
          name: 'Ashish Sarode',
          stars: 2,
          price: 360

        },
        {
          title: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
          img: 'https://i.udemycdn.com/course/240x135/1501104_967d_11.jpg',
          name: 'Vishal Mene',
          stars: 3,
          price: 360

        },
        {
          title: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
          img: 'https://i.udemycdn.com/course/240x135/886300_3557.jpg',
          name: 'Sunil Talekar',
          stars: 4,
          price: 360

        },
        {          title: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)',
          img: 'https://i.udemycdn.com/course/240x135/1188176_a4be_2.jpg',
          name: 'Sachin Tendulkar',
          stars: 4,
          price: 360
        },

      ],
      // stars : 0,
      success: 'success'
    }
  },
  methods: {

  },
  created () {
    console.log(this.$router)
    this.getCategory().then((result) => {
      this.categoryList = result.data
      this.categoryOptions = result.data
    }).catch((err) => {

    });
    this.$q.notify({
      message: 'Welcome to Quasar. Enjoy..!',
      color: 'green',
      position: 'top',
      icon: 'thumb_up',
    })
  }
}
</script>

<style lang="sass" scoped>
.my-content
  margin: 4px
  border: 1px solid #ccc
.my-content:hover
  border: 1px solid teal
  box-shadow: 2px 2px #ddd
.my-card
  cursor: pointer
.postBtn > div
   margin: 10px 10px 10px 10px
   position: relative
   align: right
   font-family: normal


</style>