<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppSidebar from './components/AppSidebar.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain,
    AppSidebar
  },
  data() {
    return {
      store
    }
  },
  methods: {

    getSearch() {

      // store.apiSearchMulti = 'https://api.themoviedb.org/3/search/multi?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query='

      store.arraySearch = []

      if (store.searchText == '') {
        axios
          .get(`https://api.themoviedb.org/3/trending/${store.currentMediaType}/week?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=`)
          .then(res => {
            console.log(res.data)
            store.arraySearch = res.data.results
          })
      } else if (store.searchText !== '' && store.currentMediaType == 'all') {
        axios
          .get(`https://api.themoviedb.org/3/search/multi?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=${store.searchText}`)
          .then(res => {
            console.log(res.data)
            store.arraySearch = res.data.results
          })
      } else {
        axios
          .get(`https://api.themoviedb.org/3/search/${store.currentMediaType}?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=${store.searchText}`)
          .then(res => {
            console.log(res.data)
            store.arraySearch = res.data.results
          })
      }

      console.log(store.currentMediaType)
    },

    // getTrailer(media, id) {

    //   axios
    //     .get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee`)
    //     .then(res => {

    //       res.data.results.forEach(link => {

    //         if (link.site == 'YouTube' && link.type == 'Teaser' && link.official) {
    //           store.videoKey = link.key
    //           console.log(videoKey)
    //           return
    //         }

    //       })
          
    //     })
    // }

  },
  mounted() {
    this.getSearch()
  }
}

</script>


<template>
  <div class="d-flex app-height">

    <AppSidebar @changeMediaType="getSearch" />

    <div class="right-content">
      <AppHeader @performSearch="getSearch" />
      <AppMain/>
    </div>

  </div>
</template>


<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as *;


.app-height {

  height: 100vh;

  .right-content {

    width: calc(100% - $sidebar-width);
  }
}
</style>
