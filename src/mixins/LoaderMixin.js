import {
    Loading,
    QSpinnerGears,
    QSpinnerPie,
    QSpinnerFacebook,
    QSpinnerHourglass
  } from 'quasar'


const LOADER = {
    spinner: QSpinnerGears,
    spinnerColor: 'black',
    spinnerSize: 100,
    message: 'Some important process is in progress. Hang on...',
    messageColor: 'black',
    backgroundColor: 'yellow'
}

export const LoaderMixin = {

    data () {
        return {
        }
    },
    methods: {

        showLoader () {
            Loading.show(LOADER)
            setTimeout(() => {
                Loading.hide()
            }, 3000)
        },

        hideLoader () {
            Loading.hide()
        }

    },
    created () {
        // this.showLoader()
    }

}