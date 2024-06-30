<template>
    <div class="fond">
        <div class="form-container">
            <form>
                <h3 class ="autor">Registrar Cliente</h3>
                <label for="name">Nombres:</label>
                <input v-model="ClienteForm.nombre" type="text" id="name" name="name" required>
    
                <label for="age">Apellidos:</label>
                <textarea v-model="ClienteForm.apellido" id="books" name="books" rows="4" required></textarea>
    
                <label for="books">Telefono:</label>
                <input  v-model="ClienteForm.telefono" type="number" id="age" name="age" required>
    
                <button @click.prevent="createCliente()" type="submit">Crear</button>
            </form>
        </div>
    
    </div>
    
    </template>
    
    <script>
    
    export default {
        data(){
            return{
                ClienteForm:{
                    nombre:'',
                    apellido:'',
                    telefono:'',
                },
                message:'',
                isVvue:false,
    
            };
    },
        methods:{
            createCliente(){
                this.$http.post('v2/create-cliente',this.ClienteForm)
                .then ((resp) =>{
                    this.message = resp.data.message;
                    this.isVvue = true;
                    this.ClienteForm = {
                        nombre:'',
                        apellido:'',
                        telefono:'',
                    }
                })
                .finally(() => {
                    setTimeout(() => {
                        this.$router.push('/cliente')
                    }, 2000);
                });
            },
            }
    };
    
    </script>
    
    
    
    <style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    
    .fond{
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