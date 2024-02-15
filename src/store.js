import { reactive } from "vue";

export const store = reactive({
    arraySearch: [],
    apiSearchMulti: 'https://api.themoviedb.org/3/search/multi?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=',
    searchText: '',
    arrMenu: [
        {
            name: 'Home',
            icon_class: 'fa-house',
            type: 'all',
            status: 'active'
        },
        {
            name: 'TV Shows',
            icon_class: 'fa-clapperboard',
            type: 'tv',
            status: 'active'
        },
        {
            name: 'Movies',
            icon_class: 'fa-film',
            type: 'movie',
            status: 'active'
        },
        {
            name: 'Recently Added',
            icon_class: 'fa-clock-rotate-left',
            status: 'disabled'
        },
        {
            name: 'My List',
            icon_class: 'fa-rectangle-list',
            status: 'disabled'
        },
    ],
    arrMenuSettings: [
        {
            name: 'Change Plan',
            icon_class: 'fa-clipboard-check',
            status: 'disabled'
        },
        {
            name: 'FAQ',
            icon_class: 'fa-circle-question',
            status: 'disabled'
        },
        {
            name: 'Help Center',
            icon_class: 'fa-handshake-angle',
            status: 'disabled'
        },
        {
            name: 'Terms of Use',
            icon_class: 'fa-clipboard-list',
            status: 'disabled'
        },
        {
            name: 'Privacy',
            icon_class: 'fa-unlock-keyhole',
            status: 'disabled'
        },
    ],
    currentMediaType: 'all',
    activeVideoCard: false,
    apiVideoTrailers: 'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=',
    arrayTrailers: [],
    videoKey: ''
})