<template>
    <div>
        <div class="logo">
            <img src="../assets/images/p+.jpg" />
        </div>
        <div>
            <h2>Patient +</h2>
        </div>
        <div v-if="!loader">
            <google-sign-in @signedIn="getCredentials"></google-sign-in>
        </div>
        <div v-else-if="!actionCompleted">
            Loading...
        </div>
    </div>
</template>

<script>
    import GoogleSignInButton from "./GoogleSignInButton";
    export default {
        name: "sign-in",
        data(){
            return {
                loader: false,
                actionCompleted: false,
                registered: false
            }
        },
        watch:{
            actionCompleted: function(comepletedFetch){
                if(comepletedFetch && this.registered)
                    this.navigate('dashboard/my-appointments');
                else if(comepletedFetch && !this.registered){
                    // this.setStorage(this.googleUser);
                    this.navigate('signup');
                }
            }
        },
        components: {
            'google-sign-in': GoogleSignInButton
        },
        methods: {
            getCredentials(googleUser){
                console.log(googleUser);
                this.isRegistered(googleUser);
            },
            navigate(link){
                this.$router.push(link);
            },
            setStorage(googleUser){
                localStorage.setItem('user-name',googleUser.w3.ig);
                localStorage.setItem('user-dp',googleUser.w3.Paa);
                localStorage.setItem('user-email',googleUser.w3.U3);
                localStorage.setItem('user-googleid',googleUser.w3.Eea);
            },
            isRegistered(googleUser){
                var options= {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        googleid: googleUser.w3.Eea
                    })
                },_this = this;
                fetch('http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/checkUserexists',options)
                .then(response=>{
                    _this.loader = true;
                    return response.json()
                })
                .then(data=>{
                    console.log(data);
                    this.registered = data.registered;
                    this.setStorage(googleUser);
                    this.actionCompleted = true;
                })
                .catch(err=>console.log(err));
            }
        }
    }
</script>

<style>
    .logo>img{
        width: 300px;
    }
</style>