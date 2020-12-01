<template>
    <div>
        <h1>
            Recibo actual
        </h1>
    </div>
</template>

<script>
//import {db} from '../firebase.js'
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
            /*const lastRec = await db.collection("Tickets");
            const last= lastRec.collection("Tickets").where("Pagado","==", false).get()

            this.recAux=lastRec.get()*
            console.log(this.recAux)*/
        }       
    },
}
</script>

