<template>
    <div class="container-base">
        <div class="grid-container hor-center"> 
            <div>
                <h2>OTP</h2>
            </div>
            <div class="grid-x">
                <div class="small-4 cell"></div>
                <div class="small-4 cell">
                    <input type="text" placeholder="Enter OTP here" v-model="otpVal" />
                </div>
            </div>
            <div v-if="!loader" class="grid-x buttons">
                <div class="small-1 cell">
                    <button class="button care-stack-button" @click="verifyOtp">Submit</button>
                </div>
                <div class="small-1 cell">
                    <button class="button success" @click="requestOtp">Resend</button>
                </div>
            </div>
            <div v-else-if="otpStatus == 'verifying'">
                Loading..
            </div>
            <div v-else-if="otpStatus == 'failed'">
                Failed to verify OTP
                <div>
                    <button class="button success" @click="verifyOtp">Submit</button>
                </div>
                <div>
                    <button class="button success" @click="requestOtp">Request Again</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        watch: {
            otpStatus: function(otpStatus){
                if(otpStatus == "success")
                    this.$router.push('dashboard/my-appointments');
            }
        },
        computed: {
            otpStatus: function(){
                return this.$store.getters.getVerificationStatus;
            },
            googleid: function(){
                return this.$store.getters.getGoogleId;
            },
            phoneNumber: function(){
                return this.$store.getters.getPhoneNumber;
            }
        },
        data(){
            return {
                otpVal: "",
                loader: false
            }
        },
        beforeMount(){
            this.requestOtp();
        },
        methods: {
            verifyOtp(){
                var data = {
                    otpno: this.otpVal,
                    googleid: this.googleid
                };
                this.loader = true;
                this.$store.dispatch("verifyOtp",data);
            },
            requestOtp(){
                var data = {
                    googleid: this.googleid,
                    mobilenumber: this.phoneNumber
                };
                this.$store.dispatch("prepareOtpVerification", data);
            }
        }
    }
</script>
<style scoped>
    .container-base{
        background: #3d3258;
        height: 100%;
    }
    input{
        margin: 0 !important;
        padding: 15px;
        height: 100%;
        background-position: right 3px center;
        font-size: 16px;
        outline: 0;
        background: #dedede;
        color: #433a57;
        box-shadow: inset 2px 1px 2px rgba(10,10,10,.1), inset -1px 1px 2px rgba(10,10,10,.1);
        border-radius: 10px;
    }
    input::placeholder{
        color: rgba(61, 50, 88, 0.47);
    }
    h2{
        font-family: 'Dosis', sans-serif;
        color: white;
        margin:0;
        padding: 25px;
    }
    .buttons{
        justify-content: center;
        margin-top: 20px;
    }
    .hor-center{
        position: relative;
        top: 30%;
        transform: translateY(-50%);
    }
</style>