<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Twiteter -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="450"
    prepend-icon="mdi-twitter"
    title="Twitter"
    elevation="0"
  >
    <template #prepend>
      <v-icon size="x-large" />
    </template>

    <v-card-text class="text-h5 py-2">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template #prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          />
        </template>

        <v-list-item-title>Evan You</v-list-item-title>

        <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

        <template #append>
          <div class="justify-self-end">
            <v-icon
              class="me-1"
              icon="mdi-heart"
            />
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon
              class="me-1"
              icon="mdi-share-variant"
            />
            <span class="subheading">45</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
