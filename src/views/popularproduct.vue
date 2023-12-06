<template>
    <!-- <ButtonAdd></ButtonAdd> -->
    <!-- <ButtonPlus></ButtonPlus> -->
    <!-- <Menu/> -->
    <Menu :Featured="Feature"></Menu>
    <div class="Categories-Row">
      <Categories
        v-for="i in Categories"
        :key="i.Categories"
        :bg="i.bg"
        :ItemName="i.ItemName"
        :Img="i.Img"
        :ItemNumber="i.ItemNumber">
      </Categories>
    </div>
    <div class="Promotions-Row">
      <Promotions
        v-for="i in Promotions"
        :key="i.Promotions"
        :bg="i.bg"
        :Img="i.Img"
        :Text="i.Text"
        :bgBtn="i.btncolor"
        :TextBtn="i.TextBtn" />
    </div>
    <Menu :Featured="Popular"></Menu>
    <div class="Product-Row">
      <Product
        v-for="i in Product"
        :key="i.Product"
        :Value="i.Value"
        :Bg_value="i.Bg_value"
        :Img="i.Img"
        :Title="i.Title"
        :Star="i.Star"
        :Supvalue="i.Supvalue"
        :Subvalue="i.Subvalue"
        :Bgbtn="i.Bgbtn"
        :Borderbtn="i.Borderbtn" />
      <!-- :Text="i.Text" -->
      <!-- :Arrow="i.Arrow"  -->
    </div>
  </template>
  
  <script>
  import { useProductStore } from "../stores/ProductStores";
  import { mapState } from "pinia";
  import Menu from "../components/Menu.vue";
  import Categories from "../components/Categories.vue";
  import Promotions from "../components/Promotions.vue";
  import Button from "../components/Button.vue";
//   import product from "../components/product.vue";
  import ButtonAdd from "../components/ButtonAdd.vue";
  import ButtonPlus from "../components/ButtonPlus.vue";
  // import Img from "../assets/images/Group 1.png";
  import PD1 from "../assets/images/mango.png"
  import PD2 from "../assets/images/corn.png"
  import PD3 from "../assets/images/packoforange.png"
  import PD4 from "../assets/images/chiily.png"
  import PD5 from "../assets/images/lemons.png"
  import PD6 from "../assets/images/chicken.png"
  import PD7 from "../assets/images/fish.png"
  import PD8 from "../assets/images/cow.png"
  import PD9 from "../assets/images/pork.png"
  import PD10 from "../assets/images/noidea.png"
  export default {
    name: "SuperProject",
    components: {
      Categories,
      Promotions,
      Button,
      Menu,
      Product,
      ButtonAdd,
      ButtonPlus,
    },
    data() {
      return {
        Feature: "Featured Categories",
        Popular: "Popular Products",
        Product: [
        {
          id: "1",
          Value: "-17%",
          Bg_value: "rgba(59, 183, 126, 1)",
          Img: PD1,
          Title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "rgba(255, 255, 255, 1)",
          Borderbtn: "1px solid rgba(59, 183, 126, 1)",
          Text: "1",
          Arrow: "+",
        },
        {
          id: "2",
          Value: "Hot",
          Bg_value: "rgba(253, 110, 110, 1)",
          Img: PD2,
          Title: "All Natural Itallan-Style Chicken Meatballs",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "3",
          Value: "sale",
          Bg_value: "rgba(253, 192, 64, 1)",
          Img: PD3,
          Title: "Angli's Boomchickapop Sweet & Salty Kettle Core",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
  
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "4",
          Value: "",
          Bg_value: "",
          Img: PD4,
          Title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
  
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "5",
          Value: "",
          Bg_value: "",
          Img: PD5,
          Title: "Blue Diamond Aimonds Lightly Salted Vegetables",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
  
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "6",
          Value: "",
          Bg_value: "",
          Img: PD6,
          Title: "Chobanl Complete Vanilla Greek Yogurt",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
  
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "7",
          Value: "sale",
          Bg_value: "rgba(253, 192, 64, 1)",
          Img: PD7,
          Title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "8",
          Value: "",
          Bg_value: "",
          Img: PD8,
          Title: "Encore Seafoods Stuffed Alaskan Salman",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "9",
          Value: "",
          Bg_value: "",
          Img: PD9,
          Title: "Gorton's Beer Battered Fish Fillets with solf paper",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
          Text: "Add",
          Arrow: "+",
        },
        {
          id: "10",
          Value: "Hot",
          Bg_value: "rgba(253, 110, 110, 1)",
          Img: PD10,
          Title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
          Star: "",
          Supvalue: "$2.51",
          Subvalue: "$2.80",
          Bgbtn: "#DEF9EC",
          Borderbtn: "1px solid rgba(255, 255, 255, 1)",
          Text: "Add",
          Arrow: "+",
        },
      ],
      };
    },
    computed: {
      ...mapState(useProductStore, ["Categories"]),
      ...mapState(useProductStore, ["Promotions"]),
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@300;400;500;600;800&family=Quicksand:wght@400;600;700&display=swap");
  
  .Categories-Row {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  
  .Promotions-Row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 30px; */
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .Product-Row {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  </style>
  