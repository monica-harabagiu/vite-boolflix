<template>
    <div class="card">
        <h2>{{ propsTitle }}</h2>
        <h3>{{ propsOriginalTitle }}</h3>
        <span>{{ propsLang }}</span>
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

<style lang="scss" scoped></style>