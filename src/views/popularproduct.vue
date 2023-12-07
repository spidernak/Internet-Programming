<template>
    <Menu :Featured="Feature"></Menu>
    <div class="Categories-Row">
      <category
        v-for="i in category"
        :key="i.Categories"
        :bg="i.bg"
        :ItemName="i.ItemName"
        :Img="i.Img"
        :ItemNumber="i.ItemNumber">
      </category>
    </div>
    <div class="Promotions-Row">
      <promotion
        v-for="i in promotion"
        :key="i.Promotions"
        :bg="i.bg"
        :Img="i.Img"
        :Text="i.Text"
        :bgBtn="i.btncolor"
        :TextBtn="i.TextBtn" />
    </div>
    <Menu :Featured="Popular"></Menu>
    <div class="Product-Row">
      <product
        v-for="i in product"
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
  import { useProductStore } from "../stores/Product";
  import { mapState } from "pinia";
  import Menu from "../components/Menu.vue";
  import product from "../components/product.vue";
  import AddButton from "../components/AddButton.vue";
  import PlusButton from "../components/PlusButton.vue";
  import promotion from "../components/promotion.vue";
  import shopnow from "../components/shopnow.vue";
  import category from "../components/category.vue";
  export default {
    name: "SuperProject",
    components: {
      category,
      promotion,
      shopnow,
      Menu,
      product,
      AddButton,
      PlusButton,
    },
    data() {
      return {
        Feature: "Featured Categories",
        Popular: "Popular Products",
      };
    },
    computed: {
      ...mapState(useProductStore, ["product"]),
      ...mapState(useProductStore, ["category"]),
      ...mapState(useProductStore, ["promotion"]),
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
  