<template>
  <CTable :columns="columns" :items="items" striped />
  <CPagination aria-label="Page navigation example">
    <CPaginationItem href="#">Previous</CPaginationItem>
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem href="#">Next</CPaginationItem>
  </CPagination>
</template>

<script>
import { CPagination, CPaginationItem, CTable } from '@coreui/vue'
export default {
  name: 'TheTable',
  components: { CPagination, CPaginationItem, CTable },
  data: () => {
    return {
      columns: [
        {
          key: 'kunde',
          label: 'Kunde',
          _props: { scope: 'col' }
        },
        {
          key: 'kampagne',
          label: 'Kampagne',
          _props: { scope: 'col' }
        },
        {
          key: 'vorname',
          label: 'Vorname',
          _props: { scope: 'col' }
        },
        {
          key: 'nachname',
          label: 'Nachname',
          _props: { scope: 'col' }
        },
        {
          key: 'soll',
          label: 'Soll',
          _props: { scope: 'col' }
        },
        {
          key: 'ist',
          label: 'Ist',
          _props: { scope: 'col' }
        }
      ],
      items: [
        {
          kunde: 'Kunde 1',
          kampagne: 'Kampagne 1',
          vorname: 'Marc',
          nachname: 'Plank',
          soll: 'X',
          ist: 'X',
          _cellProps: { id: { scope: 'row' } }
        },
        {
          kunde: 'Kunde 2',
          kampagne: 'Kampagne 2',
          vorname: 'Boris',
          nachname: 'Powl',
          soll: 'X',
          ist: 'X',
          _cellProps: { id: { scope: 'row' } }
        },
        {
          kunde: 'Kunde 3',
          kampagne: 'Kampagne 3',
          vorname: 'Hildegard',
          nachname: 'Juls',
          soll: 'X',
          ist: 'X',
          _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } }
        }
      ]
    }
  }
}
</script>

<style>
th {
  border: 1px solid lightgray;
}
</style>
