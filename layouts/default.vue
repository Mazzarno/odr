<template>
  <v-app>
    <transition name="page" mode="out-in">
      <Nuxt />
    </transition>
  </v-app>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  transition: {
    name: 'home',
    mode: 'out-in',
  },
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
<script >
export default {
  mounted() {
    window.axeptioSettings = {
      clientId: '62b092f8f3c32a399ddd3467',
    }
    ;(function (d, s) {
      var t = d.getElementsByTagName(s)[0],
        e = d.createElement(s)
      e.async = true
      e.src = '//static.axept.io/sdk.js'
      t.parentNode.insertBefore(e, t)
    })(document, 'script')
  },
}
</script>