<template>
    <div class="fondos">
    <div >
        <div class="form-container">
            <form>
                <h3 class ="autor">Visitar Cliente</h3>
                <label for="name">Codigo:</label>
                <input v-model="ClienteFrom.id" type="number" :disabled="true" id="first">
                <label for="name">Nombres:</label>
                <input v-model="ClienteFrom.nombre" type="text"  name="name" disabled="true" required id="first" >
    
                <label for="age">Apellidos:</label>
                <textarea v-model="ClienteFrom.apellido"  name="books" rows="4" disabled="true"  required id="first"></textarea>
    
                <label for="books">Telefono:</label>
                <input  v-model="ClienteFrom.telefono" type="number" name="age" disabled="true" required id="first">
    
    
                <router-link class="rou" to="/prestamo" >Regresar</router-link>

    
            </form>
        </div>
    
    </div>
</div>
    
    </template>
    
    <script>
    
    export default {
        data(){
            return{
                ClienteFrom:{
                    id:0,
                    nombre:'',
                    apellido:'',
                    telefono:'',
                },
                message:'',
                isVvue:false,
    
            };
    },
    mounted(){ 
        this.getAutorById(this.$route.params.id);
    },
    methods:{   
        getAutorById(id){
            this.$http.get(`v2/getById/${id}`)
            .then((resp)=>{
                console.log(resp);
                this.ClienteFrom = resp.data;
            });
        }
    },

};
    
    </script>
    
    
    
    <style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    
    .fondos{
        background-image: url(../assets/imagenes/ceni.gif);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        min-height: 100vh; /* Asegúrate de que cubra al menos toda la altura de la ventana */
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .rou{
        color: #003377
    }
    input{
        background-color: #fff;
        color: black;
    }
    textarea{
        background-color: #fff;
        
    }
    
    .autor{
        font-size: 45px;
        color: #fff;
    }
    label{
        padding-top: 5%;
    }
    
    .form-container {
        background: rgba(0, 0, 50, 0.7);
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
    }
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    h1 {
        color: #fff;
        text-align: center;
        margin-bottom: 20px;
    }
    
    label {
        color: #fff;
        margin-bottom: 5px;
    }
    
    input, textarea {
        padding: 10px;
        margin-bottom: 15px;
        border: none;
        border-radius: 5px;
    }
    
    button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #0055aa;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #003377;
    }
    </style>