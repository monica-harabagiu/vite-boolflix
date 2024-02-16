<template>
    <div class="card" >

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

    <!-- <div class="trailer-card" :class="store.activeVideoCard ? 'active' : 'inactive'">
        <font-awesome-icon icon="fa-solid fa-xmark" @click="$emit('closeTrailer')" />
        <div class="trailer-box">
            <iframe type="text/html" :src="`https://www.youtube.com/embed/${store.videoKey}?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3`" frameborder="0">

            </iframe>
        </div>
    </div> -->
</template>

<script>
import { store } from '../store'

export default {
    name: 'SingleMovie',
    props: {
        propsTitle: String,
        propsOriginalTitle: String,
        propsLang: String,
        propsVote: Number,
        propsImg: String,
        propsType: String,
        propsId: Number
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.card {

    flex-basis: calc(100% / 6 - 20px + (20px / 6));
    border: 0;
    // margin-bottom: 20px;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    cursor: pointer;

    &:hover img {

        opacity: .2;
    }

    &:hover .media-info {

        display: flex;
        flex-direction: column;
    }

    &:hover .trailer-card {

        display: block
    }

    figure {

        width: 100%;
        background-color: black;
        margin: 0;

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

// .trailer-card {

//     background-color: black;
//     opacity: .5;
//     width: 100%;
//     height: 100vh;
//     border: 1px solid red;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 999;
//     justify-content: center;
//     align-items: center;

//     .fa-xmark {

//         position: absolute;
//         top: 20px;
//         right: 20px;
//         font-size: 2rem;
//         cursor: pointer;
//     }

//     .trailer-box {
        
//         width: 1200px;
//         height: 800px;

//         iframe {
//             width: 100%;
//             height: 100%;
//         }
//     }
// }

// .active {
//     display: flex;
// }

// .inactive {
//     display: none;
// }
</style>