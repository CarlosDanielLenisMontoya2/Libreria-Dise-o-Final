<template>
  <header>
        <h2>
    
          <br>
          <p class ="dialogo"  >Administra tus libros aqui es gratis</p>
          
        </h2>
    </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

.dialogo{
   padding-left: 25%;
   padding-top: 25%;
   color:   #ffffff ;
   -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: rgb(8, 156, 255); 
   font-size: 45px;
   
    
    
}
.dialogo:hover{
    cursor: pointer;
    
}

</style>
