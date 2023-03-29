
const { createApp } = Vue

createApp({
  data() {
    return {
      activeImage: 0,
      posters: [
        {
            image: "img/01.webp",
            title: "Marvel\'s Spiderman Miles Morale",
            description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
        },
        {
            image: "img/02.webp",
            title: "Ratchet & Clank: Rift Apart",
            description: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
        },
        {
            image: "img/03.webp",
            title: "Fortnite",
            description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
        },
        {
            image: "img/04.webp",
            title: "Stray",
            description: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city"
        },
        {
            image: "img/05.webp",
            title: "Marvel's Avengers",
            description: "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
        }
      ]
    }
  }
}).mount('#app')





