const { createApp } = Vue;

createApp({
    data() {
      return {
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
        }
       ]
      }
    }
}).mount('#app')