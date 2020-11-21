<template lang=pug>
  #app
    .container
      .row
        .col-12.text-center
          #nav
            router-link(to='/') Home
            | &nbsp;| &nbsp;
            router-link(to='/about') About
            | &nbsp;| &nbsp;
            router-link(to='/cart') Cart
        .col-12
          router-view
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
