<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Clientes
            </div>
            <div class="card-body">
                <form @submit.prevent="updateClientes">
                
                    <div class="row mb-3">
                        <label for="document_number" class="form-label">codigo</label>

                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="document_number" placeholder="Number document" disabled v-model='clientes.document_number'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="firts_name" class="form-label">firts Name: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="firts_name" placeholder="Nombre customer" v-model='clientes.firts_name'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="last_name" class="form-label">last name: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="last_name" placeholder="Apellido customer" v-model='clientes.last_name'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="address" class="form-label">address: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="address" placeholder="Direccion customer" v-model='clientes.address'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="birthday" class="form-label">birthday: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="birthday" placeholder="birthday customer" v-model='clientes.birthday'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="phone_number" class="form-label">phone_number: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="phone_number" placeholder="phone number customer" v-model='clientes.phone_number'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="email" class="form-label">email: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building"/></div>
                            <input type="text" class="form-control" id="email" placeholder="email customer" v-model='clientes.email'>
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

        name: 'EditarClientes',
        data(){
            return{
                clientes:{
                    document_number:0,
                    firts_name: '',
                    last_name: 0,
                    address: '',
                    birthday: '',
                    phone_number: 0,
                    email: ''
                },
            }
        },

        methods:
        {
            cancelar(){
                this.$router.push({name: 'Clientes'})
            },

            async updateClientes(){
                const res = await axios.put(`http://127.0.0.1:8000/api/clientes/${this.clientes.id}`,this.clientes)

                if (res.status == 200){
                    this.$router.push({name: 'Clientes'})
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
            this.clientes.id = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/clientes/${this.clientes.id}`)
            .then(response =>(this.clientes = response.data.clientes.data))
        },
    }
</script>