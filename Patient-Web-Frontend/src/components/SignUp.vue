<template>
    <div class="container-base">
        <div class="grid-container hor-center">
            <div class="signup-text">
                <h2>Complete Signup</h2>
                <p>Welcome <b>{{username}}</b>, we just need to collect a few more data</p>
            </div>
            <div class="grid-x">
                <div class="small-10 medium-8 large-6 cell sign-up-fields">
                    <div class="grid-x">
                        <div class="small-6 cell top-left">
                            <input type="text" placeholder="Age" v-model="userObject.age" />
                        </div>
                        <div class="small-6 cell top-right">
                            <select id="gender" v-model="userObject.gender" :class="{'select-selected':userObject.gender != ''}">
                                <option value="">-gender-</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <textarea type="textarea" placeholder="Address" v-model="userObject.address"></textarea>
                    </div>
                    <div>
                        <div>
                            <select :class="{'select-selected':userObject.bloodGroup != ''}" name="blood-group" v-model="userObject.bloodGroup">
                                <option value="">-blood group-</option>
                                <option value="O+ve">O positive</option>
                                <option value="O+ve">O negative</option>
                                <option value="O+ve">A positive</option>
                                <option value="O+ve">A negative</option>
                                <option value="O+ve">B positive</option>
                                <option value="O+ve">B negative</option>
                                <option value="O+ve">AB positive</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div class="bottom">
                            <input type="text" placeholder="Phone Number" v-model="userObject.phoneNumber" />
                        </div>
                        <p class="signup-text">We use this phone number to verfy your identity by sending an OTP</p>
                    </div>
                </div>
            </div>
            <div v-if="!loader" class="signup-text">
                <button class="button" @click="signup">Submit</button>
            </div>
            <div v-else-if="!actionComplete">Loading....</div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'signup',
        watch: {
            actionComplete: function(action){
                if(action){
                    this.$router.push('otp-verify');
                }
            }
        },
        computed: {
            actionComplete(){
                return this.$store.getters.isActionComplete;
            },
            username(){
                return this.$store.getters.getUsername;
            }
        },
        data(){
            return {
                userObject: {
                    age: "",
                    gender: "",
                    address: "",
                    bloodGroup: "",
                    phoneNumber: ""
                },
                loader: false
            }
        },
        methods: {
            signup(){
                this.userObject.name = localStorage.getItem('user-name');
                this.userObject.email = localStorage.getItem('user-email');
                this.userObject.photoUrl = localStorage.getItem('user-dp');
                this.userObject.googleid = localStorage.getItem('user-googleid');
                this.loader = true;
                this.$store.dispatch('register',this.userObject);
            }
        }
    }
</script>

<style scoped>
    .signup-text{
        color: rgba(206, 206, 206, 0.85);
        font-family: 'Muli', sans-serif;
        padding-bottom: 15px 0px;
    }
    .signup-text>p{
        font-size: 20px;
    }
    .signup-text>h2{
        font-family: 'Dosis', sans-serif;
        color: white;
        margin:0;
        padding: 25px;
    }
    .container-base{
        background: #3d3258;
        height: 100%;
    }
    .hor-center{
        position: relative;
        top: 40%;
        transform: translateY(-50%);
    }
    .sign-up-fields{
        margin: auto;
    }
    input[type=text],select,textarea {
        margin: 0 !important;
        padding: 15px;
        height: 100%;
        background-position: right 3px center;
        font-size: 16px;
        outline: 0;
        background: #dedede;
        color: #433a57;
        box-shadow: inset 2px 1px 2px rgba(10,10,10,.1), inset -1px 1px 2px rgba(10,10,10,.1);
    }
    input[type=text]::placeholder, select, textarea::placeholder{
        color: rgba(61, 50, 88, 0.47);
    }
    .top-left>input{
        border-top-left-radius: 10px;
    }
    .top-right>select{
        border-top-right-radius: 10px;
    }
    .bottom>input{
        border-bottom-left-radius:10px;
        border-bottom-right-radius: 10px;
    }
    .select-selected{
        color: #433a57;
    }
</style>