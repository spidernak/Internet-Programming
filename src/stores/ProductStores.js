import { defineStore } from "pinia";
import P1 from "../assets/images/onion.png";
import P2 from "../assets/images/Group 1.png";
import P3 from "../assets/images/organic.png";
import C1 from "../assets/images/burger.png";
import C2 from "../assets/images/peach.png";
import C3 from "../assets/images/Kiwi.png";
import C4 from "../assets/images/apple.png";
import C5 from "../assets/images/snack.png";
import C6 from "../assets/images/plum.png";
import C7 from "../assets/images/vegetable.png";
import C8 from "../assets/images/headphone.png";
import C9 from "../assets/images/Cake.png";
import C10 from "../assets/images/orange.png";
import C11 from "../assets/images/ad.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";
import p9 from "../assets/images/p9.png";
import p10 from "../assets/images/p10.png";

export const useProductStore = defineStore("Product_Store", {
  state: () => ({
    Promotions: [
      {
        Text: "Everyday Fresh & Clean with Our Products",
        Img: P1,
        bg: "rgba(240, 232, 213, 1)",
        btncolor: "rgba(59, 183, 126, 1)",
        TextBtn: "Shop Now",
      },
      {
        Text: "Make your Breakfast Healthy annd Easy",
        Img: P2,
        bg: "rgba(243, 232, 232, 1)",
        btncolor: "rgba(205, 50, 17, 1)",
        TextBtn: "Shop Now",
      },
      {
        Text: "The best Organic Products Online",
        Img: P3,
        bg: "rgba(231, 234, 243, 1)",
        btncolor: "rgba(253, 192, 64, 1)",
        TextBtn: "Shop Now",
      },
    ],
    Categories: [
      {
        Img: C1,
        bg: "rgba(242, 253, 228, 1)",
        ItemName: "Burger",
        ItemNumber: "14 Items",
      },
      {
        Img: C2,
        bg: "rgba(255, 252, 235, 1)",
        ItemName: "Peach",
        ItemNumber: "17 Items",
      },
      {
        Img: C3,
        bg: "rgba(236, 255, 236, 1)",
        ItemName: "Oganic Kiwi",
        ItemNumber: "21 Items",
      },
      {
        Img: C4,
        bg: "rgba(254, 239, 234, 1)",
        ItemName: "Red Apple",
        ItemNumber: "68 Items",
      },
      {
        Img: C5,
        bg: "rgba(255, 243, 235, 1)",
        ItemName: "Snack",
        ItemNumber: "34 Items",
      },
      {
        Img: C6,
        bg: "rgba(255, 243, 255, 1)",
        ItemName: "Black plum",
        ItemNumber: "25 Items",
      },
      {
        Img: C7,
        bg: "rgba(242, 252, 228, 1)",
        ItemName: "Vegetables",
        ItemNumber: "65 Items",
      },
      {
        Img: C8,
        bg: "rgba(255, 252, 235, 1)",
        ItemName: "Headphone",
        ItemNumber: "33 Items",
      },
      {
        Img: C9,
        bg: "rgba(242, 252, 228, 1)",
        ItemName: "Cake & Milk",
        ItemNumber: "54 Items",
      },
      {
        Img: C10,
        bg: "rgba(255, 243, 255, 1)",
        ItemName: "Orange",
        ItemNumber: "63 Items",
      },
    ],
    Product: [
      {
        id: "1",
        Value: "-17%",
        Bg_value: "rgba(59, 183, 126, 1)",
        Img: [p1, p2, p3, p4, p5],
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
        Img: [p3, p1, p3, p4, p5],
        Title: "All Natural Itallan-Style Chicken Meatballs",
        Star: "",
        Supvalue: "$13.51",
        Subvalue: "$22.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "3",
        Value: "sale",
        Bg_value: "rgba(253, 192, 64, 1)",
        Img: [p2, p3, p1, p4, p5],
        Title: "Angli's Boomchickapop Sweet & Salty Kettle Core",
        Star: "",
        Supvalue: "$12.51",
        Subvalue: "$22.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",

        Text: "Add",
        Arrow: "+",
      },
      {
        id: "4",
        Value: "",
        Bg_value: "",
        Img: [p4, p1, p3, p2, p5],
        Title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        Star: "",
        Supvalue: "$22.51",
        Subvalue: "$32.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",

        Text: "Add",
        Arrow: "+",
      },
      {
        id: "5",
        Value: "",
        Bg_value: "",
        Img: [p5, p2, p3, p4, p1],
        Title: "Blue Diamond Aimonds Lightly Salted Vegetables",
        Star: "",
        Supvalue: "$72.51",
        Subvalue: "$82.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",

        Text: "Add",
        Arrow: "+",
      },
      {
        id: "6",
        Value: "",
        Bg_value: "",
        Img: [p10, p2, p3, p4, p5],
        Title: "Chobanl Complete Vanilla Greek Yogurt",
        Star: "",
        Supvalue: "$2.51",
        Subvalue: "$12.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",

        Text: "Add",
        Arrow: "+",
      },
      {
        id: "7",
        Value: "sale",
        Bg_value: "rgba(253, 192, 64, 1)",
        Img: [p7, p8, p3, p4, p9],
        Title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
        Star: "",
        Supvalue: "$17.51",
        Subvalue: "$32.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "8",
        Value: "",
        Bg_value: "",
        Img: [p8, p9, p6, p4, p5],
        Title: "Encore Seafoods Stuffed Alaskan Salman",
        Star: "",
        Supvalue: "$21.51",
        Subvalue: "$29.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "9",
        Value: "",
        Bg_value: "",
        Img: [p9, p2, p3, p7, p5],
        Title: "Gorton's Beer Battered Fish Fillets with solf paper",
        Star: "",
        Supvalue: "$11.51",
        Subvalue: "$22.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
      {
        id: "10",
        Value: "Hot",
        Bg_value: "rgba(253, 110, 110, 1)",
        Img: [p6, p9, p3, p4, p5],
        Title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
        Star: "",
        Supvalue: "$17.51",
        Subvalue: "$23.80",
        Bgbtn: "#DEF9EC",
        Borderbtn: "1px solid rgba(255, 255, 255, 1)",
        Text: "Add",
        Arrow: "+",
      },
    ],
  }),
  getters: {
    doublCount: (state) => state.count,
  },
});
