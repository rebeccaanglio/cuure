<template>
<div>
<div v-if="product">
</div>

<h1>{{product.name}}</h1>
<p>L'id du produit est {{ id }}</p>
<p>{{ product.details }}</p>
</div>

</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            product:null
        }
    },
    mounted() {
      fetch('http://localhost:3000/products/' + this.id)
        .then(res => res.json())
        .then(data => this.product = data)
        .catch(err => console.log(err.message))
    }
}
</script>