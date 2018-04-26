<template>
    <div class="row">
        <div>
            <nav>                
                <div class="nav-wrapper deep-purple darken-4">
                <a href="#" class="brand-logo center">Kuntur</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a>
                        <router-link :to="{name: 'CreateUser'}">
                            Crear usuario    
                        </router-link>                            
                        </a>
                    </li>        
                </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li>
                    <a>
                    <router-link :to="{name: 'CreateUser'}" class= "deep-purple-text darken-4" >
                        Crear usuario    
                    </router-link>                            
                    </a>
                </li> 
            </ul>                         
        </div>
        <div class="row">
            <router-view class="col s12 m12 l12"></router-view>
        </div>         
    </div>
</template>

<script>
    export default {
        
    }
</script>

<script>
        $(document).ready(function(){
    $('.sidenav').sidenav();         
     
  });
  
  
</script>