<template>
    <div class="container">
        <h1>Listado Products | <button @click="newProducts()" class="btn btn-success mx-2"> <font-awesome-icon icon="plus"/> </button></h1>
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
                <td>{{ Products.id }}</td>                    
                <td>{{ Products.name }}</td>    
                <td>{{ Products.price }}</td>     
                <td>{{ Products.stock }}</td>     
                <td>{{ Products.category_id  }}</td>      
                <td>
                    <button @click="deleteProducts(Products.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editProducts(Products.id)"
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

        name: 'Products',
        data(){
            return{
                Products: []
            }
        },
        methods: {
            deleteProducts(id){
                Swal.fire({
                    title: `Do you want to delete the Products whit id ${id}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete', 
                }).then((result)=>{
                    if (result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/Products/${id}`)
                        .then(response => {
                            if (response.data.success){
                                Swal.fire('Deleted!! ', '', 'success')
                                this.Products = response.data.Products
                            }
                        })
                    }
                })
            },
            
        editProducts(id){
            this.$router.push({name: 'EditarProducts', params: {id: `${id}`}} )
        },
        newProducts(){
            this.$router.push({name: 'NewProducts'});
           
        },
        },


        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/Products')
            .then(response =>(this.Products = response.data.Products))
        },
    }
</script>