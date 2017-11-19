<template>
    <div>
        <div>
            <h1 class="title">Book Appointment</h1>
        </div>
        <div class="grid-x grid-padding-x">
            <div class="small-2 cell"></div>
            <div class="small-4 cell department-select">
                <label for="department">Select Department</label>
                <select v-model="departmentFilter" id="department">
                    <option v-for="department in departments">{{department}}</option>
                </select>
            </div>
            <div class="small-4 cell date-container">
                <label for="select-date">Select Date</label>
                <input type="date" :min="today" :max="lastDate" v-model="selectedDateString" />
            </div>
        </div>
        <div class="grid-x grid-padding-x doctor-select-area">
            <div class="small-4 cell"></div>
            <div class="small-4 cell doctorselector" v-if="selectedDateString.length>0">
                <div v-if="choosableDoctors.length>0">
                    <label for="doctor-select">Select doctor</label>
                    <select v-model="selectedData.doctor" id="doctor-select">
                        <option v-for="availableDoctor in choosableDoctors" :value="availableDoctor">
                            {{availableDoctor.name}}
                        </option>
                    </select>
                </div>
                <div v-else-if="departmentFilter.length==0"><p>Select department</p></div>
                <div v-else>
                    <p>No doctors available for consultation in the given date</p>
                </div>
            </div>
            <div v-else class="small-4 cell"><p>Please select a date</p></div>
        </div>
        <div>
            <div>
                <button 
                    class="button" 
                    @click="confirmBooking"
                    >
                    Book Appointment
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            doctors: function(){
                return this.$store.getters.getDoctorSchedule;
            },
            selectedData: function(){
                return this.$store.getters.getBookedData;
            },
            departments: function(){
                return this.$store.getters.getDepartments;
            },
            selectedDateObject: function(){
                if(this.selectedDateString.length>0)
                    return new Date(this.selectedDateString);
                return null;
            },
            selectedDateString:{
                get(){
                    return this.$store.getters.getBookingDate;
                },
                set(newDate){   
                    this.$store.commit('setBookingDate', newDate);
                }
            },
            departmentFilter: {
                get(){
                    return this.$store.getters.getBookingDepartment;
                },
                set(newDept){
                    this.$store.commit('setDepartment', newDept);
                }
            },
            choosableDoctors: function(){
                if(this.selectedDateString.length>0 && this.selectedDateObject!=null)
                    return this.doctors.filter(doctor=>{
                        if(doctor.available.find(date => date.days == this.days[this.selectedDateObject.getDay()]) && doctor.department == this.departmentFilter)
                            return true;
                        // this.$store.commit('clearBookingData');
                        return false;
                    })
                return [];
            },
            computedTime: function(){
                if(this.selectedData.doctor.doctorid){
                    const doctor = this.selectedData.doctor;
                    const day = doctor.available.find(dates => dates.days == this.days[this.selectedDateObject.getDay()]);
                    console.log(day);
                    // return "";
                    return day.time.split('-')[0];
                }
                else
                    return "";
            }
        },
        data(){
            return {
                allDates: [],
                showCredentialInputs: false,
                choosableDates: [],
                selectedDoctor: [],
                today: "",
                lastDate: "",
                days: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            }
        },
        created(){
            this.setDates();
        },
        beforeMount(){
            // this.$store.commit('clearBookingData');
            if(this.$store.getters.isDoctorListEmpty)
                this.$store.dispatch("fetchDoctorSchedule");
        },
        methods: {
            setDates(){
                var date = new Date();
                var i,dateToday = date.getDate();
                this.today = `${date.getFullYear()}-${date.getMonth()+1}-${dateToday}`;
                date.setDate(dateToday+7);
                this.lastDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
            },
            confirmBooking(){
                console.log("confirming booking");
                const bookingDate = `${this.selectedDateObject.getDate()}/${this.selectedDateObject.getMonth()}/${this.selectedDateObject.getFullYear()}`;
                var bookingData = {
                    googleid: this.$store.getters.getGoogleId,
                    doctorName: this.selectedData.doctor.name,
                    doctorid: this.selectedData.doctor.doctorid,
                    date: bookingDate,
                    time: this.computedTime,
                    email: this.$store.getters.getEmail
                };
                this.$store.dispatch("confirmBooking", bookingData);
                this.$router.push("/dashboard/booking-status");
            }
        }
    }
</script>

<style scoped>
    button.button{
        border-radius: 2px;
    }
    div.active-doctor{
        border: 2px solid #b9b9e7;
        background: #c0d3e9;
    }
    .doctor-style{
        cursor: pointer;
        border-radius: 3px;
        padding: 10px;
        border: 2px solid transparent;
    }
    .doctor-style:hover{
        border: 2px solid #b9b9e7;
    }
    .date-container{
        text-align: center;
        display: block;
    }
    .doctor-select-container{
        padding: 15px;
    }
    .select-date{
        border-radius: 3px;
    }
    label{
        color: #4c4c4c;
        font-family: 'Dosis', sans-serif;
        font-size: 18px;
    }
    p{
        color: rgb(90, 90, 90);
        font-family: 'Muli', sans-serif;
    }
    .doctor-select-area{
        margin-top: 40px;
    }
    .doctorselector{
        margin-bottom: 20px;
    }
    input, select{
        margin: 0 !important;
        outline: 0;
        
        color: #433a57;
    }
</style>