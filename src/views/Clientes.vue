<template>
    <div class="container">
        <h1>Listado Clientes |
            <button @click="newClientes()" 
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus"/>
            </button>
        </h1>
            <table class="table">
              <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">document_number</th>
                    <th scope="col">firts_name</th>
                    <th scope="col">last_name</th>
                    <th scope="col">address</th>
                    <th scope="col">birthday</th>
                    <th scope="col">phone_number</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(clientes,index) in clientes" :key="index">
                <td>{{ clientes.id }}</td>  
                <td>{{ clientes.document_number }}</td>    
                <td>{{ clientes.first_name }}</td>     
                <td>{{ clientes.last_name }}</td>     
                <td>{{ clientes.address  }}</td>     
                <td>{{ clientes.birthday }}</td>     
                <td>{{ clientes.phone_number }}</td>   
                <td>{{ clientes.email }}</td>  
                <td>
                    <button @click="deleteClientes(clientes.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editClientes(clientes.id)"
                    class="btn btn-warning mx-2">
                    <font-awesome-icon icon="pencil" />
                    </button>
                </td>             
            </tr>
            </tbody>
        </table>
        </div>
        </template>

    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2'

    export default{

        name: 'Clientes',
        data(){
            return{
                clientes: []
            }
        },

        methods:
        {
            deleteClientes(id){
                Swal.fire
                ({
                    title: `Do you want to delete the Customer with id ${id}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',   
                }).then((result) =>{
                    if (result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/clientes/${id}`)
                        .then(response =>{
                            if (response.data.success){
                                Swal.fire('Deleted!!', '' ,'success')
                                this.clientes = response.data.clientes
                            }
                        })
                    }
                })
            },
            editClientes(id){
            this.$router.push({name:'EditarClientes', params: {id: `${id}`}})
        },
        newClientes(){
            this.$router.push({name: 'NewClientes'});
        },
        },

        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/clientes')
            .then(response =>(this.clientes = response.data.clientes))
        },
    }
</script>