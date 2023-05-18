<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categories
            </div>
            <div class="card-body">
                <form @submit.prevent="saveCategories">
                

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
                            <input type="text" class="form-control" id="description" placeholder="description" v-model='Categories.description'>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancel</button>
                </form>
            </div>
        </div>
     </div>
</template>

    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2'

    export default{

        name: 'NewCategories',
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
                this.$router.push({name: 'categories'})
            },

            async saveCategories(){
                this.Categories.id = this.id
                const res = await axios.post(`http://127.0.0.1:8000/api/categories`,this.Categories)
                console.log(res);

                if (res.status == 200){
                    this.$router.push({name: 'categories'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categories has been saved',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            }
        },
        mounted(){
            axios.get(`http://127.0.0.1:8000/api/categories/`)
            .then(response =>{this.Categories = response.data.Categories})
        },
    }
</script>