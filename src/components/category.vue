<template>
    <div class="flex items-center flex-col w-[137px] h-[177px] font-bold mr-[25px] flex-wrap rounded-md" :style = "{backgroundColor: bc}">
        <img class="img"  :src="img" alt="">
        <div class="pname">{{ pname }}</div>
        <div class="amount">{{ amount }}</div>
    </div>
</template>


<script>
    export default{
        name: "category",
        props: {
            img: String,
            pname: String,
            bc: String,
            amount: String,
        }
    }
</script>

<style scoped>
     @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Quicksand:wght@300;400&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400&display=swap');
    .pname{
        color: var(--NestMart-TextHeading, #253D4E);
        text-align: center;
        font-family: Quicksand;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; 
        letter-spacing: -0.006px;
    }
    .amount{
        color: var(--NestMart-Text-Muted, #B6B6B6);
        text-align: center;
        font-family: Lato;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; 
    }
     
</style>