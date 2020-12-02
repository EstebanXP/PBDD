<template>
    <div>
        <h1>
            
            Recibo actual
            {{recAux.FechaPago}}
            {{regresarFecha(recAux.FechaPago)}}
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
           
           let ref = db.collection("Tickets")
           // eslint-disable-next-line no-unused-vars
           const orden=ref.orderBy("FechaPago").limit(1).get()
            .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No matching documents.');
                            this.warningContrato='No existe ese numero de contrato'
                            return;
                        }
                        else{
                            snapshot.forEach(doc => {
                                console.log(doc.id, '=>', doc.data());
                                this.recAux=doc.data();
                            });
                            
                        }
                        
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                        
                    });
        },
        regresarFecha(segs){
            console.log(segs);
           var d = new Date(null);
           d.setTime(segs*1000);
           console.log(d);
           return d;
       }
    },
    
}
</script>

