<template>
    <div class = "flex items-center relative w-[505px] h-[300px] rounded-md mr-7 shadow-md" :style="{backgroundColor: bg}">
        <img class="mt-[95px] ml-[60px] w-[400px] h-[200px]"  :src="img" alt="">
        <div class = "w-[271px] h-[48px] absolute left-[48px] top-[75px] font-quicksand font-semibold text-24">{{ quote }}</div>
        <shopnow class="absolute top-[190px] left-[45px] border-none rounded-3" :btnBg="btncolor"></shopnow>
    </div>
</template>

<script>
import shopnow from './shopnow.vue'
    export default{
        name: "promotion",
        components:{
            shopnow,
        },
        props: {
            bg : String,
            img: String,
            quote: String,
            btncolor: String
        }
    }

</script>
<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");

     
   
</style>
