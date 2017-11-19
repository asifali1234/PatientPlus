<template>
    <div>
        <h1 class="title">Previous Appointments</h1>
        <div v-if="appointments.length!=0" class="grid-x flex-container">
            <div v-for="appointment in appointments" class="small-12 medium-10 large-10 cell card">
                <div class="card-header">
                    <h3>Dr. {{appointment.doctorName}}</h3>
                    <p>Date: {{appointment.date}}</p>
                </div>
            </div>
        </div>
        <div v-else class="no-appointment">
            <p>You haven't had any appointments yet.</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "my-appointments",
        computed: {
            appointments: function(){
                return this.$store.getters.getPreviousAppointments;
            }
        },
        data(){
            return {
            }
        },
        beforeMount(){
            var data = {
                googleid: this.$store.getters.getGoogleId
            };
            this.$store.dispatch("fetchPreviousAppointments",data);
        }
    }
</script>
<style scoped>
    .flex-container{
        justify-content: space-around;
    }
    .card{
        margin: 0px;
        border: 1px solid #7b7b7b;
        border-radius: 3px;
        overflow: hidden;
    }
    .card-header{
        padding: 10px;
        background: white;
        text-align: left;
        display: flex;
        justify-content: space-between;
    }
    .card-header>h3{
        font-family: 'Dosis', sans-serif;
        color: #424242;  
    }
    .card-header>p{
        color: rgba(233, 233, 233, 0.71);
        font-size: 15px;
        font-family: 'Muli', sans-serif;
        color: rgb(38, 9, 107);
    }
    .no-appointment{
        font-family: 'Muli', sans-serif;
        color: #757575;
    }
</style>