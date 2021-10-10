const app = {
    data (){
        return {
            name: 'Domicio José',
            lastName: 'José - Curso de Vue - 3 ',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito legal',
                    image: './assets/images/filme01.jpg',
                    stars: 3,
                },
                {
                    title: 'Filme 02',
                    description: 'Filme muito legal',
                    image: './assets/images/filme02.jpg',
                    stars: 0
                }
            ]     
        }
    }
}

Vue.createApp(app ).mount('#app')