<template>
<div class="fondoss"><div>
    <div class="form-container">
        <form>
            <h3 class ="autor">Crear Autor</h3>
            <label for="name">Nombres Y Apellidos:</label>
            <input v-model="inventaryForm.nombre" type="text" id="name" name="name" required>

            <label for="age">Edad:</label>
            <input  v-model="inventaryForm.edad" type="number" id="age" name="age" required>

            <label for="books">Libros Mas Reconocidos:</label>
            <textarea v-model="inventaryForm.libro" id="books" name="books" rows="4" required></textarea>

            <button @click.prevent="createAutor()" type="submit">Crear</button>
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
                nombre:'',
                edad:'',
                libro:'',
            },
            message:'',
            isVvue:false,

        };
},
    methods:{
        createAutor(){
            this.$http.post('v1/create-autor',this.inventaryForm)
            .then ((resp) =>{
                this.message = resp.data.message;
                this.isVvue = true;
                this.inventaryForm = {
                    nombre:'',
                    edad:'',
                    libri:'',
                }
            })
            .finally(() => {
                setTimeout(() => {
                    this.$router.push('/autores')
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

.fondoss{
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