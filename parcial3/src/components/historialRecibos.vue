
<template>
    <div>
            Todos los recibos
            <ul>
                <li v-for="rec in recibos" :key="rec.id">
                <p class="pListas">Recibo pagado:</p>{{rec.Pagado}} <hr/>
                <p class="pListas">Saldo Pagado:</p> {{rec.Saldo}} <hr>
                <p class="pListas">Watts Usados en el semestre:</p> {{rec.Wattage}}<hr>
                </li>
            </ul>
        <form @submit.prevent="exit">
            <button type="submit">Cerrar Sesión</button>
        </form>
    </div>
</template>

<script>
import {db} from '../firebase.js'
import router from '../router'
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
            
            //const recibos1 = db.collection("Tickets")
            //console.log("jala")
            //this.recibos= recibos1.docs.map(doc => ({id: doc.id,...doc.data()}))
            //console.log("jala")
            //console.log(this.recibos);
            var i=0;
            var recibos1= db.collection("Tickets");
            var consulta= recibos1.where("Pagado", '!=', null).get()

            //this.recibos=consulta.docs.map(doc => ({id: doc.id,...doc.data()}))
                .then(snapshot=>{
                    if(snapshot.empty){
                        alert("Tabla vacia!");
                        return
                    }else{
                        console.log(consulta);
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
                
        },
        exit(){
            router.push('/')
        },       
    },
    
}
</script>
