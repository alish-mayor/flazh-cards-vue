<template>
    <div class="card" :class="active" @click="notTranslated = !notTranslated">
        <h2 v-if="notTranslated">{{original}}</h2>
        <h2 v-else class="card_translated">{{translated}}</h2>
        <button class="btn" @click.stop="deleteCard">Delete card</button>
    </div>
</template>



<script>

export default {
    name: 'AppCard',
    data() {
        return {
            notTranslated: true
        }
    },
    props: {
        original: String,
        translated: String,
        index: Number,
    },
    methods:{
        deleteCard(){
            this.$store.commit('deleteCard', this.index);
        }
    },
    computed: {
        active(){
            return this.notTranslated ? '' : 'active';
        }
    }
}

</script>

<style scoped>
    .card{
        width: 300px;
        border: 1px solid var(--primary);
        position: relative;
        height: 180px;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        color: var(--white);
        cursor: pointer;
        transition: background 200ms ease-in-out;
        border-radius: 5px;
    }

    .btn {
        position: absolute;
        top: 10px;
        right: 10px;
        transition: border 200ms ease-in-out;
    }

    .card.active{
        background: var(--primary);
    }

    .card.active .btn{
        border-color: var(--white);
    }
</style>
