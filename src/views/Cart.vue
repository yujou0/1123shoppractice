<template lang="pug">
  #cart
    b-table(:items="items" :fields="fields")
      template(v-slot:cell(action)="data")
        b-button(variant="danger" @click="del(data.index)")
          font-awesome-icon(:icon="['fas', 'trash']")
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'price',
          label: '商品價錢'
        },
        {
          key: 'action',
          label: '操作'
        }
      ]
    }
  },
  computed: {
    items () {
      // 直接取vues的items
      // return this.$store.state.items
      // 呼叫vuex的getters
      return this.$store.getters.items
    }
  },
  methods: {
    del (index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>
