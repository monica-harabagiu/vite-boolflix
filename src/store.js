import { reactive } from "vue";

export const store = reactive({
    apiSearchMovies: 'https://api.themoviedb.org/3/search/movie?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=',
    arraySearchMovies: [],
    searchText: ''
})