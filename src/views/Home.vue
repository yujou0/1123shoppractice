<template lang="pug">
  #Home
    b-row
      b-col(col="12" md="6" lg="3" v-for="(item, index) of items" :key="index")
        b-card(:title="item.name" :img-src="item.img" :sub-title="'$'+item.price")
          b-button(variant="primary" @click="addCart(item)")
            font-awesome-icon(:icon="[fas, 'shopping-cart']")
            |&nbsp;加入購物車
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          img: 'https://b.ecimg.tw/items/DYAJCHA900AP7EG/000002_1604373280.jpg',
          name: 'Airpods pro',
          price: 6990
        },
        {
          img: 'https://b.ecimg.tw/items/DHBA1U1900AVOFQ/000002_1600407775.jpg',
          name: '耳機',
          price: 1500
        },
        {
          img: 'https://b.ecimg.tw/items/DHAG4SA900ASCRB/000002_1603524733.jpg',
          name: '筆電',
          price: 12999
        },
        {
          img: 'https://d.ecimg.tw/items/DCAGMVA9008ARFU/000002_1571140659.jpg',
          name: '背包',
          price: 2000
        }
      ]
    }
  },
  methods: {
    addCart (item) {
      // 呼叫mutations
      this.$store.commit('addCart', item)
    }
  }
}
</script>
