<template>
    <div>
        <div v-if="bookingStatus == 'booking'"><h1 class="title">Confirming Your Booking. Please Wait</h1></div>
        <div v-else-if="bookingStatus == 'success'">
            <h1 class="title">Booking Successful</h1>
            <h3>Your token no: {{bookingData.tokenno}}</h3>
            <p class="doctor-name">Doctor: {{bookingData.doctorName}}</p>
            <button class="button care-stack-button">
                <router-link to="/dashboard/my-appointments">Home</router-link>
            </button>
        </div>
        <div v-else-if="bookingStatus == 'failed'">
            <h2>Booking Failed</h2>
            <button class="button care-stack-button">
                <router-link to="/dashboard/my-appointments">Home</router-link>
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "booking-status",
        computed: {
            bookingStatus: function(){
                return this.$store.getters.getBookingStatus;
            },
            bookingData: function(){
                return this.$store.getters.getBookedData;
            }
        },
        beforeDestroy(){
            this.$store.commit('clearBookingData');
        }
    }
</script>
<style scoped>
    .doctor-name{
        font-size: 20px;
    }
    h2{
        color: #7b7b7b;
        font-family: 'Muli', sans-serif;
    }
    h3,p{
        font-family: 'Muli', sans-serif;
    }
</style>