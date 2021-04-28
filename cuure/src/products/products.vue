<template>
<div>
<h1>Catalogue</h1><br><br>
<div class="row">
<div class="col-3 products" v-for="product in products" :key="product.id">
<p class="jumbotron">{{ product.image }}</p>
<router-link :to="{ name: 'ProductsDetails', params: { id: product.id }}">

<h4>{{ product.name }}</h4>
<h5>{{ product.description }}</h5>
<h3>{{ product.prix }} €</h3>
</router-link>

//<modale></modale>



</div>
</div>
</div>


</template>
<script>

//import Modale from './modale'
//import axios from 'axios'

export default {
   // components: {
       // 'Modale': Modale
   // },
    data() {
        return {
            products: []
        }
    },
    mounted() {
       fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => this.products = data)
        .catch(err => console.log(err.message))
    }
}
</script>