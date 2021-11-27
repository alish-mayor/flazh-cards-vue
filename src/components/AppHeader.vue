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
    .btn {
        background: transparent;
        border: 1px solid rgb(158, 68, 209);
        font-family: inherit;
        font-size: 16px;
        padding: 0.5rem;
        border-radius: 5px;
        color: aliceblue;
        cursor: pointer;
    }
</style>
