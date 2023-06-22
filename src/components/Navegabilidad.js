import { reactive } from "vue";

export let estado = reactive({
     visibilidadCrearTicket:true,
     visibilidadMostrar:false,
     tickets:null,
     cambiarC(){
        if(this.visibilidadCrearTicket==false){
   
             this.visibilidadCrearTicket=true
             this.visibilidadMostrar=false
          }
     },
     async cambiarM(){
   
         try {
           const response = await fetch('http://127.0.0.1:8000/api/tickets/mostrar');
           if (response.ok) {
             const data = await response.json();
             this.tickets = data;

             if(this.visibilidadMostrar==false){
 
               this.visibilidadCrearTicket=false
                 this.visibilidadMostrar=true
              }
           } else {
             throw new Error('Error al obtener los tickets');
           }
         } catch (error) {
           console.error(error);
         }
       
   }
     
});