<template>
<div>
<h1>Catalogue</h1><br><br><br><br>

<div class="row">
<div class="col-3 products" v-for="product in products" :key="product.id">
<div class="img-container"><img v-bind:src="product.image" alt="bol" height="350px" width="350px" justify-content="center"></div>
<router-link :to="{ name: 'ProductsDetails', params: { id: product.id }}">

<h4>{{ product.name }}</h4>
</router-link>
<h5>{{ product.description }}</h5>
<h6>{{ product.prix }}€</h6>
</div>
</div>
</div>
</template>

<script>

export default {
    components: {  
    },
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
