<!-- 
    Template para visualizar el formulario
    de edición de usuario
-->
<template>
    <div class="row">
        <div class="col s12 m12 l12">
            <div class="card">
                <!-- 
                    formulario que captura los datos del formulario 
                     y son eviados al método updateUser 
                -->
                <form v-on:submit.prevent="updatedUser">
                <div class="card-content">
                    <h4 class="center-align">Editar datos de Usuario</h4>                
                
                    <div class="row">
                        <div class="input-field col s12 m6 l6">     
                        <i class="material-icons prefix">account_circle</i>
                        <input id="" type="text" v-model="user.name" placeholder="Nombre" class="validate" required>                   
                        </div>                        

                        <div class="input-field col s12 m6 l6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" v-model="user.last_name" placeholder="Apellido" class="validate" required>
                        </div>                        
                    </div>    
                    <div class="row">
                        <div class="input-field col s12 m6 l6">
                        <i class="material-icons prefix">directions</i>
                        <input id="icon_prefix" type="text" v-model="user.address" placeholder="Dirección" class="validate" required>
                        </div>                        

                        <div class="input-field col s12 m6 l6">
                        <i class="material-icons prefix">location_city</i>
                        <input id="icon_prefix" type="text" v-model="user.city" placeholder="Ciudad"  class="validate" required>                        
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6 l6">
                        <i class="material-icons prefix">place</i>
                        <input id="icon_prefix" type="text" v-model="user.state" placeholder="Estado" class="validate" required>                        
                        </div>                        

                        <div class="input-field col s12 m6 l6">
                        <i class="material-icons prefix">public</i>
                        <input id="icon_prefix" type="text" v-model="user.country" placeholder="País" class="validate" required>                        
                        </div>                        
                    </div>                                                                                                            
                    <div class="row">   
                        <div class="input-field col s12 m6 l4">
                        <i class="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" v-model="user.phone" placeholder="Teléfono" class="validate" required>                        
                        </div>
                        <div class="input-field col s12 m6 l4">
                        <i class="material-icons prefix">map</i>                        
                        <input id="icon_telephone" type="text" v-model="user.area_code" placeholder="Código de área" class="validate" required>                        
                        </div>
                        <div class="input-field col s12 m6 l4">
                        <i class="small material-icons">cake</i>
                        <date-picker v-model="user.birthdate" format="dd/MM/yyyy" editable lang="es" placeholder="Fecha de nacimiento" required></date-picker>
                        </div>                                                                                
                    </div>
                </div>
                <div class="card-action">
                    <div class="row">
                        <div class="col s12">
                        <button class="btn waves-effect waves-light  deep-purple darken-4" type="submit">Actualizar Usuario
                            <i class="material-icons right">sync</i>
                            </button>
                        </div>
                    </div>
                </div>
                </form>                              
            </div>
        </div>
    </div>    
</template>


<script>

/**
 * Importa componente Datapicker 
 * para el campo fecha de nacimiento
 */

import DatePicker from 'vue2-datepicker'

    export default {

        components: { DatePicker },

        data() {
            return {
                user: {},
                shortcuts: [
                    {
                
                    start: new Date(),
                    end: new Date()
                    }
                ]                
            }              
            
        },

        created() {
            this.getUser();
        },

        // Métodos del componente Edituser
        methods: {
            /**
             * Método que obtiene los datos del usuario 
             * de acuerdo al ID del usuario
             */
            getUser() {
                this.axios.get('/user/' + this.$route.params.id)
                    .then(res => {
                        this.user = res.data
                        console.log(this.user);
                    });                
            },
            /**
             * Método que toma los datos del usuario
             * y son enviados al verbo REST PUT
             * para que se acutalice en la base de datos
             * después de recibir respuesta redirecciona
             * al componente DisplayUsers
             */
            updatedUser() {
                this.axios.put('/user/' + this.$route.params.id, this.user)
                    .then(res => {
                        console.log(res);
                        this.$router.replace({name: 'DisplayUsers'});
                    });
            }            
        }
    }
</script>