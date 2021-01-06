<template>
<div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#">nuxtVue</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">About</b-nav-item>
              <b-nav-item to="/contact">Contact</b-nav-item>
              <b-nav-item to="/blog">Blog</b-nav-item>
              <b-nav-item to="/user">User</b-nav-item>
              <!-- <b-nav-item-dropdown text="User" right>
                <b-dropdown-item to="/user">User List</b-dropdown-item>
                <b-dropdown-item to="/user/profile">Profile</b-dropdown-item>
              </b-nav-item-dropdown> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
    </div>
</template>