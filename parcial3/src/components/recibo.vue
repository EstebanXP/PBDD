<template>
    <div>
        <h1>
            Recibo actual
        </h1>
        <form @submit.prevent="cerrarSesion">
            <button type="submit">Cerrar Sesión</button>
        </form>
    </div>
</template>

<script>
import {db} from '../firebase.js'
import router from '../router'
export default {
    cerrarSesion(){
        
        router.push("/")
    },
    name: "recibo",
    data(){
        return{
            recAux:[],
        }
        
    },
     created() {
        this.mostrarUltimoRecibo();
    },
    methods: {
        async mostrarUltimoRecibo(){ //este. acano jjsjsjs x2
           var ref = db.database().ref("Tickets");
            ref.orderByChild("FechaPago").limitToFirst(1).on("child_added", function(snapshot) {
            // This will be called exactly two times (unless there are less than two
            // dinosaurs in the Database).

            // It will also get fired again if one of the first two dinosaurs is
            // removed from the data set, as a new dinosaur will now be the second
            // shortest.
            console.log(snapshot.key);
            });
        }
    },
    
}
</script>

