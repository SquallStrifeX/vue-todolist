const { createApp } = Vue;

createApp({
    data() {
      return {
        newGame: '',
        list: [
            {
            text: 'Final Fantasy VII',
            done: false,
        },
        {
            text: 'Kingdom Hearts 2: Final Mix',
            done: true,
        },
        {
            text: 'Dragon Quest XI: Echi di un era Perduta',
            done: false,
        },
        {
            text: 'Persona 5 Royale',
            done: false,
        },
        {
            text: 'Tales of Symphonia',
            done: true,
        },
       ]
      }
    },
    methods: {
        removeItem(index) {
            this.list.splice(index, 1)
    },
        addGame(){
            this.list.push({ text: this.newGame, done: false })
        }
}
}).mount('#app')