<template>
    <div class="card p-3">
        <figure>
            <img :src="`https://image.tmdb.org/t/p/w185/${propsImg}`" alt="">
        </figure>
        <h2>{{ propsTitle }}</h2>
        <h3>{{ propsOriginalTitle }}</h3>
        <span :class="`lang-icon lang-icon-${propsLang}`"></span>
        <span>
            <font-awesome-icon icon="fa-solid fa-star" 
            v-for="(element, index) in Math.ceil(propsVote / 2)" 
            :key="index" />
            <font-awesome-icon icon="fa-regular fa-star" 
            v-for="(element, index) in (5 - Math.ceil(propsVote / 2))"
            :key="index" />
        </span>
    </div>
</template>

<script>
export default {
    name: 'SingleMovie',
    props: {
        propsTitle: String,
        propsOriginalTitle: String,
        propsLang: String,
        propsVote: Number,
        propsImg: String
    }
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.card {

    flex-basis: calc(100% / 6 - 10px + (10px / 6));

    .stella {
        background-color: red;
        height: 5px;
        width: 5px;
    }
}
</style>