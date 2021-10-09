const app = {
    data (){
        return {
            name: 'Domicio',
            lastName: 'José - Curso de Vue - 3 - Entendendo Sobre Bidding no Vue3',
            product: {
                title: 'Filme 01',
                description: 'Filme muito legal',
                image: './assets/images/filme.jpg',
            }
                
        }
    }
}

Vue.createApp(app ).mount('#app')