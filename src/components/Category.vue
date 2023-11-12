 <template>
    <div class=" flex flex-col items-center w-[137px] h-[177px] font-thin relative m-[20px] rounded-md" :style="{backgroundColor: bgcolor}">
        <img class="w-[120px] h-[120px]" style="width:120px; height: 120px;" src="img" alt=""/>
        <div style="position: absolute; top:120px ;color:#253D4E;font-family: Quicksand;font-size: 16px;">{{ productname }}</div>
        <div style="position: absolute;bottom:15px;color:rgba(182, 182, 182, 1);font-family: Lato;font-size: 12px; size: 12px;">{{ amount }}</div>
    </div>
 </template>


<script>
    export default{
        name: "Category",
        props: {
            img: String,
            productname: String,
            bgcolor: String,
            amount: String,
        },
    };
</script>

<style scoped>
     /* @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Quicksand:wght@300;400&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400&display=swap'); */

</style>

<!-- <template>
    <h1 class="text-[50px] text-red-500 ml-[20px]">hello</h1>
</template> -->