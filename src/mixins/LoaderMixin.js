import {
    Loading,
    QSpinnerGears,
    QSpinnerPie,
    QSpinnerFacebook,
    QSpinnerHourglass
  } from 'quasar'


export const LoaderMixin = {

    data () {
        return {
        }
    },
    methods: {

        showLoader (options) {
            Loading.show(options)
            setTimeout(() => {
                Loading.hide()
            }, 3000)
        },

        hideLoader () {
            Loading.hide()
        }

    },
    created () {
        this.showLoader({
            spinner: QSpinnerGears,
            spinnerColor: 'black',
            spinnerSize: 100,
            message: 'Some important process is in progress. Hang on...',
            messageColor: 'black',
            backgroundColor: 'yellow'
        })
    }

}