<template>
  <div>
    <sidebar class="sidebar-container" />
    <div>
      <navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Navbar, Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar
  },
}
</script>
