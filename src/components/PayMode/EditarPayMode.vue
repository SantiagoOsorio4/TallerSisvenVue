<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                PayMode
            </div>
            <div class="card-body">
                <form @submit.prevent="updatePayMode">
                
                    <div class="row mb-3">
                        <label for="name" class="form-label">Name</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="name" placeholder="name" disabled v-model='PayMode.name'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="observation" class="form-label">observation: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="observation" placeholder="observation" v-model='PayMode.observation'>
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

        name: 'EditarPayMode',
        data(){
            return{
                PayMode:{
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

            async updatePayMode(){
                const res = await axios.put(`http://127.0.0.1:8000/api/PayMode/${this.PayMode.name}`,this.PayMode)

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
            this.PayMode.name = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/PayMode/${this.PayMode.name}`)
            .then(response =>(this.PayMode = response.data.PayMode))
        },
    }
</script>