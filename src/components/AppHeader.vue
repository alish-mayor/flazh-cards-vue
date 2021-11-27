<template>
    <div class="header">
        <nav>
            <h1 class="Logo">{{ logoTitle }}</h1>
            <button class="btn btn_add" @click.prevent="showForm">Add card</button>
        </nav>
    </div>
</template>

<script>
module.exports = {
    data(){
        return {
            logoTitle: 'Flazh Cards'
        }
    },
    methods: { 
        showForm(){
            this.$store.commit('changeShowForm');
        }
    }
}
</script>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
