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
           var i=0;
           let ref = db.collection("Tickets")
           var orden=ref.orderBy("FechaPago").limitToFirst(1)
            .then(snapshot=>{
                    if(snapshot.empty){
                        alert("Tabla vacia!");
                        return
                    }else{
                        console.log(orden);
                    }
                 
                   i=0;
                 
                    snapshot.forEach(doc=>{
                        console.log(doc.id,"=>",doc.data());
                        this.recibos[i]=doc.data()
                        i++;
                    })
                    
               })
                .catch(err => {
                        console.log('Error getting documents', err);
                    });
            
        }
    },
    
}
</script>

