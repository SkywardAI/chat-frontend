<script setup>
    const authDetails = ref({
        username:'',
        email:'',
        password:''
    })

    function emailRules(input) {
        return (
            /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            .test(input) || "Email address invalid!"
        )
    }
</script>

<template>
    <v-sheet
      rounded="md"
      width="300"
      elevation="10"
      class="block relative p-4"
    >
        <v-text-field 
            v-model="authDetails.username" 
            label="Your Username" clearable
        ></v-text-field>
        <v-text-field 
            v-model="authDetails.email" 
            label="Your Email" type="email" 
            clearable :rules="[emailRules]"
        ></v-text-field>
        <v-text-field 
            v-model="authDetails.password" 
            label="Your Password" type="password" 
            clearable
        ></v-text-field>
        <v-btn
            block rounded="md"
            color="primary"
            class="py-4 hover mb-4 relative"
        >
            Login
        </v-btn>
        <v-btn
            block rounded="md"
            color="primary"
            class="py-4 hover mb-4 relative"
        >
            Register
        </v-btn>
    </v-sheet>
</template>