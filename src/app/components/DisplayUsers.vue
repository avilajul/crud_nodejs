<template>
    <div>
        <h3 class="center-align">Listado de usuarios</h3>
        <table class="striped responsive-table">
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>nombre</th>
                    <th>Apellido</th>
                    <th>Dirección</th>
                    <th>Ciudad</th>
                    <th>Estado</th>
                    <th>País</th>
                    <th>Teléfono</th>
                    <th>Codigo de área</th>
                    <th>Fecha de nacimiento</th>                    
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario._id">
                    <td>{{usuario._id}}</td>
                    <td>{{usuario.name}}</td>
                    <td>{{usuario.last_name}}</td>
                    <td>{{usuario.address}}</td>
                    <td>{{usuario.city}}</td>
                    <td>{{usuario.state}}</td>
                    <td>{{usuario.country}}</td>
                    <td>{{usuario.phone}}</td>
                    <td>{{usuario.area_code}}</td>
                    <td>{{usuario.birthdate}}</td>
                    <router-link :to="{ name: 'EditUser', params:{id: usuario._id} }">
                        Actualizar
                    </router-link>
                    <button class="btn waves-effect waves-light deep-purple darken-4">Eliminar
                        <i class="material-icons">delete_forever</i>
                    </button>
                    
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                usuarios: []
            }
        },
        created(){
            this.fetchUsers();
        },
        
        methods: {
            fetchUsers() {
                this.axios.get('/user')
                    .then(res => {
                        this.usuarios = res.data;
                    })
                    .catch(err => console.log(err));                
            },
            deleteuser(id) {                
                const response = confirm('¿Estas seguro de eliminar este Usuario?')
                if(response){              
                    this.axios.delete('/usuario/' + id)
                    .then(res => {
                        this.fetchItems();                                     
                    }) 
                    .catch (err => console.log(err));                   
                }
                return;                  
            }
        }        
    }

</script>

