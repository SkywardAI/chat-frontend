import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
    {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {ignores:[".nuxt/"]},
    {rules: {
        "vue/multi-word-component-names": 0,
        "no-undef": 0,
        "@typescript-eslint/ban-types": 0,
        '@typescript-eslint/no-explicit-any': 0
    }},
];