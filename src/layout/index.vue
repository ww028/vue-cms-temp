<template>
  <div>
    <sidebar class="sidebar-container" />
    <div>
      <navbar />
    </div>
    <AppMain />
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
}
</script>
