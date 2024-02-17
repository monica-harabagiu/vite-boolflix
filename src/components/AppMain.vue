<template>
    <main>
        <div class="row mx-4 ">

            <div class="col cards d-flex flex-wrap">
                <SingleMovie v-for="(element, index) in store.arraySearch" :key="index"
                    :propsTitle="element.title || element.name"
                    :propsOriginalTitle="element.original_title || element.original_name"
                    :propsLang="element.original_language" :propsVote="element.vote_average" :propsImg="element.poster_path"
                    @click="getTrailer(element.media_type, element.id, (element.title || element.name), element.original_language, element.vote_average, element.overview, element.genre_ids)" />

                <div class="trailer-card" :class="store.activeVideoCard ? 'active' : 'inactive'">
                    <font-awesome-icon icon="fa-solid fa-xmark" @click="(store.activeVideoCard = false), (store.mediaInfos = {}),
                        (store.videoKey = '')" />
                    <div class="trailer-box d-flex">

                        <iframe type="text/html"
                            :src="`https://www.youtube.com/embed/${store.videoKey}?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3`"
                            frameborder="0">
                        </iframe>

                        <div class="movie-info p-4">
                            <span :class="`lang-icon lang-icon-${store.mediaInfos.language} mb-2 `"></span>
                            <h2>{{ store.mediaInfos.title }}</h2>
                            <p>
                                <span class="genres" v-for="(element, index) in store.arrGenres" :key="index">{{ element }}
                                    <span v-if="index < store.arrGenres.length - 1">, </span>
                                </span>
                            </p>
                            <p>{{ store.mediaInfos.overview }}</p>
                            <p class="cast">Cast:
                                <span v-for="(element, index) in store.arrCast" :key="index">{{ element.name }}
                                    <span v-if="index < store.arrCast.length - 1">, </span>
                                </span>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import { store } from '../store'
import SingleMovie from './SingleMovie.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    methods: {
        getTrailer(media, id, title, language, vote, overview, genres) {

            store.videoKey = ''
            store.arrGenres = []

            store.mediaInfos = { title: title, language: language, vote: vote, overview: overview, genres: genres }
            console.log(media, id, title, language, vote, overview, genres)


            if (media == 'movie' || store.currentMediaType == 'movie') {

                store.arrGenresMovies.forEach(element => {

                    for (let i = 0; i < genres.length; i++) {
                        const singleMovieGenre = genres[i];

                        if (element.id == singleMovieGenre) {
                            console.log(element.name)
                            store.arrGenres.push(element.name)
                            console.log(store.arrGenres)
                        }
                    }

                })
            } else if (media == 'tv' || store.currentMediaType == 'tv' ) {

                store.arrGenresTv.forEach(element => {

                    for (let i = 0; i < genres.length; i++) {
                        const singleTvGenre = genres[i];

                        if (element.id == singleTvGenre) {
                            console.log(element.name)
                            store.arrGenres.push(element.name)
                        }
                    }

                })
            }


            store.activeVideoCard = true

            if (media == undefined && store.currentMediaType == 'tv') {
                media = 'tv'
            } else if ((media == undefined && store.currentMediaType == 'movie')) {
                media = 'movie'
            }

            axios
                .get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee`)
                .then(res => {

                    res.data.results.some(link => {

                        if (link.site == 'YouTube' && (link.type == 'Trailer' || link.type == 'Teaser')) {
                            store.videoKey = link.key
                            // console.log(link.key)
                            return true
                        }

                    })

                })

            axios
                .get(`https://api.themoviedb.org/3/${media}/${id}/credits?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee`)
                .then(res => {
                    // console.log(res.data.cast)
                    store.arrCast = res.data.cast.slice(0, 5)
                    // console.log(store.arrCast)
                })
        }
    },
    components: {
        SingleMovie
    },
}
</script>


<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {

    height: 100vh;
    overflow: scroll;
    padding-top: 100px;

    .cards {
        padding-block: 50px;
        gap: 20px;

        .trailer-card {

            background-color: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            justify-content: center;
            align-items: center;

            .fa-xmark {

                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 2rem;
                cursor: pointer;
            }

            .trailer-box {

                width: 1200px;
                height: 650px;

                iframe {
                    width: 100%;
                    height: 100%;
                }
            }

            .movie-info {

                width: 400px;
                background-color: black;

                .genres {

                    font-style: italic;
                    font-size: .8rem;
                }

                .cast {

                    color: grey;
                    font-size: .9rem;
                }
            }
        }

        .active {
            display: flex;
        }

        .inactive {
            display: none;
        }
    }




}
</style>