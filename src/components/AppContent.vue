<template>
    <div class="content">
        <app-card 
        v-for="(card,index) in cards" 
        :key="index" 
        :original="card.original" 
        :translated="card.translated"
        :index="index"
        ></app-card>
    </div>
</template>

<script>
import AppCard from './AppCard.vue'

export default {
    name: 'AppContent',
    components: {
        AppCard
    },
    computed: {
        cards(){
            return this.$store.state.cards;
        }
    }
}
</script>

<style scoped>
.content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
</style>