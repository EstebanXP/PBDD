<template>
    <div>
        <h1>Bienvenido a CME Online</h1>
        <form @submit.prevent="contra">
            <p>Numero de Contrato</p>
            <input type="text" v-model="contrato" style="margin-bottom: 20px" required> 
            <hr/>
            <button type="submit">Ingresar</button>
        </form>
        <h2 style="color:crimson">{{warningContrato}}</h2>
    </div>
</template>

<script>

import {db} from '../firebase.js'
import router from '../router'
    
export default {
     name:"usuario",
        data(){
            return {
            usuarios: [],
            contrato: '',
            idUsuario: '',
            warningContrato: ''
            }
        },
        created(){
            
        },
    methods: {
            contra(){
                const refUsuarios = db.collection('Usuario');
                // eslint-disable-next-line no-unused-vars
                const query = refUsuarios.where('noContrato','==',this.contrato).get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No matching documents.');
                            this.warningContrato='No existe ese numero de contrato'
                            return;
                        }
                        else{
                            snapshot.forEach(doc => {
                                console.log(doc.id, '=>', doc.data());
                                this.idUsuario=doc.id;
                            });
                            console.log(this.idUsuario)
                            router.push("/recibos/" + this.idUsuario)
                            
                        }
                        
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                        this.warningContrato='Error. Intente de nuevo mas tarde, si el problema persiste contacte a su sucursal'
                    });
                
            }
        },
}
</script>

