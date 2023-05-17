<template>
    <div class="container">
        <h1>Listado Categories</h1>
            <table class="table">
              <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categories,index) in categories" :key="index">
                <th scope="=row">{{index+1}}</th>   
                <td>{{ categories.name }}</td>     
                <td>{{ categories.description }}</td>                 
            </tr>
            </tbody>
        </table>
        </div>
        </template>

    <script>
    import axios from 'axios'

    export default{

        name: 'categories',
        data(){
            return{
                categories: []
            }
        },
        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/categories')
            .then(response =>(this.categories = response.data.categories))
        },
    }
</script>