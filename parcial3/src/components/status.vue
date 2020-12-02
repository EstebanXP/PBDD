<template>
    <div>
        <h1>
            Iniciar servicio 
            {{status}}
            <br>
            
            <div v-if="!status">
                <img src="../imagenes/focoOff.png">
            </div>
            <div v-else>
                <img src="../imagenes/focoOn.png">
            </div>
            <br>
            <button v-on:click="mostrar()">Estado</button>
            
        </h1>
    </div>
</template>

<script>



export default {
    name: "status",
    data: ()=> ({
        status:true,

    }),
    methods:{
        mostrar: function(){
            console.log("Hola mundo");
            this.status=!this.status;
            
        },
    }
}
</script>
