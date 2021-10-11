const app = {
    data (){
        return {
            class: '08 - Propriedades Computadas no Vuev3',
            title: 'Curos de Vue 3',
            name: 'Domicio ',
            lastName: 'José - Curso de Vue - 3 ',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito bom',
                    image: './assets/images/filme01.jpg',
                    stars: 3,
                },
                {
                    title: 'Filme 02',
                    description: 'Filme muito bom',
                    image: './assets/images/filme02.jpg',
                    stars: 0
                }
            ],
            cart: [],     
        }
    },
    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    },


    methods: {
        addCart (product) {
            this.cart.push(product)
        },

        inCart (product) {
            return this.cart.indexOf(product) != -1
        },


        removeCart (product) {
            this.cart = this.cart.filter((prod, index) => product != prod)  
           
        }    
    },
}

Vue.createApp(app ).mount('#app')