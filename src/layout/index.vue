<template>
  <div>
    <div>
      <navbar />
    </div>
    <app-main />
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  },
  
  methods: {
  }
}
</script>
