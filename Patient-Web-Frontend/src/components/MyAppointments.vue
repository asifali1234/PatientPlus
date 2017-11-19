<template>
    <div>
        <h1 class="title">My Appointments</h1>
        <div v-if="cancelling">
            <h3>Cancelling..</h3>
        </div>
        <div v-else-if="appointments.length>0" class="grid-x">
            <div class="small-6 medium-4 large-3 cell card" v-for="appointment in appointments">
                <div class="card-header">
                    <p class="header-title">APPOINTMENT WITH</p>
                    <h3>Dr. {{appointment.doctorName}}</h3>
                    <p>Date: {{appointment.date}}</p>
                </div>
                <div class="card-footer">
                    <button class="button alert" @click="cancelAppointment(appointment)">Cancel Appointment</button>
                </div>
            </div>
        </div>
        <div class="no-appointment" v-else>
            <p>You don't have any pending appointments</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "my-appointments",
        computed: {
            appointments: function(){
                return this.$store.getters.getCurrentAppointmentList;
            },
            cancelling: function(){
                return this.$store.getters.getCancellingStatus;
            }
        },
        watch:{
            cancelling: function(val){
                if(val == true){
                    this.cancelFlag = true;
                }
                else if(this.cancelFlag){
                    this.refreshList();
                }
            }
        },
        data(){
            return {
                cancelFlag: false
            }
        },
        beforeMount(){
            this.refreshList()
        },
        methods: {
            refreshList(){
                var data = {
                    googleid: this.$store.getters.getGoogleId
                };
                this.$store.dispatch("fetchMyAppointments", data);
            },
            cancelAppointment(appointment){
                console.log(appointment);
                this.$store.dispatch('cancelAppointment',appointment);
            }
        }
    }
</script>
<style scoped>
    .card{
        margin: 10px;
        border-radius: 3px;
        overflow: hidden;
    }
    .card-header{
        padding: 10px;
        background: #3d3258;
        text-align: left;
    }
    .card-header>h3{
        font-family: 'Dosis', sans-serif;
        color: #e8e8e8;
        
    }
    .card-header>p{
        color: rgba(233, 233, 233, 0.71);
        font-size: 15px;
        font-family: 'Muli', sans-serif;
    }
    .card-footer{
        padding: 10px;
        text-align: right;
        background: white;
    }
    p.header-title{
        color: #db6767;
        margin-bottom: 5px;
        font-size: 12px;
    }
    button{
        margin: 0px !important;
    }
    .no-appointment{
        font-family: 'Muli', sans-serif;
        color: #757575;
    }
</style>