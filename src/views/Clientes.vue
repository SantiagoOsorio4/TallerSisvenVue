<template>
    <div class="container">
        <h1>Listado Customers</h1>
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
                <th scope="=row">{{index+1}}</th>
                <td>{{ clientes.document_number }}</td>    
                <td>{{ clientes.firts_name }}</td>     
                <td>{{ clientes.last_name }}</td>     
                <td>{{ clientes.address  }}</td>     
                <td>{{ clientes.birthday }}</td>     
                <td>{{ clientes.phone_number }}</td>   
                <td>{{ clientes.email }}</td>               
            </tr>
            </tbody>
        </table>
        </div>
        </template>

    <script>
    import axios from 'axios'

    export default{

        name: 'Cliente',
        data(){
            return{
                clientes: []
            }
        },
        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/clientes')
            .then(response =>(this.clientes = response.data.clientes))
        },
    }
</script>