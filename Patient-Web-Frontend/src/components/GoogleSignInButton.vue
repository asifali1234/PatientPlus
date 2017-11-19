<template>
    <div>
        <button class="button alert" ref="googleSignIn">Sign in Using Google</button>
    </div>
</template>

<script>
    export default {
        name: "google-sign-in",
        mounted(){
            window.gapi.load("auth2",function(){
                    const auth2 = window.gapi.auth2.init({
                        client_id: "191012504879-vs5sv3jbnq82dttsanje6e9h942phlvv.apps.googleusercontent.com",
                        cookiepolicy: "single_host_origin"
                    });
                    auth2.attachClickHandler(this.$refs.googleSignIn,{},googleUser=>{
                        this.$emit('signedIn',googleUser);
                    },err=>console.log(err));
            }.bind(this));
        }
    }
</script>