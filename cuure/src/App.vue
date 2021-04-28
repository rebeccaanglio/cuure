<template>
  <div id="app">
  
  <nav class="navbar navbar-expand navbar-light fixed-top">
         <div class="container">
             <a href="#" class="navbar-brand"></a>
             <div class="collapse navbar-collapse">
                 <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
     
      <router-link to="/">About</router-link>

       <router-link to="/login">Login</router-link>
       <router-link :to="{ name: 'Products' }">Products</router-link>
       
       </li>
                 </ul>
             </div>
          </div>
      </nav>
      <div class="auth-wrapper">
          <div class="auth-inner">
      <router-view />
          </div>
      </div>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
    
  }
  
}
</script>

<style>
   @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');


   *{
     box-sizing:border-box;
   }

   body {
     background: #efb577 !important;
     min-height: 100vh;
     display:flex;
     font-weight: 400;
     font-family:'Fira Sans',sans-serif;
   }

   h1,h2,h3,h4,h5,h6,label,span {
     font-weight:500;
     font-family: 'Fira Sans',sans-serif;
   }

   body,html, #app, #root, .auth-wrapper {
     width: 100%;
     height:100%;
   }

   #app {
     text-align:center;
   }

   .navbar-light {
     background-color: #ffffff;
     box-shadow: 0px 14px 80px rgba(34,35,58,0.2);

   }
   .auth-wrapper {
     display:flex;
     justify-content: center;
     flex-direction: column;
     text-align:left;
     
    
   }

   form#Login{
     width:400px;
     margin-left:650px;
     margin-top: 200px;
     justify-content:center;
     text-align:center;
   }

   .auth-inner {
     width: 450px;
     margin: auto;
     background : #ffffff;
     box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
     padding: 40px 55px 45px 55px;
     border-radius: 10px;
   }

   .auth-wrapper .form-control:focus{
     border-color: #167bff;
     box-shadow: none;
   }

   .auth-wrapper h3 {
     text-align:center;
     margin: 0;
     line-height:1;
     padding-bottom: 20px;
   }

   .custom-control-label {
     font-weight:400;
   }

   .forgot-password, .forgot-password a {
     text-align:right;
     font-size: 13px;
     padding-top: 10px;
     color: #7f7d7d;
     margin: 0;
   }

   .forgot-password a {
     color: #167bff;
   }

.nav {
  padding:30px;
}

   nav a {
    
     color: #2c3e50;
     text-decoration: none;
     padding: 10px;
     border-radius: 4px;
   }

  h4, h5,h3{
    color:black;
    font-weight:lighter;
  }

</style>