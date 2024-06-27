<script setup lang="ts">


const userMenuItems = ref([
  {
    title: "My Profile",
    desc: "Account Settings",
  },
  // {
  //   title: "My Inbox",
  //   desc: "Messages & Emails",
  // },
  // {
  //   title: "My Tasks",
  //   desc: "To-do and Daily Tasks",
  // },
]);
</script>

<template>
    <v-sheet
      rounded="md"
      width="250"
      elevation="10"
    >
      <v-list
        class="pa-4"
        elevation="10"
        rounded="md"
      >
        <v-list-item
          v-for="(item, i) in userMenuItems"
          :key="i"
          class="py-2  mb-2"
          :value="item"
          :title="item.title"
          :subtitle="item.desc"
          rounded="md"
        />
        <v-btn
          block
          color="primary"
          class="mt-4 py-4"
        >
          Logout
        </v-btn>
      </v-list>
    </v-sheet>
</template>