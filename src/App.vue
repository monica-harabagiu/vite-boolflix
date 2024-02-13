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

    getSearch() {

      store.apiSearchMulti = 'https://api.themoviedb.org/3/search/multi?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query='

      axios
        .get(`https://api.themoviedb.org/3/search/multi?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=${store.searchText}`)
        .then(res => {
          console.log(res.data)
          store.arraySearch = res.data.results
        })


    }

  },
  mounted() {
    this.getSearch()
  }
}

</script>


<template>
  <AppHeader @performSearch="getSearch" />
  <AppMain />
</template>


<style lang="scss">
@use './style/general.scss' as *;
</style>
