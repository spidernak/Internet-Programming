<template>
    <button class="text-white flex items-center flex-row p-2.5 w-[120px] h-[30px] rounded-md" :style="{backgroundColor:btnBg}">
        <p class="text-[12px] font-bold">Shop Now</p>
        <font-awesome-icon :icon="['fas', 'arrow-right']" style="color: white; margin-left: 15px;"/>
    </button>
 </template>

 <script>
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { fas } from "@fortawesome/free-solid-svg-icons";
    import { library } from "@fortawesome/fontawesome-svg-core";

    library.add(fas);

    export default{
        name: "shopnow",
        components: {
            FontAwesomeIcon,
        },
        props:{
            btnBg: String,
        }
    };
</script>

<style scoped>
     @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap');

</style>