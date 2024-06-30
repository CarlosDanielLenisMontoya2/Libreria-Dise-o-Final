<template>
    <nav>
        <h1>Tu libro online</h1>
        <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/autores">Autores</router-link></li>
            <li><router-link to="libro">Libros</router-link></li>
            <li><router-link to="cliente">Clientes</router-link></li>
            <li><router-link to="prestamo">Prestamos</router-link></li>
        </ul>
    </nav>

</template>

<style lang="scss">
    nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 5%;
    padding-right: 5%;
    font-weight: bold;
}

h1{
    color: rgb(255, 255, 255);
    font-size: 35px;
  
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:rgb(8, 156, 255);
}

h1:hover{
    
    font-size: 45px;
}

ul li{
    display: inline-block;
    padding:0px 20px ;
}

a{
    color: rgb(255, 255, 255);
    font-size: 25px;
    text-decoration: none;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:rgb(8, 156, 255);
    
    
}

a:hover{
    color: rgb(8, 156, 255);
    cursor: pointer;
    
}

a:active{
    color: transparent;
    text-shadow:20px 15px 2px rgb(8, 156, 255);
}

</style>