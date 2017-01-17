<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>

*{
    padding:0;
    margin:0;
}
ul li{
    list-style: none;
}
body{
    background-color: #f9f9f9;
}
</style>
