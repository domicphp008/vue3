const app = {
    data (){
        return {
            title: 'Curos de Vue 3',
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
            ],
            cart: [],     
        }
    },
    methods: {
        addCart (product) {
            this.cart.push(product)
        }
    },
}

Vue.createApp(app ).mount('#app')