<template lang="pug">
  #cart
    ul
      li(v-for="(item, index) in items" :key="index") {{ item.name }}

</template>

<script>
export default {
  name: 'Cart',
  computed: {
    items () {
      // 直接取vues的items
      // return this.$store.state.items
      // 呼叫vuex的getters
      return this.$store.getters.items
    }
  }
}
</script>
