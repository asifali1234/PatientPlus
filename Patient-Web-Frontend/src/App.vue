<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  overflow: hidden;
}
button.button{
  font-family: 'Muli', sans-serif;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
}
.care-stack-button{
  background: #eaeaea;
  color: black;
  border: 1px solid rgba(102, 87, 140, 0.56);
}
.care-stack-button:hover{
  background: #b8b2c5;
  color: black;
}
</style>
