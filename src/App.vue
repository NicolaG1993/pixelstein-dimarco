<script setup>
import { CCol, CRow } from '@coreui/vue'
import TheHeader from './components/TheHeader.vue'
import TheSideNav from './components/TheSideNav.vue'
import TheDashboard from './components/TheDashboard.vue'
</script>

<template>
  <TheHeader />

  <CRow id="Content">
    <CCol class="side-nav-wrap">
      <TheSideNav />
    </CCol>

    <CCol class="main-wrap">
      <TheDashboard />
    </CCol>
  </CRow>
</template>

<style lang="scss">
@import 'styles/style';

#Content {
  display: grid;
  grid-template-columns: 200px auto;
  margin: 0;
}
.side-nav-wrap {
  padding: 0;
}
.main-wrap {
  padding: 0;
}
</style>
