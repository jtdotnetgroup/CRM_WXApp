<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus">

body
  margin 0

html
  font-size 62.5%

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height: -webkit-fill-available;
  overflow-x hidden
  background-color #f4f2f2
  padding-top 5px
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

</style>
