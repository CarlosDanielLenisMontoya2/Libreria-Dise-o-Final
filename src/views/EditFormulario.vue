<template>
    <div class="fondos">
    <div >
        <div class="form-container">
            <form>
                <h3 class ="autor">Actualizar Autor</h3>
                <label for="name">Codigo:</label>
                <input v-model="inventaryForm.id" type="number" :disabled="true" id="first">

    
                <label for="name">Nombre Y Apellido:</label>
                <input v-model="inventaryForm.nombre" type="text" id="name" name="name" required>
    
                <label for="age">Edad:</label>
                <input  v-model="inventaryForm.edad" type="number" id="age" name="age" required>
    
                <label for="books">Libros:</label>
                <textarea v-model="inventaryForm.libro" id="books" name="books" rows="4" required></textarea>
    
                <button @click.prevent="updateAutor()" type="submit">Actualizar</button>
            </form>
        </div>
    
    </div>
</div>
    
    </template>
    
    <script>
    
    export default {
        data(){
            return{
                inventaryForm:{
                    id:0,
                    nombre:'',
                    edad:'',
                    libro:'',
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
            this.$http.get(`v1/getById/${id}`)
            .then((resp)=>{
                console.log(resp);
                this.inventaryForm = resp.data;
            });

        },
        updateAutor(){
            this.$http.put('v1/update-autor',this.inventaryForm)
            .then((resp)=> {
                this.message = resp.data;
                this.isView = true;
                
            })  
            .finally(()=>{
                setTimeout(() => {
                    this.$router.push('/autores');
                    
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
    
    .fondos{
        background-image: url(../assets/imagenes/cenisas.gif);
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