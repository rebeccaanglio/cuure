<template>

<form id="Login" v-on:submit.prevent="submit"> 

 
        <h3>Connexion</h3>


     <div class="form-group">    
        <label>EMAIL</label>
        <input type="text" class="form-control" v-model.trim="$v.email.$model" :class="{'is-invalid': validationStatus($v.email)}" placeholder="Email"/>
         <div v-if="!$v.email.required" class="invalid-feedback">L'email est requit.</div>
         <div v-if="!$v.email.email" class="invalid-feedback">L'email n'est pas valide.</div>
    </div>

    <div class="form-group"> 
        <label>MOT DE PASSE</label>
        <input type="password" class="form-control" v-model.trim="$v.password.$model" :class="{'is-invalid': validationStatus($v.password)}" placeholder="Mot de passe"/>
         <div v-if="!$v.password.required" class="invalid-feedback">Le mot de passe est requis.</div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">Il doit avoir au moins {{ $v.password.$params.minLength.min }} lettres.</div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">Il ne doit pas y avoir plus de {{ $v.password.$params.maxLength.min }} lettres.</div>
    </div>

    

    <button class="btn btn-success btn-block">VALIDER</button>
      
</form>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data: function() {
        return {
            email:'',
            password:'',
        }
    },
    validations: {
        email: {required, email},
        password: { required,minLength: minLength(6), maxLength: maxLength(18) },
    },
    methods: {

         resetData: function() {
            this.email = '';
            this.password = '';
        },

          validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit() {
        
           // axios.post('/users', {
             //   email:this.email
           // })

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push("/");

           
           
                console.log('email:', this.email)
                console.log('password:', this.password)
            

            //alert("); (this.password,this.email);
            alert("Félicitations ! Vous venez de creer votre compte Cuure avec votre adresse :\n" + JSON.stringify(this.email));
            console.log(this.password, this.email);
            this.$v.$reset();
            this.resetData();
        }
    }   
}
</script>