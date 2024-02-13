import { reactive } from "vue";

export const store = reactive({
    arraySearch: [],
    apiSearchMulti: 'https://api.themoviedb.org/3/search/multi?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=',
    searchText: ''
})