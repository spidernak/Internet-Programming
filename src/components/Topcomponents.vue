 <template>
    <div class="flex items-center w-[500px] h-[300px] bg-gray-700 bg-opacity-100 rounded-md mr-5 shadow-md  " :style="{backgroundColor: cmbg}" >
      <div >
        <p class="w-[271px] h-[48px] relative left-48 top-75 font-quicksand font-semibold text-24">{{ title }}</p>
        <button class="rounded-md border-none left-[48px] top-[240px] absolute" :btnBg="btncolor"> </button>
      </div>
      <img class="mt-[90px] ml-[50px] w-[400px] h-[180px]" :src="img" alt="">


    </div>
 </template>

 <script>
    import Promotion from './Promotion.vue';
    export default{
      name: "Topcomponents",
      components: {
        Promotion,
      },
      props:{
        cmbg: String,
        img: String,
        title: String,
        btncolor: String,
      },
    };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");

</style>