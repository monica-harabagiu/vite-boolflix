<template>
    <div class="card">

        <figure>
            <img v-if="propsImg == null" src="../assets/img/null-cover.jpg" alt="">
            <img v-else :src="`https://image.tmdb.org/t/p/w342/${propsImg}`" :alt="propsTitle">
        </figure>

        <div class="media-info p-3">
            <span :class="`lang-icon lang-icon-${propsLang} mb-2 `"></span>
            <h2>{{ propsTitle }}</h2>
            <h3>{{ propsOriginalTitle }}</h3>
            <span>
                <font-awesome-icon icon="fa-solid fa-star" v-for="(element, index) in Math.ceil(propsVote / 2)"
                    :key="index" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="(element, index) in (5 - Math.ceil(propsVote / 2))"
                    :key="index" />
            </span>
        </div>

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
    border: 0;
    margin-bottom: 20px;
    position: relative;

    &:hover img {

        opacity: .3;
    }

    &:hover .media-info {

        display: flex;
        flex-direction: column;
    }

    figure {

        width: 100%;
        background-color: black;

        img {

            object-fit: cover;
            aspect-ratio: 2/3;

        }

    }

    .media-info {

        position: absolute;
        bottom: 10px;
        display: none;

        h2 {

            font-size: 1.3rem;
        }

        h3 {

            font-size: .8rem;
        }

        .fa-star {

            width: 15px;
        }

    }
}
</style>