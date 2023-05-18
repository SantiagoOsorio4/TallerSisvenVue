<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categories
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCategories">
                
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id</label>

                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="id" placeholder="id" disabled v-model='Categories.id'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Name: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="name" placeholder="name" v-model='Categories.name'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="description" class="form-label">description: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="description" placeholder="Apellido customer" v-model='Categories.description'>
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>

        </div>
        </template>

    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2'

    export default{

        name: 'EditarCategories',
        data(){
            return{
                Categories:{
                    name:'',
                    description:'',
                    

                },
            }
        },

        methods:
        {
            cancelar(){
                this.$router.push({name: 'Categories'})
            },

            async updateCategories(){
                const res = await axios.put(`http://127.0.0.1:8000/api/Categories/${this.Categories.id}`,this.Categories)

                if (res.status == 200){
                    this.$router.push({name: 'Categories'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categories has been updated',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            }
        },
        mounted(){
            this.Categories.id = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/Categories/${this.clientes.id}`)
            .then(response =>(this.Categories = response.data.Categories.data))
        },
    }
</script>