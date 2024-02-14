<template>
    <aside>

    </aside>
</template>

<script>
export default {
    name: 'AppSidebar'
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

aside {
    height: 100%;
    width: $sidebar-width;
    background-color: $sidebar-bg-color;
}
</style>