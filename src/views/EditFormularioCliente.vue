<template>
    <div class="fonds">
    <div >
        <div class="form-container">
            <form>
                <h3 class ="autor">Actualizar Cliente</h3>
                <label for="name">Codigo:</label>
                <input v-model="clienteForm.id" type="number" :disabled="true" id="first">
                <label for="name">Nombres:</label>
                <input v-model="clienteForm.nombre" type="text" id="name" name="name" required>
    
                <label for="age">Apellidos:</label>
                <textarea v-model="clienteForm.apellido" id="books" name="books" rows="4" required></textarea>
    
                <label for="books">Telefono:</label>
                <input  v-model="clienteForm.telefono" type="number" id="age" name="age" required>
    
                <button @click.prevent="updateCliente()" type="submit">Actualizar</button>
            </form>
        </div>
    
    </div>
</div>
    
    </template>
    
    <script>
    
    export default {
        data(){
            return{
                clienteForm:{
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
        this.getClienteById(this.$route.params.id);
    },
    methods:{   
        getClienteById(id){
            this.$http.get(`v2/getById/${id}`)
            .then((resp)=>{
                console.log(resp);
                this.clienteForm = resp.data;
            });

        },
        updateCliente(){
            this.$http.put('v2/update-cliente',this.clienteForm)
            .then((resp)=> {
                this.message = resp.data;
                this.isView = true;
                
            })  
            .finally(()=>{
                setTimeout(() => {
                    this.$router.push('/cliente');
                    
                }, 2000);
            })

        },
    },

};
    </script>
    
    
    
    <style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    
    .fonds{
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