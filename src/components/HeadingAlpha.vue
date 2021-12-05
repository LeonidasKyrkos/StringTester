<template>
    <component
        :is="element"
        class="alpha"
        :class="{ 'with-margin': withMargin }"
        ><slot></slot
    ></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "HeadingAlpha",
    props: {
        element: {
            type: String,
            default: "h1",
        },
        withMargin: {
            type: Boolean,
            default: true,
        },
    },
});
</script>

<style lang="scss" scoped>
$module: "alpha";

.#{$module} {
    $fz: 42;
    font-size: em($fz);

    &.with-margin {
        margin-bottom: em($spacingLarge, $fz);
    }
}
</style>
