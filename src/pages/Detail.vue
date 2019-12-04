<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-8">
        <div
          class="my-content"
          style="max-height: 500px"
        >
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide
              :name="1"
              img-src="https://drive.google.com/uc?export=view&id=1ZF-bfGnjDyWff9jOvmBvvSQHE31sMc9x"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://drive.google.com/uc?export=view&id=185R8re8byVIx49pyBOHQiBkC7yGUdM_e"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://drive.google.com/uc?export=view&id=1b5NJtsIX1mvak5DZSelYcyjBP8DhG-ae"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://drive.google.com/uc?export=view&id=1Spn09wuAUzlhF-36ApDCjbSghOk2dKXw"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://cdn.quasar.dev/img/quasar.jpg"
            />

          </q-carousel>
        </div>
        <div
          class="my-content q-mt-md"
          style="min-height: 200px;"
        >
          <div class="q-mb-md text-h6">Details</div>
          <div class="row q-col-gutter-xs">
            <div class="col-sm-6 col-md-3">
              <div class="details">Brand</div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="details">TAFE Tractors</div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="details">
                KM driven
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="details">
                15,460 km
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="details">Brand</div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="details">TAFE Tractors</div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="details">
                Engine
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="details">
                15,460 km
              </div>
            </div>
            <!-- <div class="col-3" v-for="n in 8" :key="`xs-${n}`">
                        <div class="my-content">&nbsp;</div>
                    </div> -->
          </div>
          <q-separator spaced />
          <div class="q-mb-md text-h6">Description</div>
          <div>
            2013 Swaraj Tractor 855
          </div>
        </div>
      </div>
      <div class="col-4">
        <div
          class="my-content q-mb-sm"
          style="height: 150px"
        >
          <div class="text-h6"> $ 40000 </div>
        </div>
        <div
          class="my-content q-mb-sm"
          style="min-height: 150px"
        >
          <div class="text-bold q-mb-md">{{$t('Seller Information')}}</div>
          <div class="row">
            <div class="text-left col-md-4">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </div>
            <div class="col-md-8">
              <div class="text-bold">Vishal Ingole</div>
              <span class="text-italic">Farmer</span>
            </div>

          </div>
          <div class="row q-pt-sm">
            <div class="col-md-6 col-sm-12 text-right ">
              <q-icon
                name="place"
                size="sm"
              /> Pune
            </div>
            <div class="col-md-6 col-sm-12 text-right">
              <q-btn
                outline
                size="sm"
                color="teal"
              >{{$t('Call to Seller') }}</q-btn>
            </div>
          </div>
        </div>
        <div
          class="my-content q-mb-sm"
          style="height: 250px"
        >&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  border: 1px solid rgba(86,61,124,.2)
.details
  padding: 10px 15px
</style>