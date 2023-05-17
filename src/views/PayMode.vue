<template>
    <div class="container">
        <h1>Listado Pay Mode</h1>
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
            </tr>
            </tbody>
        </table>
        </div>
        </template>

    <script>
    import axios from 'axios'

    export default{

        name: 'PayMode',
        data(){
            return{
                PayMode: []
            }
        },
        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/PayMode')
            .then(response =>(this.PayMode = response.data.PayMode))
        },
    }
</script>