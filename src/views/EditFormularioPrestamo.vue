<template>
    <div class="fondos4">
        <div class="form-container">
            <form>
                <h3 class ="autor">Crear Prestamo</h3>
                <label for="name">Fecha De Inicio:</label>
                <input v-model="prestamoFrom.fecha" type="date" id="" name="fecha" required>
                <label for="name">Fecha De Fiinalizacion:</label>
                <input v-model="prestamoFrom.fechaF" type="date" id="" name="fecha" required>
                
                <label for="age">Cliente:</label>
                <input  v-model="prestamoFrom.clienteId" type="number" id="age" name="age" required>
    
                <label for="books">Libro:</label>
                <input  v-model="prestamoFrom.libroId" type="number" id="age" name="age" required>
                
                <button @click.prevent="updatePrestamo()" type="submit">Actualizar</button>
            </form>
        </div>
    
    </div>
    
    </template>

    <script>
    
    export default {
        data(){
            return{
                prestamoFrom:{
                    fecha:'',
                    fechaF:'',
                    clienteId:'',
                    libroId:''
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
            this.$http.get(`v4/getById/${id}`)
            .then((resp)=>{
                console.log(resp);
                this.prestamoFrom = resp.data;
            });

        },
        updatePrestamo(){
            this.$http.put('v4/update-prestami',this.prestamoFrom)
            .then((resp)=> {
                this.message = resp.data;
                this.isView = true;
                
            })  
            .finally(()=>{
                setTimeout(() => {
                    this.$router.push('/prestamo');
                    
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

.fondos4{
    background-image: url(../assets/imagenes/name2.gif);
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