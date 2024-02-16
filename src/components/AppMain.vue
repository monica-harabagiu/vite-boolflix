<template>
    <main>
        <div class="row mx-4 ">

            <div class="col cards d-flex flex-wrap">
                <SingleMovie v-for="(element, index) in store.arraySearch" :key="index"
                    :propsTitle="element.title || element.name"
                    :propsOriginalTitle="element.original_title || element.original_name"
                    :propsLang="element.original_language" :propsVote="element.vote_average" :propsImg="element.poster_path"
                    @click="getTrailer(element.media_type, element.id, (element.title || element.name), element.original_language, element.vote_average, element.overview)" />

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
                            <p>{{ store.mediaInfos.overview }}</p>
                            <p>Cast: </p>
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
        getTrailer(media, id, title, language, vote, overview) {

            store.videoKey = ''

            store.mediaInfos = { title: title, language: language, vote: vote, overview: overview }
            console.log(media, id, title, language, vote, overview)

            store.activeVideoCard = true

            if (media == undefined && store.currentMediaType == 'tv') {
                media = 'tv'
            } else if ((media == undefined && store.currentMediaType == 'movie')) {
                media = 'movie'
            }

            console.log(media, id, title, language, vote, overview)

            axios
                .get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee`)
                .then(res => {

                    res.data.results.forEach(link => {

                        if (link.site == 'YouTube' && (link.type == 'Trailer' || link.type == 'Teaser')) {
                            store.videoKey = link.key
                            console.log(link.key)
                            return
                        }

                    })

                })
        }
    },
    // closeVideoCard() {

    //     store.activeVideoCard = false
    //     store.mediaInfos = {}
    //     store.videoKey = ''
    // },
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
        // position: relative;


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