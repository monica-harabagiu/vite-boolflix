<template>
    <header class="py-4">

        <div class="row mx-4 align-items-center ">

            <div class="col-8">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search"
                        v-model="store.searchText" @input="$emit('performSearch')" />
                    <!-- <button  class="btn" type="submit"><font-awesome-icon
                            icon="fa-solid fa-magnifying-glass" /></button> -->
                </form>

            </div>


            <div class="col-4 user d-flex align-items-center justify-content-end ">
                <span class="fw-bold">Monica</span>
                <figure>
                    <img src="https://picsum.photos/50" alt="">
                </figure>
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </div>
        </div>

    </header>
</template>

<script>
import { store } from '../store'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

header {

    background-color: $header-bg-color;
    position: fixed;
    left: $sidebar-width;
    right: 0;
    z-index: 99;

    .form-control {

        background-color: $search-bg-color;
        border: 0;
    }

    figure {

        width: 40px;
        height: 40px;
        margin: 0 20px;
        border-radius: 50%;
        overflow: hidden;
    }
}
</style>
