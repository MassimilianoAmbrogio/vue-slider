/**
 * Rifare l'esercizio Slider immagini con Vue
   Gestire navigazione immagini con click su freccie e pallini.
   Bonus: fare eseguire il loop delle immagini, 
   cambiando immagine ogni 3 secondi.
 */

// Vue slider
const app = new Vue({
    el: '#app',
    data: {
        indexPhoto: 0,
        photos: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg'
        ],
        intervalId: 0
    },
    created() {
        // console.log('created!');
        
        this.startLoop();
    },
    methods: {
        nextPhoto() {
            this.indexPhoto += 1;

            if (this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        prevPhoto() {
            this.indexPhoto -= 1;

            if (this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1;
            }
        },
        setPhoto(index) {
            console.log(index);

            this.indexPhoto = index;
        },
        startLoop() {
            this.intervalId = setInterval(() => {
                this.nextPhoto();
            }, 3000);
        },
        stopLoop() {
            clearInterval(this.intervalId);
        }
    }
});