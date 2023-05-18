<template>
    <div class="container">
        <h1>Listado Pay Mode |
            <button @click="newPayMode()" 
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus"/>
            </button>
        </h1>
            <table class="table">
              <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Observation</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(PayMode,index) in PayMode" :key="index">
                <td>{{ PayMode.id }}</td>    
                <td>{{ PayMode.name }}</td>     
                <td>{{ PayMode.observation}}</td> 
                <td>
                    <button @click="deletePayMode(PayMode.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editPayMode(PayMode.id)"
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

        name: 'PayMode',
        data(){
            return{
                PayMode: []
            }
        },
        methods:
        {
            deletePayMode(id){
                Swal.fire
                ({
                    title: `Do you want to delete the PayMode with id ${id}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',   
                }).then((result) =>{
                    if (result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/PayMode/${id}`)
                        .then(response =>{
                            if (response.data.success){
                                Swal.fire('Deleted!!', '' ,'success')
                                this.PayMode = response.data.PayMode
                            }
                        })
                    }
                })
            },
            editPayMode(id){
            this.$router.push({name: 'EditarPayMode', params: {id: `${id}`}} )
        },
        newPayMode(){
            this.$router.push({name: 'NewPayMode'});
           
        },

        },

        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/PayMode')
            .then(response =>(this.PayMode = response.data.PayMode))
        },
    }
</script>
       