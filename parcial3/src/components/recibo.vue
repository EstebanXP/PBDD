<template>
    <div>
        <h1>
            Recibo actual
        </h1>
    </div>
</template>

<script>
import {db} from '../firebase.js'
export default {
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
            const lastRec = await db.collection("Tickets").get();
            this.recAux=lastRec.get(lastRec.size()-1)
            console.log(this.recAux)
        }       
    },
}
</script>

