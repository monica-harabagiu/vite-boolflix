<template>
    <main>
        <div class="row mx-4 ">

            <div class="row cards d-flex flex-wrap">
                <SingleMovie v-for="(element, index) in store.arraySearch" :key="index"
                    :propsTitle="element.title || element.name"
                    :propsOriginalTitle="element.original_title || element.original_name"
                    :propsLang="element.original_language" :propsVote="element.vote_average"
                    :propsImg="element.poster_path" />
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


<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {

    height: 100vh;
    overflow: scroll;
    padding-top: 100px;

    .cards {
        padding-block: 50px;
        gap: 20px;
    }


}
</style>