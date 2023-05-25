<script setup>
const customStyles = {
  '--cui-header-brand-padding-y': 0
}
</script>

<template>
  <CHeader :style="customStyles">
    <CCol>
      <CHeaderBrand href="#">
        <CImage src="/Dimarcon-Logo.jpg" height="40" />
      </CHeaderBrand>
    </CCol>
    <CCol>
      <CBreadcrumb>
        <CBreadcrumbItem>Home</CBreadcrumbItem>
        <CBreadcrumbItem active>Dashboard</CBreadcrumbItem>
      </CBreadcrumb>
    </CCol>
  </CHeader>
</template>

<script>
import { CBreadcrumb, CBreadcrumbItem, CCol, CHeader, CHeaderBrand, CImage } from '@coreui/vue'

export default {
  name: 'TheHeader',
  components: { CHeader, CHeaderBrand, CImage, CCol, CBreadcrumb, CBreadcrumbItem }
}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-content: end;
  padding: 1rem 0;
}
.header > .col:nth-child(1) {
  justify-self: center;
}
</style>
