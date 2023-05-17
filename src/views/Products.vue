<template>
    <div class="container">
        <h1>Listado Products</h1>
            <table class="table">
              <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">stock</th>
                    <th scope="col">category_id</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(Products,index) in Products" :key="index">
                <th scope="=row">{{index+1}}</th>
                <td>{{ Products.name }}</td>    
                <td>{{ Products.price }}</td>     
                <td>{{ Products.stock }}</td>     
                <td>{{ Products.category_id  }}</td>                  
            </tr>
            </tbody>
        </table>
        </div>
        </template>

    <script>
    import axios from 'axios'

    export default{

        name: 'Products',
        data(){
            return{
                Products: []
            }
        },
        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/Products')
            .then(response =>(this.Products = response.data.Products))
        },
    }
</script>