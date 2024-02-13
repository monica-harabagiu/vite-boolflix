<template>
    <main>
        <div class="container">
            <div class="cards">
                <SingleMovie
                v-for="(element, index) in store.arraySearchMovies"
                :key="index"
                :propsTitle="element.title"
                :propsOriginalTitle="element.original_title"
                :propsLang="element.original_language"
                :propsVote="element.vote_average" />
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store'
import SingleMovie from './SingleMovie.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        SingleMovie
    },
}
</script>

<style lang="scss" scoped></style>