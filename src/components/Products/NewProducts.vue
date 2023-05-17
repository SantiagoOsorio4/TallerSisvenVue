<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Products
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProducts">
                    <div class="row mb-3">

                        <label for="name" class="form-label">Name</label>

                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="name" placeholder="name" disabled v-model='Products.name'>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <label for="price" class="form-label">price: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building"/> </div>
                            <input type="text" class="form-control" id="price" placeholder="price" v-model='Products.price'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="stock" class="form-label">stock: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building"/> </div>
                            <input type="text" class="form-control" id="stock" placeholder="stock" v-model='Products.stock'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="category_id" class="form-label">category_id: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building"/> </div>
                            <input type="text" class="form-control" id="category_id" placeholder="category_id" v-model='Products.category_id'>
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2'

    export default{

        name: 'EditarProducts',
        data(){
            return{
                Products:{
                    name:'',
                    observation: ''
                },
            }
        },

        methods:
        {
            cancelar(){
                this.$router.push({name: 'PayMode'})
            },

            async SavePayMode(){
                this.PayMode.name = this.name
                const res = await axios.post(`http://127.0.0.1:8000/api/PayMode/`, this.PayMode)
                console.log(res);

                if (res.status == 200){
                    this.$router.push({name: 'PayMode'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Customer has been updated',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            }
        },
        mounted(){
            axios.get(`http://127.0.0.1:8000/api/PayMode/`)
            .then(response => {
                this.PayMode = response.data.PayMode
            })
        },
    }
</script>