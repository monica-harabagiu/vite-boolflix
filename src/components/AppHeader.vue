<template>
    <header>
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <form class="d-flex" role="search">
                    <input 
                    class="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    v-model="store.searchText"/>
                    <button 
                    @click.prevent="$emit('performSearch')" 
                    class="btn btn-outline-success"
                    type="submit">Search</button>
                </form>
            </div>
        </nav>
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

<style lang="scss" scoped></style>
