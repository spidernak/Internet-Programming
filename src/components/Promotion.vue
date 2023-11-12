 <template>
    <button :style="{backgroundColor:btncolor}">
        <p class="font-bold text-[12px]">Shop Now</p>
        <font-awesome-icon :icon="['fas', 'arrow-right']" style="color: white; margin-left: 15px;"/>
    </button>
 </template>

 <script>
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { fas } from "@fortawesome/free-solid-svg-icons";
    import { library } from "@fortawesome/fontawesome-svg-core";

    library.add(fas);

    export default{
        name: "Promotion",
        components: {
            FontAwesomeIcon,
        },
        props:{
            btncolor: String,
        }
    };
</script>

<style scoped>
     /* @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap'); */

</style>