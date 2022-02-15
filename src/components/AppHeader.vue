<template>
    <div class="header">
        <nav>
            <h1 class="logo">Flazh<span>Cards</span> </h1>
            <button class="btn btn_add" @click.prevent="showForm">Add card</button>
        </nav>
    </div>
</template>

<script>
module.exports = {
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

    .logo{
        margin: 0;
    }

    .logo span{
        color: var(--white);
    }

    .header{
        padding: 1rem;
        background: #091832;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }

    .btn_add{
        border: none;
        background: var(--primary);
    }
</style>
