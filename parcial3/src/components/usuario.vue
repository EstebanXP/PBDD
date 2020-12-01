<template>
    <div>
        <h1>Ingresa a tu cuenta</h1>
        <form @submit.prevent="contra">
            <input type="text" v-model="contrato">
            <button type="submit">Registrar</button>
        </form>
    </div>
</template>

<script>

import {db} from '../firebase.js'
export default {
     name:"usuario",
        data(){
            return {
            usuarios: [],
            contrato: ''
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
                        snapshot.forEach(doc => {
                            console.log(doc.id, '=>', doc.data());
                        });
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });
                
            }
        },
}
</script>

