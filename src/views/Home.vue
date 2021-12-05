<template>
    <article class="home">
        <heading-alpha>The String Tester</heading-alpha>
        <form-string-test></form-string-test>
    </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormStringTest from "@/components/FormStringTest.vue";
import HeadingAlpha from "@/components/HeadingAlpha.vue";

export default defineComponent({
    name: "Home",
    components: {
        FormStringTest,
        HeadingAlpha,
    },
});
</script>

<style lang="scss" scoped>
$module: "home";

.#{$module} {
    max-width: em(1100);
    margin: 0 auto;
    padding: em($spacingLarge * 2) em($spacingLarge);
}
</style>
