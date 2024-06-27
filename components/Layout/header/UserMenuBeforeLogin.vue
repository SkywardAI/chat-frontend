<script setup lang="ts">
import useUser from '~/store/user';
import { emailRule, notEmptyRule, testRules } from '~/tools/inputRules';

    const savedLoginInfo = localStorage.getItem('user-login-info');
    const autoFill = savedLoginInfo ? JSON.parse(savedLoginInfo) : {};

    const user = useUser();

    const authDetails = ref({
        username:'',
        email:'',
        password:'',
        ...autoFill
    })

    // rules to valid input fields
    const inputFieldRules = ref({
        username: [notEmptyRule],
        email: [notEmptyRule,emailRule],
        password: [notEmptyRule]
    })

    const isRegister = ref(false);
    const keepLogin = ref(false)

    // switch between login and register
    function switchLoginMode() { 
        isRegister.value = !isRegister.value;
    }

    function submitForm() {
        const { username, email, password } = authDetails.value;
        // test if username and password are valid
        if(
            !testRules(inputFieldRules.value.username, username) ||
            !testRules(inputFieldRules.value.password, password)
        ) return;

        if(isRegister.value) {
            // if is register, test also email validity
            if(!testRules(inputFieldRules.value.email, email)) return;
            user.registerUser(username, email, password, keepLogin.value)
        } else {
            user.loginUser(username, password, keepLogin.value)
        }
    }
</script>
<style>
    .centre-checkbox {
        align-items: center;
    }
    .centre-checkbox * {
        margin: auto;
    }
</style>

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
            class="mt-3"
            :rules="inputFieldRules.username"
        ></v-text-field>
        <v-text-field 
            v-if="isRegister"
            v-model="authDetails.email" 
            label="Your Email" type="email" 
            clearable class="mt-3"
            :rules="inputFieldRules.email"
        ></v-text-field>
        <v-text-field 
            v-model="authDetails.password" 
            label="Your Password" type="password" 
            clearable class="mt-3"
            :rules="inputFieldRules.password"
        ></v-text-field>
        <v-checkbox v-model="keepLogin" 
            label="Keep me logged in!" 
            class="centre-checkbox h-15"
        ></v-checkbox>
        <v-btn
            block rounded="md"
            color="primary"
            class="py-4 hover mb-4 relative"
            @click="submitForm"
        >
            {{ isRegister ? 'Register' : "Login"}}
        </v-btn>
        <p @click="switchLoginMode" 
            class="text-center cursor-pointer text-sm"
        >I want to {{ isRegister ? 'Login' : "Register" }}!</p>
    </v-sheet>
</template>