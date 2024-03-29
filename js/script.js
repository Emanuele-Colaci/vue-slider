const { createApp } = Vue;

createApp({
    data(){
        return{
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    selected: true
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    selected: false
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    selected: false
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    selected: false
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    selected: false
                }
            ],
            movimento: 0,
            autoScroll: null
        }
    },
    created(){
        this.startAutoScroll();
    },
    methods: {
        selectSlide(index){
        this.movimento = index;
        },
        prevSlide(){
            this.movimento--;
            if(this.movimento < 0){
                this.movimento = this.slides.length - 1;
            }
        },
        nextSlide(){
            this.movimento++;
            if(this.movimento > this.slides.length - 1){
                this.movimento = 0;
            }
        },
        startAutoScroll(){
            this.autoScroll = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },
        stopAutoScroll(){
            clearInterval(this.autoScroll);
        }
    }
}).mount('#app')
