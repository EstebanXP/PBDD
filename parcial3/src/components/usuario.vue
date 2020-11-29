<template>
    <div>
        <h1>Ingresa a tu cuenta</h1>
    </div>
</template>

<script>
import {db} from '../firebase.js'
export default {
    methods: {
            async listLibros(){
                const data = await db.collection("Libros").get();
                this.libros = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(this.libros)
            }
        },
}
</script>

