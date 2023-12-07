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

export const useProductStore = defineStore("Product_Store", {
  state: () => ({
    promotion: [
      {
        Text: "Everyday Fresh & Clean with Our Products",
        // Img: "https://s3-alpha-sig.figma.com/img/de8c/488a/87b9ce16acd7436a6dec758331c840bc?Expires=1699833600&Signature=BopNMeaoYpayx-Epz2eU-MbKTcy37aptwt-6wMUbZ6Mt8k5wuNRsq-yfIYHMpIyAI0hFl6N~P2GQekhYEpysnvQ2tJebN~Omsv8lCoICbXONhWAd9iyfMQqvEjZ-74Eyi9DWiX8JQuclXSCY9zlrzedu2fwO8fJzbWF-zfAk49J9o3oRB3XUz9XXvAhPHQ5x7Eo5uzB9jluL1JzkmMzuYq8LRqBHJxwH3NBB3aoC5JmwL-~A1SfB6DRCUfElZSswO~7bGHfx5Q3zpV5d-t6xlkkc~EXCLGD0vRpoQSHe-8J9WS16pos4WUU-bYexswtrUJZMPcSwvtRGxu4DCUlKaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
        // Img: "https://s3-alpha-sig.figma.com/img/4d69/6151/8879bc373bf5fcc1578bcec5172b087b?Expires=1699833600&Signature=Fcyz23Cuci2YfyswiwIYuvnXpqTqeT2BzsUhksKvplJbkgsGcaO0-X1M8nHVl6CDFfd2zHhxeXzTZjzCf45kWe6VcYwcgk3TodKvldeQ~xEuTUcQTvu03EaEqdVQ2c-eTZDcm8Y1uQElWeqsN7zLJng0njznWVkFu0AYde-dYfvJulOW7~CmtPCIZbiSXTzxwsS3t712VhAYvjRwMca1cViLQirep7rcRPdGz-WGUn8NVhD9HUzmf9PtXQoqL8-Oq3hiyxUfQ0meqDc594uZ2MGgnSZ6mfbvaHPxp845r4h7q87NCVXpYa8mku3sAD-2b4B1ME6uFa6nyJgggtEUbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: P3,
        bg: "rgba(231, 234, 243, 1)",
        btncolor: "rgba(253, 192, 64, 1)",
        TextBtn: "Shop Now",
      },
    ],
    category: [
      {
        // Img: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1699228800&Signature=L-reokY4cdElwI8HHeS9iKW58ip98C93-H~HpTII~Px9MXnLDATcnx-ZaQv5AXB6weQwhTXCekkyWSSLxJGsBqOLWxlzhDKADaXO-4HoKz6q-crjH6nX6-XIW0HQzfmxFRIGb9NP6sxwik7gx5fDpOzQLeVu5U~Js6kcysvwNVBRf9g90BJBjOWxV6UyIVchOYCaRFZgvZv-pCGevQhQ0RzENRzyWu15Ps~xweWRVAFAqYQwSO~hQbFULB~4ohbZ9Zxu3sxuXEyWg8Tg8P3KWIzvM2J190-H2Gazbsy-scpr4-rsf9PXWPMCD~i62IEhAAo8xjJwj5yyDR-a-VY8LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C1,
        bg: "rgba(242, 253, 228, 1)",
        ItemName: "Burger",
        ItemNumber: "14 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1699833600&Signature=ReB-ACp4ZHwx-KnKawaftMI0r-4wHOzgkuQNvDz4gKr3pbU1DOV9wPzqVzD5xoIQky3NmxOgpyvHqgOf30GqOVYVTGqZ-fCf-GpU3a~qX6WyKTMC~J203nZHFVOPIlOKLkMv4p5uvu8GDKuiykrSKXm1pvM9gpltD6Rqi2-cv5qr3lFjfEPv4jy~5N8YXifYLUysVejDLfchKgSV8XqmwM4kBy2dYX97IbiXpXLKFd0meAuo41mKtF2zlnclc2I8boDAHrCvYz6SjNSr4GQgaXUeJVGX52NaqJ-5a6fQYDj6jVc7hPmNaryj7S4cwYB-tl2zT41u6sThXxLx-AsS1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C2,
        bg: "rgba(255, 252, 235, 1)",
        ItemName: "Peach",
        ItemNumber: "17 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1699833600&Signature=SVfj1ycsGcreHWOHTDYE7MakOwpk5lkKmu8TeP5AllFZB~RXeF3wduHLgtaBGjhQk~czlgDCh4yMXzttdFfSL19X0CDpGrMghsOsQd1cSUPSTwjcOh1BQgQF6qX7cj7wNsU4FYeQ8so92HtjVdm1mVcHvtxfjYntQlds7TB9eW9ZQJoKag~TWM6ocQBITJLLyKCivxYp2wgPSFCkriZnXiMXSUzSP2pTU3ynv4a9T7c6tgwax3s5tiXKx-gRKAkl3mdPpHa0qmxx8Gb-K0ksLWvzS4GRMfFnZw5SVCAiumSjvPfjPIhr3V~X6uzbw2qNyEaHuwM~4hXmEbZDneXykw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C3,
        bg: "rgba(236, 255, 236, 1)",
        ItemName: "Oganic Kiwi",
        ItemNumber: "21 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/21b6/3a1e/f2a493eea176934bcab372692ab59a29?Expires=1699833600&Signature=FXFbsYqphIe1ipmFbHzTdjwe6oAZguBImTgw3rut6pjQxCr~gU~UdJYlygCK5Qh56~R38QKQxELvFkZW4tEvDcHH99ugN7vqkTTSnRqHi6YnsOGXCb01GQJHNqlwgC7P90-6VapunM6IlmDdcyMfh5LmOLdEDHyKx0nZct89zq1WlsOzSrxWqwWrhAvo3R5nQimGDSmCg5C7hdzeIYzGnYv9sQhZ4EF0HePgUbeoj8fNMiWbRX~h655bMFr8cVIXdVrJ7BEwE6B~EvVjYtrYC6T0sRaoGJGFcgpFY92t164x-LR6lVWmXPyU5cm7UgT425rOlQhe~vn20wdtZIRc4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C4,
        bg: "rgba(254, 239, 234, 1)",
        ItemName: "Red Apple",
        ItemNumber: "68 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/488c/b40d/98f6efd89c2347f8ab7f23b7757a7e2f?Expires=1699833600&Signature=RRKQtVEpA~7vCDr5cobXciLHTNELEC9v-hZDzZEj0rivcS~pgZaCrvu1lo-UJtaNgCqenuo-Fi7ZzxvFgNlUMAMdgeAT1eIkdyjO6aT-gV7wk-HV-b1TAf7XrcJE1aCiTp9gY8bz3pEnf6XKkqM6oSovCP4I~jBeCRJnRSrF49RpJBwhnfR5r-ixEwybyIxKc2WZ0ExyqatE-MpsfRMLXdh8jqmxwb64b1rRpH4GOlPvg0u2dgZlOud2DgBhKl1y6lW6i6sQ2UxtN2~m2Cf0aHvwuGHJ7anev1jDsIFLnDQg4w5iPTXnWRM7tTp1KpU0-3weVligqoHLjmAGV1kJBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C5,
        bg: "rgba(255, 243, 235, 1)",
        ItemName: "Snack",
        ItemNumber: "34 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/13f9/afc8/02816b515e817bcd88800c49b947f860?Expires=1699833600&Signature=YL1P41RPODYUqlRbRpFI7l5JafECERaPx7-jTsgY8LM-c-9bolTqwRx1J54YiYXXPlutJdIpZF4Nu~LKICq8khhHghdVH3unGdqcrj35Gny2QdsJC78L8UAZRHJ3eKzOJL-vopTA72V6FXAcf9PJLneQ78KPP72R~HywsPeLTlwxFzj5pZjTI-yeU1zDM~XwO9pTOebx5YDaLH9lQnGXR7PFw5CB79R9JqOzFpriNecpgrQNBIHGbtqo~XF8ENarO5s3~RJlXIUDuAEQkcPky-zwRsrngemqWzf1juegho4RXk3DcvOxhQFH7yQ~spK1El71NtKcAdzV0cSiZjlBEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C6,
        bg: "rgba(255, 243, 255, 1)",
        ItemName: "Black plum",
        ItemNumber: "25 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1699833600&Signature=J5bhwwHy-8EhZxf~pW2L9qcDo4RLXcvYDPCdDmOyBY~C3BUWWIc5Wn4KUAtXk2biIeJaZj~Dt0epPcSGz4Rgwcg2AkDQ65CYDztMsj9NKscS40nQVqoIQwIhYSufQdv8zkHFQYJ5htdr3ceMLGwdDyH~qe83FC40J~TtkcPJxjPfAQE8XnbrUox5ER0gS5ndWF02rxHBhdgKz~~HKAxzqmL-oRc1iDDD6VZj3ZFTnamSfk5PdeuhnAFCPRy6uvzZr2xiRSRyGjYsxbqv9gJS0UoUhfgfp3HCZ~smR-dQhoA2Ide4gpWwkzKAJdyb8gUg3ER7yj0joHqU7sklQzrWUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C7,
        bg: "rgba(242, 252, 228, 1)",
        ItemName: "Vegetables",
        ItemNumber: "65 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1699833600&Signature=JpBVjKtSL-91DazsiQO3MgkyvztdmXjSbYG51BReJcHZnW4KQ-BvsNH0KbpvM2K5KrpTPStIe~tLSVmAsmTKQqceGy4tMDiI8~tdkYHulh5vJmOgLLa3IAq~YB-ZffrX-0Wc2cI1twiQzjVGVhik5Hz1EYRuE4xAbzUdW5CFeiK9qN3NtJ9xpuAmJXOsUmUjgTtFYWcorjfpCKmVUkI-g7fwheaQZf8egCO8eaedzshVmprQw2D9KZWpvikTvkOeKg8zZezcDsCxbQ~K~AICT-Xp9dtb8-sTXzkHV0ckb~fEvd6QxbhYBYoVqU9Zs9aO-vdpwiG0QpmZZZLCkpAtDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C8,
        bg: "rgba(255, 252, 235, 1)",
        ItemName: "Headphone",
        ItemNumber: "33 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1699833600&Signature=pg4YVVgnJVPU82pFrb5TZqIW86nanB5A2pL2q9iEpqZ8b99ZlW7MxslUGQ0DlGXb-7zRkzEbXgCj-~d-tTYqx5-QqQmg3iXAwjEv5ckj25lnw~mpt2k3X7eFwGUQo42XHSWKNeE1X3hCZOXH0BZAoxIz-Ks8lAJeZ7cLBZEH6xyVYxfQBxoR88F2A8c0BBLPjFgDzZxV0Rsbl4GMm8MYReGby0Z6MJFTHZqNhI4Y0o8cC0fUvN8RuWpvxdPr~mPMufJwPb4U9MeQusBPxo7tiExuix-HvpMNP7fzIAqtJzMIFKqF32trLoWTXFW99G0k-TuVIdRJdJehZIb9ISBbtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C9,
        bg: "rgba(242, 252, 228, 1)",
        ItemName: "Cake & Milk",
        ItemNumber: "54 Items",
      },
      {
        // Img: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1699833600&Signature=UdhxWsqWNaFPVYRQR2BywbacMhq8bf1IKHxb9JMgBGKERxpzcPVzDRfozFq2CHgeR62jUwhPApqUiNlRxTrK-p9xFYxLUJEnCBUK~KZefSygBebL~AU-~BJ7njpLqN4UAmwIN~sCH5ugWqUUfP2HRdENjAEFzCqdG9XfWyGCwinAoSs4Nlky8wPdWo2YFTgw~H0jKvF4axGlNJvj2awW4-7t2F6OMUaoo3bNdmnlJvOmNVChiXOPrx1x7W~46GwXlUGsrsHYdW4JWrpLRuwKOC1gFW72hPaj~yITFMn5k3GGsDRBEpo5Uc9KKRwm2IilvuJ-Eo-uok4WmwouNwxPuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Img: C10,
        bg: "rgba(255, 243, 255, 1)",
        ItemName: "Orange",
        ItemNumber: "63 Items",
      },
    ],
    product: [
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
  }),
  getters: {
    doublCount: (state) => state.count,
  },
  // actions: {
  //   fetchCards() {
  //     const Cards = new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve([]);
  //       }, 3000);
  //     }).then((Cards) => (this.Cards = Cards));
  //   },
  // },
});
