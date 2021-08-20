<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreaVisible ? "Hide" : "Show" }} Detail
    </button>
    <ul v-if="detailsAreaVisible">
      <li>Phone : {{ friend.phone }}</li>
      <li>Emailw : {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreaVisible: false,
      friend: {
        id: "raditya",
        name: "Raditya Putranto",
        phone: "0123 345 67890",
        email: "raditya@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreaVisible = !this.detailsAreaVisible;
    },
  },
};
</script>