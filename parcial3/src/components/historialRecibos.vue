
<template>
    <div>
        <h1>
            Todos los recibos
            <ul>
            <li v-for="rec in recibos" :key="rec.id">
            Recibo pagado:
            {{rec.Pagado}}
            Saldo Pagado: {{rec.Saldo}} 
            Watts Usados en el semestre: {{rec.Wattage}}
            </li>
            </ul>
        </h1>
    </div>
</template>

<script>
import {db} from '../firebase.js'
export default {
    name: "historialRecibo",

    data(){
        return{
            recibos: [],
        }
        
    },
    created() {
        this.mostrarRecibos();
    },
    methods: {
        async mostrarRecibos(){ //esta. acano jjsjsjs
            //console.log("jala")
            const recibos1 = await db.collection("Tickets").get();
            //console.log("jala")
            this.recibos= recibos1.docs.map(doc => ({id: doc.id,...doc.data()}))
            //console.log("jala")
            console.log(this.recibos);
        }       
    },
}
</script>
