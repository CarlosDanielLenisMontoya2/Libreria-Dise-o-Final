<template>
    <div class="fondos">
    <div >
        <div class="tables">

            <h2 class="autores">Tabla Autor</h2>
            
        <table >
            
        <thead>
            
            <tr >
                <th>codigo</th>
                <th>nombre</th>
                <th>edad</th>
                <th>libros reconocidos</th>
                <th>Acciones</th>
                </tr>
            
        </thead>
        <tbody>
        
            <tr v-for="row in autoresList">
            <td>{{ row.id }}</td>
            <td>{{row.nombre}}</td>
            <td>{{row.edad}}</td>
            <td>{{row.libro}}</td>
            <td>
                <button @click.prevent="editRouter(row.id)" class="accion">Editar</button>
                <button @click.prevent="deleteAutor(row.id)"  class="accion2">Borrar</button>
            </td>
            
        </tr>
    
        </tbody>
        
        </table>
        <div class="paginacion">
            <nav>
                <router-link to="/formularioAutor"  class="btn" >Crear</router-link >
            <ul >
                <li class="{ disabled: pageNumber === 1 }">
                </li>
                <li  v-for="page in totalPage" :key="page" :class="{ active: pageNumber + 1 === page }">
                    <a @click.prevent="pageEvent(page)">{{ page }}</a>
                </li>
            </ul>
            
        </nav>
        
        </div>
        </div>
        
    </div>
</div>
</template>



<script>
export default {
    data(){
        return{
            autoresList:[],
            pageSize: 5,
            pageNumber: 0,
            totalPage:0,
            pageActive: true,
        };
    },
    mounted(){
        this.getRead();
    },
    methods:{
        getRead(){
            this.$http.get('/v1/read', {
                params:{
                    pageSize:this.pageSize,
                    pageNumber:this.pageNumber
                }
            })
            .then((resp) => {
                console.log(resp);
                this.autoresList = resp.data.content;
                this.totalPage = resp.data.totalPages; 
            });
        },
        pageEvent(nextPage){
            if(nextPage < 1 || nextPage > this.totalPage) return;
            this.pageNumber = nextPage - 1;
            this.getRead();
        },
        editRouter(id){
                this.$router.push(`/edit-autor/${id}`);
            },
            deleteAutor(id){
                this.$swal({
            title: "¿Esta seguro de eliminar el autor?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            customClass: {
            confirmButton:
                "bg-green-500/50 text-white cuursor-pointer rounded-full border-none p-1 w-24",
            cancelButton:
                "bg-red-500/50 relative ml-2 text-white rounded-full p-1 w-24",
            },
            buttonsStyling: false,
        })
        .then((result)=>{
                if(result.value){
                    this.$http.delete(`v1/delete/${id}`)
                    .then((resp)=> {
                        console.log(resp);
                        this.getInventary();

                    })
                }
            })
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
    background-image: url(../assets/imagenes/cenisas.gif);;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vh; /* Asegúrate de que cubra al menos toda la altura de la ventana */
    display: flex;
    justify-content: center;
    align-items: center;
    
}




.tables {
    font-size: 35px;
    color: #ffffff;
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 20px;
        
}
th{
    font-size: 35px;
    color: #ffffff;
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 20px;


}



.autores{
    text-align: center;
    margin-top: 1%;
    font-size: 47px;

}
.btn{
    font-size: 35px;
    color: #ffffff;
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 20px;
        
}


.btn:hover{
    cursor: pointer;
    box-shadow: 0px 8px 16px rgba(61, 59, 180, 0.3); 
    background-color: #143b64;
    border-color: #05213f;
    

}
.btn:active{
    font-size: 35px;
    color: #ffffff;
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(2, 175, 255, 0.3); 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(63, 186, 235, 0.3);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 15px 16px rgba(2, 175, 255, 0.3); 
    }

.accion{
    font-size: 15px;
    color: rgb(255, 255, 255);
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(49, 182, 56, 0.3);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 15px 16px rgba(84, 255, 69, 0.3);
}
.accion2{
    font-size: 15px;
    color: rgb(255, 255, 255);;
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(168, 35, 35, 0.3);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 15px 16px rgba(241, 45, 45, 0.3);
}

.accion:hover{
    cursor: pointer;
    background-color: rgb(66, 207, 66);
    box-shadow: 0px 8px 16px rgb(66, 207, 66); 

}
.accion2:hover{
    cursor: pointer;
    background-color: rgb(216, 77, 77);
    box-shadow: 0px 8px 16px rgb(216, 77, 77);

}


.accion:active{
    font-size: 15px;
    color: rgba(10, 54, 6, 0.3);
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(84, 255, 69, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(49, 182, 56, 0.3);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 15px 16px rgba(84, 255, 69, 0.3);
    
}
.accion2:active{
    font-size: 15px;
    color: rgba(168, 35, 35, 0.3);;
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(241, 45, 45, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(168, 35, 35, 0.3);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 15px 16px rgba(241, 45, 45, 0.3);
    
}


tbody{

    font-size: 25px;
    color: #ffffff;
    border-spacing: 40px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 15px 16px rgba(2, 175, 255, 0.3); 
    }

    .paginacion {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.paginacion nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
}

.paginacion nav ul li {
    display: inline;
}

.paginacion nav ul li a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #007bff;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
}

.paginacion nav ul li.disabled a {
    color: #ddd;
    pointer-events: none;
}

.paginacion nav ul li.active a {
    background-color: #000000;
    color: white;
    border-color: #007bff;
}

.paginacion nav ul li a:hover {
    background-color: #0056b3;
    color: white;
}


</style>
