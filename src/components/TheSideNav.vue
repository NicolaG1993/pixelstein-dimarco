<template>
  <CSidebar visible>
    <CSidebarNav>
      <CNavItem>
        <CNavLink href="#">
          <CIcon customClassName="nav-icon" icon="cilSquare" />
          <span>Dashboard</span>
        </CNavLink>
      </CNavItem>

      <li class="nav-title">Projekte</li>
      <CNavItem>
        <CNavLink href="#">
          <CIcon customClassName="nav-icon" icon="cilSquare" />
          <span>Übersicht Projekte</span>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">
          <CIcon customClassName="nav-icon" icon="cilSquare" />
          <span>Projekt plannen</span>
        </CNavLink>
      </CNavItem>

      <li class="nav-title">Kontakter</li>
      <CNavItem>
        <CNavLink href="#">
          <CIcon customClassName="nav-icon" icon="cilSquare" />
          <span>Übersicht Kontakter & Projektmanager</span>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">
          <CIcon customClassName="nav-icon" icon="cilSquare" />
          <span>Kontakter anlegen</span>
        </CNavLink>
      </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<script>
import { CNavItem, CNavLink, CSidebar, CSidebarNav } from '@coreui/vue'
export default {
  name: 'TheSideNav',
  components: { CSidebar, CSidebarNav, CNavItem, CNavLink }
}
</script>

<style>
.sidebar {
  width: 200px;
  height: 100%;
}
.sidebar-nav > .nav-title {
  font-weight: bold;
  font-size: 11px;
  margin: 1.25rem 0.5rem 0 0.25rem;
  text-transform: none;
}
.sidebar-nav > .nav-item > .nav-link {
  font-size: 13px;
  padding: 0.75rem 0;
  transition: 0.4s;
  white-space: normal;
}
.sidebar-nav .nav-icon {
  height: 16px;
  width: 16px;
}
.sidebar-nav > .nav-item > .nav-link > span {
  margin: 0 0.25rem 0 0;
}
</style>
