<template>
    <div class="container">
        <div class="patient-menu">
            <patient-menu></patient-menu>
        </div>
        <div class="content-area">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import PatientMenu from './PatientMenu';
    export default {
        name: 'dashboard',
        components: {
            "patient-menu": PatientMenu
        }
    }
</script>

<style>
    h1.title{
        color: #7b7b7b;
        font-family: 'Dosis', sans-serif;
        margin-bottom: 60px;
    }
    h2{
        color: #3d3258;
        
    }
    @media(min-width: 1300px){
        .container{
            display: flex;
            height: 100%;
        }
        .patient-menu{
            width: 25%;
        }
        .content-area{
            padding-top: 60px;
            width: 75%;
            background: #e8e8e8;
            overflow: auto;
        }
    }
</style>