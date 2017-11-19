<template>
    <div>
        <h1 class="title">Schedule</h1>
        <div v-if="!loader" class="grid-x grid-margin-x schedule-container">
            <div v-for="data in schedule" class="small-12 cell doctor-container">
                <div class="doctor-header">
                    <h3>Dr.{{data.name}}</h3>
                    <p>{{data.department.toUpperCase()}}</p>
                    <div class="grid-x timings">
                        <div class="cell availability" v-for="day in data.available">
                            <p class="available-day"><b>{{day.days}}</b></p>
                            <p class="available-time">{{day.time}}</p>
                        </div>
                    </div>
                </div>
                <div class="grid-x doctor-footer">
                    <select class="small-6 medium-3 large-3 cell" v-model="selectedDate">
                        <option 
                            v-for="bookableDate in getAvailableDates(data.available)"
                            :value="`${bookableDate.getFullYear()}-${bookableDate.getMonth()+1}-${bookableDate.getDate()}`"
                            >
                            {{days[bookableDate.getDay()]}}, {{bookableDate.getDate()}} {{months[bookableDate.getMonth()]}}
                        </option>
                    </select>
                    <button class="small-6 medium-4 large-3 cell care-stack-button button" @click="bookAppointment(data)">Book An Appointment</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "doctor-schedule",
        computed: {
            schedule: function(){
                return this.$store.getters.getDoctorSchedule;
            }
        },
        data(){
            return {
                loader: false,
                selectedDate: "",
                bookableDates: [],
                days: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            }
        },
        beforeMount(){
            this.setDates();
            if(this.$store.getters.isDoctorListEmpty)
                this.$store.dispatch("fetchDoctorSchedule");
        },
        methods: {
            bookAppointment(doctor){
                console.log(doctor.department);
                this.$store.commit("setBookingParameters",{
                    doctor,
                    department: doctor.department,
                    date: this.selectedDate
                });
                this.$router.push('/dashboard/book-appointment');
            },
            setDates(){
                var date = new Date(),i;
                var startDate = date.getDate();
                for(i=0;i<7;++i){
                    date.setDate(startDate+i);
                    this.bookableDates.push(new Date(date));
                }
            },
            getAvailableDates(dates){
                return this.bookableDates.filter(bookableDate=>{
                    if(dates.find(dateAvailable=>dateAvailable.days == this.days[bookableDate.getDay()]))
                        return true;
                    return false;
                })
            }
        }
    }
</script>
<style scoped>
    .doctor-container{
        border-radius: 3px;
        background: white;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .doctor-header{
        text-align: left;
        background: #3d3258;
        padding: 20px;
    }
    .doctor-header>h3{
        font-family: 'Dosis', sans-serif;
        color: #e8e8e8;
    }
    .doctor-header>p{
        color: rgba(233, 233, 233, 0.71);
        font-size: 15px;
        font-family: 'Muli', sans-serif;
    }
    .doctor-footer{
        padding: 10px 10px;
        justify-content: right;
    }
    .availability{
        margin: 5px 1px;
        text-align: center;
        color: white;
        border-right: 2px groove #53537d;
        width: 12.26%;
        font-size: 12px;
    }
    .availability>.available-day{
        font-family: 'Dosis', sans-serif;
        font-size: 15px;
        color: #db6767;
    }
    .availability>.available-time{
        font-family: 'Muli', sans-serif;
    }
    .timings{
        justify-content: left;
        margin: 10px;
    }
    .schedule-container{
        margin: 5px;
    }
    button,select{
        margin: 0 5px;
    }
</style>