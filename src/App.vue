<template>
  <div id="app" >

      <router-view/>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuStatus: false,
        closeMenuStyle: {
          backgroundColor: 'transparent',
          display: 'none'
        }
      }
    },

  }
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;

}

// чтобы элементы не смещались при появлении общего вертикального скрола
::-webkit-scrollbar {
display: none;
}

.openMenu {
  color: red ;
}

.closeMenu {
  color: red ;
}

</style>
