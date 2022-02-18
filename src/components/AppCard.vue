<template>
    <div class="card" :class="active" @click="notTranslated = !notTranslated">
        <h2 v-if="notTranslated">{{original}}</h2>
        <h2 v-else class="card_translated">{{translated}}</h2>
        <button class="btn btn_delete" :class="notTranslated ? '' : 'active'" @click.stop="deleteCard">Delete</button>
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
        background: var(--light);
        width: 300px;
        position: relative;
        height: 180px;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary);
        cursor: pointer;
        transition: background 200ms ease-in-out;
        border-radius: 5px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    }

    .btn {
        position: absolute;
        top: 10px;
        right: 10px;
        color: var(--primary);
    }

    .btn_delete{
        background: var(--secondary);
        border: none;
        transition: background 200ms ease-in-out;
        color: var(--light);
    }

    .btn_delete.active{
        background: var(--light);
        color: var(--secondary);
    }

    .card.active{
        background: var(--primary);
    }

    .card_translated{
        color: var(--light);
    }
</style>
