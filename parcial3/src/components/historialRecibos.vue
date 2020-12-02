
<template>
    <div>
         <h1>
            {{regresarFecha(recAux.FechaPago.toDate())}}
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
           <h2>Todos los recibos</h2> 
            <ul>
                <li v-for="rec in recibos" :key="rec.id">
                <p class="pListas">Recibo pagado:</p><p v-if="rec.Pagado == true">Pagado</p><p v-if="rec.Pagado != true">No Pagado</p><hr/>
                <p class="pListas">Saldo Pagado:</p> {{rec.Saldo}} <hr>
                <p class="pListas">Watts Usados en el semestre:</p> {{rec.Wattage}}<hr>
                <p class="pListas">Fecha</p> <p>{{regresarFecha(rec.FechaPago.toDate())}}</p>
                </li>
            </ul>
        <form @submit.prevent="mostrarRecibos">
            <button type="submit">Mostrar Recibos</button>
        </form>
        <form @submit.prevent="exit">
            <button type="submit">Cerrar Sesión</button>
        </form>
        
    </div>
</template>

<script>
import {db} from '../firebase.js'
import router from '../router'
import moment from 'moment'
export default {
    name: "historialRecibo",

    data(){
        return{
            recibos: [],
            noRecibos: [],
            status: true,
            id : this.$route.params.id,
            recAux:[],
        }   
        
    },
    created() {
        this.getRecibosNo();
        this.mostrarUltimoRecibo();
        
    },
    methods: {
        
        async getRecibosNo(){
            // eslint-disable-next-line no-unused-vars
            let accs = this.$route.params.id;
            
            var historialCollection= db.collection("Historial/");
            var consultaArreglos= historialCollection.where(this.$route.params.id, '!=', null)
            .get()
                .then(snapshot=>{
                    if(snapshot.empty){
                        alert("Tabla vacia!");
                        return
                    }else{
                        console.log(consultaArreglos);
                    }
                    snapshot.forEach(doc=>{
                        console.log(doc.data()[accs]);
                        this.noRecibos=doc.data()[accs]
                        console.log(this.noRecibos)

                    })
                    
               })
                .catch(err => {
                        console.log('Error getting documents', err);
                    });
                
        },
        async mostrarRecibos(){ //esta. acano jjsjsjs
            
            var recibos1= db.collection("Tickets");
            
            let e=0
            
            for(e in this.noRecibos){
                 var consulta= recibos1.where("itemID", '==', this.noRecibos[e])
                await consulta.get()
            //this.recibos=consulta.docs.map(doc => ({id: doc.id,...doc.data()}))
                .then(snapshot=>{
                    if(snapshot.empty){
                        alert("Tabla vacia!");
                        return
                    }else{
                        console.log(consulta);
                    }
                    snapshot.forEach(doc=>{
                        console.log(doc.id,"=>",doc.data());
                        this.recibos[e]=doc.data()
                        
                    })
                    
               })
                .catch(err => {
                        console.log('Error getting documents', err);
                    });
            }    
        },
        mostrar: function(){
            let accs = this.$route.params.id;
            this.status=!this.status;
            db.collection('Usuario').doc(accs).update({Status:this.status});
        },
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
            return moment(segs).format("DD/MM/YY");

       },
        exit(){
            router.push('/');
        },       
    },
}
    
</script>
