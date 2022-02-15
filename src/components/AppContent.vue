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
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-row-gap: 1.5rem;
}

@media (min-width: 768px) and (max-width: 1280px) {
    .content{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 300px) and (max-width: 767px) {
    .content{
        grid-template-columns: 1fr;
    }
}
</style>