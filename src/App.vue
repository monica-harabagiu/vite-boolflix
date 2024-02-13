<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {

    getSearchMovies() {

      store.apiSearchMovies = 'https://api.themoviedb.org/3/search/movie?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query='

      // if (store.searchText) {
      //   store.apiSearchMovies += `${store.searchText}`
      // }

      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=${store.searchText}`)
        .then(res => {
          console.log(res.data)
          store.arraySearchMovies = res.data.results
        })
    }

  },
  // mounted() {
  //   this.getSearchMovies()
  // }
}

</script>


<template>
  <AppHeader @performSearch="getSearchMovies" />
  <AppMain />
</template>


<style lang="scss">
@use './style/general.scss' as *;
</style>
