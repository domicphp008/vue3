const app = {
    data (){
        return {
            name: 'Domicio',
            lastName: 'José - Curso de Vue - 3 - Redenrização condicional  no Vue3',
            product: {
                title: 'Filme 01',
                description: 'Filme muito legal',
                image: './assets/images/filme01.jpg',
                stars: 3,
            },
            product2: {
                title: 'Filme 02',
                description: 'Filme muito legal',
                image: './assets/images/filme02.jpg',
                stars: 0
            }

                
        }
    }
}

Vue.createApp(app ).mount('#app')