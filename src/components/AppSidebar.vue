<template>
    <aside>

        <div class="d-flex justify-content-center">
            <figure>
                <img src="../assets/img/boolflix-logo.png" alt="">
            </figure>
        </div>

        <div class="menu mt-5">
            <h4>Menu</h4>
            <ul class="d-flex flex-column gap-3 mt-4 ">
                <li 
                v-for="(element, index) in store.arrMenu" 
                :key="index"
                :style="(element.status == 'disabled') ? {'pointer-events': 'none'} : {'pointer-events': 'all'} "
                :class="(store.currentMediaType == element.type) ? 'active' : '' "
                @click="(store.currentMediaType = element.type), $emit('changeMediaType')">

                    <font-awesome-icon :icon="`fa-solid ${element.icon_class}`" />
                    <span>{{ element.name }}</span>
                </li>
            </ul>

        </div>

        <div class="menu mt-5">
            <h4>Settings</h4>
            <ul class="d-flex flex-column gap-3 mt-4 ">
                <li 
                v-for="(element, index) in store.arrMenuSettings" 
                :key="index"
                :style="(element.status == 'disabled') ? {'pointer-events': 'none'} : {'pointer-events': 'all'} ">
                    <font-awesome-icon :icon="`fa-solid ${element.icon_class}`" />
                    <span>{{ element.name }}</span>
                </li>
                <!-- <li>
                    <font-awesome-icon icon="fa-solid fa-clapperboard" />
                    <span>TV Shows</span>
                </li>
                <li>
                    <font-awesome-icon icon="fa-solid fa-film" />
                    <span>Movies</span>
                </li> -->
            </ul>

        </div>

    </aside>
</template>

<script>
import { store } from '../store'

export default {
    name: 'AppSidebar',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

aside {
    height: 100%;
    width: $sidebar-width;
    background-color: $sidebar-bg-color;
    padding: 30px;

    figure {

        width: 200px;
    }

    .menu {

        h4 {

            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 700;
        }

        ul {

            li {

                list-style: none;
                margin-left: -2rem;
                color: grey;

                &:hover {

                    color: white;
                    cursor: pointer;
                }

                .fa-house,
                .fa-clapperboard,
                .fa-film {

                    width: 15px;
                }

                span {

                    margin-left: 20px;
                    font-size: .9rem;
                }
            }

            .active {
                    color: white;
            }
        }
    }
}
</style>