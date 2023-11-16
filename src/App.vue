
<template>
    <div class="flex flex-col m-20">
      <div class=" flex flex-row ">
        <category
          v-for="i in category"
          :img ="i.img"
          :pname ="i.pname"
          :bc ="i.bc"
          :amount ="i.amount"
        ></category>
      </div>
        <div class = "flex flex-row mt-5">
          <promotion
            v-for = "a in promotion"
            :img="a.img"
            :bg = "a.bg"
            :quote = "a.quote"
            :btncolor = "a.btnBg"
          ></promotion>
      </div>
    </div>

</template>

<script>

 import category from './components/category.vue';
 import promotion from './components/promotion.vue';
 export default{
  name: "App",
  components:{
    category,
    promotion,
  },
  data(){
    return{
      category:[
      {
              img: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1701043200&Signature=nuVEq7Nzd19AIxIRLLEjSJVotSwf1Q0KQbNAiYbVgkNE3TOSq~ucJVycCTxCBYmbQQdUFEH5WfXShv-62DUKyiJPEpJD29tHB87AHvsFgxqc1iCXQ2L-10rCI~VY5yKs4GnpjD98VMyHdWy8aZo47gyn~IHBalBQRlRe5DUcvWVHazK98rv7d5gj3VyJgV7vjk6-8~EUVgXeP~chDa0uHx-PW7MZj3rr6~iZKQg9flxnR0FZ9w-CdzTmTf6YIn0i3UmwLbVzguHod5Oc-IYPVZ686Of4bNdPQQ6HEenKixqLqqLwAeF7MY4hsEpOzuL5Er2qhQBD2ysc79Qrw48x3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",              
              bc: "rgba(242, 252, 228, 1)",
              pname: "Cake & Milk",
              amount: "14 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1701043200&Signature=pJmjSAv83QimcuIG72nCNXlteOQAfTnga3FBqQAYSrQaYVGmTBOf6MZnPztVC6~7TSEazb1mNECezHkYjit02Y5mszQ5Gv6lfzgSiMmrllSqyhiZ6C9wx7P1DTJiltNv1lKqYD~z6jcnAQvcL7OxiLnLwKPozj1sSjXdEY8NV5nqy4nu03ZaOUh1DIZCXotAjC6Un0qr4mY8sQ5N1GnwUuZWipeHZ9mTWzXFYfWw2T3dG5RIjoE6uXREuWA4KYdDsMxYMANvr3fjNQp8yVQsllcJS47Det69Yw31CfmZ7TYCtVAOUTSx~A3VG9FM~Qdux4DUzPQwGv8d4wEEgYD4jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "rgba(255, 252, 235, 1)",
              pname: "Peach",
              amount: "17 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1701043200&Signature=qByOdc2Q1X2NFdyrUeztm6EPT9VGoOX6aob66DaYigWyiPcDvDxDOD7qrj7~xlrj-69C8A1xlBY4F8B3FLi6UE~4COX72Nd3IotG3-cjazvOZkOK0yjv32bc4eN-2ravsCdu8avOdTqzciVATjspi57zfpVc-1BHUKxa9UsJOzzLwFwuv~C7sgwDMqhtaXLFCzKJLXsJ3s2pzqOTlU~VfnDkKIiUJDbG7dApsLWYxmf1V7Ajxh6x24ZDvDF6p-4MAVVgPWMC1XW93Y8sh9AfiltKhUdUw4USN3ImgDtWEsf0Qs54kbllOkGsTaHEfshWGoiwa2RRnlWe1jWu~ECA8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "#ECFFEC",
              pname: "Organic Kiwi",
              amount: "21 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/21b6/3a1e/f2a493eea176934bcab372692ab59a29?Expires=1701043200&Signature=gDrZIVRru4Xf7EFvOaJVa4zMaK34T89ooaYiiy0jHrv964HOgcNHySwHRI5tkzWDuLzCxG6-br~aNpZQg~UmRpJXt5s9njR2-BigWxO5MsyxH9KYjg9LZijaX7ytULJYu2MvLT1IRJrsU5n1xRrPrYZKf-AGOTymzm9ktMqPTe0UwT6PtEYQkVQCo71QGuV2g6AT3kTa8EwuslwSsamcDLB-5e9xa85jGRMRVvgTVdT1i4uvnHvo4TBfrH3fj1QFayytVdc~tBwW3SBRN2ZmTRnxDD-c1v4~mnvDKYrvNr9r-zoytKQZ~3IBqxh0juQdNIPFL3Wfobh2P-T5Z~lh3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "#FEEFEA",
              pname: "Red Apple",
              amount: "68 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/488c/b40d/98f6efd89c2347f8ab7f23b7757a7e2f?Expires=1701043200&Signature=ZTDPY7B01efjpBqFLuHwk~Pg5VXX0cxe9J3pgleHiJrNskdw4l5vtQOUUS9f~BS39NhifrWsQBJSdRmJ4ffGs3OWQYwy91Wi6LymiGCq5P02FAtTNL65RQRZs4P2CbHqnMp8QMzWMIbWXsMVDgA-obIjY2ARIjp9OtRN1O6s3eL5uYVmwOzTFNx0S6LZBjeDTRntin7~LEYoDUeqhb3xGyXpxeGSgUSRR9twcPdtmctH3q1Z2fz7sYMrDZCrUI8aY4-LXkZFLunBQQFCArSRpyhtEVFarrTxDGIywWSjkeG9QsVPv56RBxrOEKfvIsqp9vkBOwjc-I09vMysym8qEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "rgba(255, 243, 235, 1)",
              pname: "Snack",
              amount: "34 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/13f9/afc8/02816b515e817bcd88800c49b947f860?Expires=1701043200&Signature=S7xJJ2tNncqoFtfs0z49egQAhXp68WqXLqkKTd6iNqcX3dBe4VXW~0su0UwkKM5UuZzel51xlYQARTxfk6WGSm7Ny~CDaaMnClTd6oB917Wf~5-ALMdJjPQ2Xw~6cWxFZdtoEGMFGVSmK0CN~OeQviLSaiV2txUMPV7WaY9onC6M3NaAw1t7J231BGpJQoNeshOhAWuaOwm0X5TBmRHvMdthLe0UgdvjRS009zbvz-VKZ0k2ySDZ~4lu6qZt1KLpYm7blzbEFANdKwuzO5AiaEdoFz4CRQre0Dh46pzNcj18eiCeAbI8SDc6kR3qi7ocvE0bIGe4kQdRsiJgszQfQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "#FFF3FF",
              pname: "Black plun",
              amount: "25 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1701043200&Signature=jU~KGSCuxDZGaLS4p~Vhsve5DzsdY4MRm-GTsUC3hEAfHAy1xS-k9MYt15epdPytx4i1LVIFYGe9Bwbb-05S~UozKrJXPGNLO5kvn6Ci2O76VuDsYGXlT~YIbykAhMo26jzKZL-Wjh1T1gW36~g1t~nAFzW0cCjjwS62SOdo7JqqfcoA3Wl~G839qkElsj1OI~tzTQ8jHk4mXwyZVtBvu4PugxCZhyqP1vbmgCIS8IBesU8ZcB-P10L1FH-ydo-QKfxFn02nAALdg9DUDQcqa5ivHktuspJfVCRaZFF911cSVYEUmH5RH9dIzdWRggtT1pn~sCYCEqlTMyiDprJVtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "#F2FCE4",
              pname: "Vegetables",
              amount: "65 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1701043200&Signature=hrxIqePlHrVgOqGbOzXbpuZgoQl5KndljWGx5jMYf4gLll7Q~jR3fuRxAkwSRtkcComhPSR1UHNMurnw8fXV93jBJckQfXGBluo0A-dX9YEHEkmjtU6GSy~fc4m99cyUr82uaX2xoBW1h~qHFqHLEfH~fr12p471~VE5VO~oadkM6NbcFgHAkwPkjY~xLGvhjmSTJ03deKpSiwDEmV17TCntJvGfJrjg3LCQivogaZ8-CQQfyvpP5wwGScvRkQeeKMgQZ49wS8uYxd0X9l9hDO6NQhwjOQmq8uxHw4shPKfscaMxCMpRQin8r1RPKj-jC0eu4ipWU3gAG2uE1x2bDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "#FFFCEB",
              pname: "Headphone",
              amount: "33 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1701043200&Signature=ku2-TlVzwdx8vQkO5evcQ9lYiZ7pa25hkkW~W8Q4dUamLcd79akJ3MAiaKJm1L1dBk9pRr5bHMkaL2QyDLuBam5P~ww2zQTjKYF9vb8m1c~ZKqxx2XzcO-ivWYaUNN2dy6qm1hTnErhQWVOpvXZ3Cb5IH3~zraXFob1Sa4IQH8Tpq7UJ4V462dFFdByy4rfa8~ws34AzoKn9QTGWKlaYZYOaUqyqI7n9z843StdY7QyjF4v382hFdccYx8WeIdKAanH9Ii~gj2E-pnmbPUzmSrwLQp4mhomR3lNM0mh-emOmuFjzrBHNOOAvdBs-gltESpCUi4stDgQucLmtwkwQjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "#F2FCE4",
              pname: "Cake & Milk",
              amount: "54 items",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1701043200&Signature=JxcqdQZEapxcGc0zHoFUSJ2YOsHK6I1G2x54vW-7pk2K1FJWR27dJrRhoXt3Xt6fcpIXJsCVBX-kS-83PcZTJb-XNIIoZdxJzjml~HLHKcDtXpNrj2DQzfjFDaIQhrdOgSg~j7mYmiFgexGhJtc8jfFWCExCVN7ekRGMrVbr7zIcBDNuCx-WDyTfGOA8YxMJLwU4G~plPCReD2kyUiIuGfNu2EAIVdnz0rTqx175IbGJfEBJMVaCUSY-MJQpv1eqNfmGCkUKu8KWWuYdGUmjJW-azdxcUvIoiMjl~rO7328PmpATd4jsjZdUScn3XAsYbn6gWKHFIt1GA4LGcVkbBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bc: "#FFF3FF",
              pname: "Orange",
              amount: "63 items",
            },
             
      ],
      promotion: [
            {
              img: "https://s3-alpha-sig.figma.com/img/de8c/488a/87b9ce16acd7436a6dec758331c840bc?Expires=1701043200&Signature=KTQ6UT7xs25QzKumnJcNy7NIVYVdwgOUFSX~AUvPFz8514~r8UatAOz795d4E5JNCb97aRbueCvhTxnBO2P0rn-SQfilERq~DisE6dd~EML0Lt8IvBNG4COxhP0ou07cuCD6Rm-oMSZSv655jP1EHxdykfaB9YDcOyGQIId4~Y~9ZabZGP0IZ2UG~9tAdSKPkW1vbixUNzb30Oro-bhEPxpIhj93vFJZrUetetLqBynpiBfJ-bMSlJ2omjRU-n8K8cjxUbgRMkz8tEj~BenVCeXPVvCRoqnya7QP-jbi1FMhCSapp2KL8TVMAqLqCPtgAa0Ptb5lzsaWw-2Rp~8jUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bg: "rgba(240, 232, 213, 1)",
              quote: "Everyday Fresh & Clean with Our Products",
              btnBg: "#3BB77E",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1701043200&Signature=Vw-SeLTnk2PRQQzoW1xl3wEWmbg9rzrDbAC01ZXQL70KtE6Tl8o9hOXyqipKc0wDbJXeyz44tsXc7naEYe85qr3904zXkntmxby39sNRyXT8fYfLDa1rm7-0JjfICOGwchbSYGn2KrXI-LkfsVY7XH64YRWF1llOoq6l6xnwiQ6dxrCIQMgK9tfQtRZ8UZ1u639YoX8bVVPZ8iO3IwY8Ar5~wE3-2qyb1iBJdAnLv8Td6VFA3X4ZpMVG7dQaTk6e9V5N~rRuux-ypRe9~VR9AnmAa2PpnlkKQl4cCJ0ABuHFAjS-~7ASXuLGPUQe3f854~vIBBbHfKGXL5WA4gtcDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bg: "#F3E8E8",
              quote: "Make your Breakfast Healthy and Easy",
              btnBg: "#3BB77E",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/4d69/6151/8879bc373bf5fcc1578bcec5172b087b?Expires=1699833600&Signature=Fcyz23Cuci2YfyswiwIYuvnXpqTqeT2BzsUhksKvplJbkgsGcaO0-X1M8nHVl6CDFfd2zHhxeXzTZjzCf45kWe6VcYwcgk3TodKvldeQ~xEuTUcQTvu03EaEqdVQ2c-eTZDcm8Y1uQElWeqsN7zLJng0njznWVkFu0AYde-dYfvJulOW7~CmtPCIZbiSXTzxwsS3t712VhAYvjRwMca1cViLQirep7rcRPdGz-WGUn8NVhD9HUzmf9PtXQoqL8-Oq3hiyxUfQ0meqDc594uZ2MGgnSZ6mfbvaHPxp845r4h7q87NCVXpYa8mku3sAD-2b4B1ME6uFa6nyJgggtEUbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              bg: "#E7EAF3",
              quote: "The best Organic Products Online",
              btnBg: "rgba(253, 192, 64, 1)",
            },
      ]
    }
  }
 }
</script>
