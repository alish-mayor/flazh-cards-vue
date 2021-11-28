<template>
    <div class="form-container" v-show="showForm">
            <form>
                <h3>Enter your word</h3>
                <label for="original">Original word</label>
                <input type="text" name="original" v-model="originalInput">
                <label for="translated">Translated word</label>
                <input type="text" name="translated" v-model="translatedInput">
                <input type="button" name="cancel" class="btn btn_cancel" @click="closeForm"  value="x">
                <button class="btn" @click.prevent="addCard">Submit</button>
            </form>
    </div>
</template>

<script>

export default {
    name: 'AppContent',
    data() {
        return {
            originalInput: '',
            translatedInput: ''
        }
    },
    methods : {
        addCard(){
            this.$store.commit('addCard', {
                original : this.originalInput,
                translated : this.translatedInput
            });
            this.$store.commit('changeShowForm');
            this.clearInputs();
        },
        closeForm(){
            this.$store.commit('changeShowForm');
            this.clearInputs();
        },
        clearInputs(){
            this.originalInput = '';
            this.translatedInput = '';
        }
    },
    computed: {
        showForm(){
            return this.$store.state.showForm;
        }
    }
    
}
</script>

<style scoped>
.form-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}


form {
  background: var(--primary);
  padding: 1rem 3rem;
  text-align: center;
  border-radius: 5px;
  position: relative;
  color: var(--white);
}

.btn{
  border: 1px solid var(--white);
}

.btn_cancel {
  position: absolute;
  top: -5px;
  right: 10px;
  font-size: 1.5rem;
  border: none;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 0.3rem;
}

input {
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none
}
</style>