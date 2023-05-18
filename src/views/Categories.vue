<template>
    <div class="container">
        <h1>Listado Categories |
            <button @click="newCategories()" 
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus"/>
            </button>
        </h1>
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
                <td>{{ categories.id }}</td>   
                <td>{{ categories.name }}</td>     
                <td>{{ categories.description }}</td>  
                <td>
                    <button @click="deleteCategories(Categories.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editCategories(Categories.id)"
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

    export default{

        name: 'categories',
        data(){
            return{
                categories: []
            }
        },
        methods:
        {
            deleteCategories(id){
                Swal.fire
                ({
                    title: `Do you want to delete the Categories with id ${id}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',   
                }).then((result) =>{
                    if (result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
                        .then(response =>{
                            if (response.data.success){
                                Swal.fire('Deleted!!', '' ,'success')
                                this.Categories = response.data.Categories
                            }
                        })
                    }
                })
            },
            editCategories(id){
            this.$router.push({name:'EditarCategories', params: {id: `${id}`}})
        },
        newCategories(){
            this.$router.push({name: 'NewCategories'});
        },
        },
        mounted(){
            axios 
            .get('http://127.0.0.1:8000/api/categories')
            .then(response =>(this.categories = response.data.categories))
        },
    }
</script>