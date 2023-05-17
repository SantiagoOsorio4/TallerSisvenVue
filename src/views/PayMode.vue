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
                <th scope="=row">{{index+1}}</th>   
                <td>{{ PayMode.name }}</td>     
                <td>{{ PayMode.observation}}</td> 
                <td>
                    <button @click="deletePayMode(PayMode.name)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editPayMode(PayMode.name)"
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
            deletePayMode(codigo){
                Swal.fire
                ({
                    title: `Do you want to delete the PayMode with id ${codigo}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',   
                }).then((result) =>{
                    if (result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/PayMode/${codigo}`)
                        .then(response =>{
                            if (response.data.success){
                                Swal.fire('Deleted!!', '' ,'success')
                                this.PayMode = response.data.PayMode
                            }
                        })
                    }
                })
            }
        },
        editPayMode(id){
            this.$router.push({name: 'EditarPayMode', params: {id: `${id}`}} )
        },
        newCustomer(){
            this.$router.push({name: 'NewCustomer'});
           
        },
        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/PayMode')
            .then(response =>(this.PayMode = response.data.PayMode))
        },
    }
</script>
       