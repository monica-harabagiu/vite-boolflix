<template>
    <div class="card p-3">
        <h2>{{ propsTitle }}</h2>
        <h3>{{ propsOriginalTitle }}</h3>
        <span :class="`lang-icon lang-icon-${propsLang}`"></span>
        <span>{{ propsVote }}</span>
    </div>
</template>

<script>
export default {
    name: 'SingleMovie',
    props: {
        propsTitle: String,
        propsOriginalTitle: String,
        propsLang: String,
        propsVote: Number
    }
}
</script>

<style lang="scss" scoped>

@use '../style/general.scss' as *;
.card {

    flex-basis: calc(100% / 6 - 10px + (10px / 6));
}
</style>