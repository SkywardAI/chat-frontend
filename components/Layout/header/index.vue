<script setup lang="ts">
import useUser from '~/store/user';
import UserMenuBeforeLogin from './UserMenuBeforeLogin.vue';
import UserMenuAfterLogin from './UserMenuAfterLogin.vue';

const user = useUser();
</script>

<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn
        class="custom-hover-primary"
        variant="text"
        v-bind="props"
        icon
      >
        <v-avatar size="35">
          <!-- TODO: add src for empty avatar before login -->
          <img
            v-if="!user.isLoggedIn"
            width="35"
            alt="No User"
          >
          <img
            v-else
            src="/images/profile/user2.jpg"
            width="35"
            alt="Julia"
          >
        </v-avatar>
      </v-btn>
    </template>
    <component :is="user.isLoggedIn ? UserMenuAfterLogin : UserMenuBeforeLogin" />
  </v-menu>
</template>
