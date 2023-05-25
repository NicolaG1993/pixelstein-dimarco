<template>
  <main>
    <CContainer>
      <CRow>
        <label>Zeitraum wählen</label>
        <!-- <input type="text" readonly value="01.06 - 30.06.2023" /> -->
      </CRow>
      <CRow class="widgets-wrap">
        <TheWidgets />
      </CRow>
      <CRow>
        <p>Laufende Kampagnen</p>
      </CRow>
      <CRow>
        <TheTable />
      </CRow>
    </CContainer>
  </main>
</template>

<script>
import { CContainer, CRow } from '@coreui/vue'
import TheTable from './TheTable.vue'
import TheWidgets from './TheWidgets.vue'

export default {
  name: 'TheDashboard',
  components: { CContainer, CRow, TheTable, TheWidgets }
}
</script>

<style>
main {
  padding: 2rem 1.5rem;
}
label {
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  color: grey;
  font-weight: 500;
  font-size: 12px;
}
input {
  cursor: pointer;
}
.widgets-wrap {
  margin-bottom: 1rem;
}
</style>
