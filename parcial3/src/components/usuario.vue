<template>
    <div>
        <h1>Ingresa a tu cuenta</h1>
        <form @submit.prevent="contra">
            <input type="text" v-model="contrato" style="margin-bottom: 20px">
            <hr  style="border:0px"/>
            <button type="submit">Ingresar</button>
        </form>
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
            idUsuario: ''
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
                            return;
                        }
                        else{
                            snapshot.forEach(doc => {
                                console.log(doc.id, '=>', doc.data());
                                this.idUsuario=doc.id;
                            });
                            console.log(this.idUsuario)
                            router.push("/recibos")
                            
                        }
                        
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });
                
            }
        },
}
</script>

