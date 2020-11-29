<template>
    <div>
        <h1>Ingresa a tu cuenta</h1>
        <ul>
            <li>ya</li>
            <li v-for="libro in usuarios" :key="libro.Status">
                ID: {{libro.Contraseña}} ||
                
               
                
                

            </li>
        </ul>
    </div>
</template>

<script>
import {db} from '../firebase.js'
export default {
     name:"usuario",
        data(){
            return {
            usuarios: []
            }
        },
        created(){
            this.contra();
        },
    methods: {
            async contra(){
                const data = await db.collection("Usuario").get();
                this.usuarios = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(this.usuarios)
            }
        },
}
</script>

