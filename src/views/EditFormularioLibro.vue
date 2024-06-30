<template>
    <div class="fondos3">
        <div class="form-container">
            <form>
                <h3 class ="autor">Editar Libro</h3>
                <label for="name">Codigo:</label>
                <input v-model="libroForm.id" type="number" :disabled="true" id="first">
                <label for="name">Nombres:</label>
                <input v-model="libroForm.nombre" type="text" id="name" name="name" required>
                
                <label for="name">Descipcion:</label>
                <input v-model="libroForm.descripcion" type="text" id="name" name="name" required>
                
                <label for="age">Unidades:</label>
                <textarea v-model="libroForm.unidades" id="books" name="books" rows="4" required></textarea>
    
                <label for="books">Autor:</label>
                <input  v-model="libroForm.autorId" type="number" id="age" name="age" required>
                
                <button @click.prevent="updateLibro()" type="submit">Actualizar</button>
            </form>
        </div>
    
    </div>
    
    </template>

    <script>
    
    export default {
        data(){
            return{
                libroForm:{
                    id:0,
                    nombre:'',
                    descripcion:'',
                    unidades:'',
                    autorId:'',
                },
                message:'',
                isVvue:false,
    
            };
    },
    mounted(){ 
        this.getLibroById(this.$route.params.id);
    },
    methods:{   
        getLibroById(id){
            this.$http.get(`v3/getById/${id}`)
            .then((resp)=>{
                console.log(resp);
                this.libroForm = resp.data;
            });

        },
        updateLibro(){
            this.$http.put('v3/update-libro',this.libroForm)
            .then((resp)=> {
                this.message = resp.data;
                this.isView = true;
                
            })  
            .finally(()=>{
                setTimeout(() => {
                    this.$router.push('/libro');
                    
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

.fondos3{
    background-image: url(../assets/imagenes/luna.gif);
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