<template>
  <h1 title="header">Loading..</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  beforeMount(){
    var status = localStorage.getItem('user-googleid');
    console.log(status);
    if(status==null)
      this.$router.push('/signin');
    if(status.length==0)
       this.$router.push('/signin');
    this.$router.push('/dashboard/my-appointments');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1.title{
        color: #7b7b7b;
        font-family: 'Dosis', sans-serif;
        top: 50%;
        transform: translateY(-50%);
  }
</style>
