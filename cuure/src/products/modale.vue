<template>
<div class="bloc-modale">

<div class="overlay"></div>

<div class="modale card">
<div class="btn-modale btn btn-dark">X</div>
<h2>Le contenu de la modale</h2>
</div>
</div>

</template>

<script>

export default {
    name: 'Modale'
}
</script>
<style scoped>

.bloc-modale {
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
}

.modale {
    background: #f1f1f1;
    color: #333;
    width:1000px;
    height:600px;
    padding:70px;
    position:fixed;
    top:30%;
}

.btn-modale{
    position:absolute;
    top:10px;
    right:10px;
}
</style>