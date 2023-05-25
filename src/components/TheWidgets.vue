<template>
  <CCol :xs="4">
    <CWidgetStatsB class="mb-3" :progress="{ color: 'success', value: 75 }">
      <template #text>Widget helper text</template>
      <template #title>Widget title</template>
      <template #value>89.9%</template>
    </CWidgetStatsB>
  </CCol>
  <CCol :xs="4">
    <CWidgetStatsB
      class="mb-3"
      :progress="{ color: 'warning', value: 75 }"
      text="Widget helper text"
      title="Widget title"
      value="$98.111,00"
    />
  </CCol>
</template>

<script>
import { CCol, CWidgetStatsB } from '@coreui/vue'

export default {
  name: 'TheWidgets',
  components: { CCol, CWidgetStatsB }
}
</script>

<style scoped></style>
