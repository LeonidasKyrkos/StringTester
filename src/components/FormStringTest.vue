<template>
    <form class="form-string-test">
        <div class="form-string-test__control">
            <label for="test-type" class="form-string-test__label"
                >Choose which test you'd like to perform</label
            >
            <select
                v-model="testId"
                name="Test Type"
                id="test-type"
                class="form-string-test__select"
            >
                <option value="">Please Select</option>
                <option v-for="test in Object.keys(tests)" :key="test">
                    {{ test }}
                </option>
            </select>
        </div>

        <label class="form-string-test__control">
            <span class="form-string-test__label">Enter your string</span>
            <input
                v-model="currentValue"
                @input="onChange"
                :disabled="!testId"
                placeholder="Enter your string"
                type="text"
                class="form-string-test__input"
            />
        </label>
        <loader v-if="currentValue && !tested"></loader>
        <div
            v-if="tested && currentValue.length"
            class="form-string-test__output"
            :class="{ success: output }"
        >
            <span v-if="output">It's palindromic!</span>
            <span v-if="!output">It's not palindromic</span>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { isPalindromic } from "@/methods/tests/palindrome";

import Loader from "@/components/Loader.vue";

export default defineComponent({
    name: "FormStringTest",
    components: { Loader },
    setup() {
        let timer: number | null = null;

        const testId = ref("");
        const currentValue = ref("");
        const output = ref(false);
        const tested = ref(false);
        const delay = 250;

        const tests: { [key: string]: () => void } = {
            palindromic: () => {
                output.value = isPalindromic(currentValue.value);

                tested.value = true;
            },
        };

        const onChange = () => {
            tested.value = false;

            if (timer) {
                clearTimeout(timer);

                timer = null;
            }

            timer = setTimeout(tests[testId.value], delay);
        };

        return {
            currentValue,
            output,
            onChange,
            tests,
            tested,
            testId,
        };
    },
});
</script>

<style lang="scss" scoped>
$module: "form-string-test";

.#{$module} {
    &__control {
        display: block;
        margin-bottom: em($spacingLarge);
    }

    &__label {
        display: block;
        margin-bottom: em($spacingAtom);
    }

    &__select {
        $fz: 24;
        font-size: em($fz);
        width: 100%;
        padding: em($spacingSmall, $fz);
        cursor: pointer;
        border-radius: em(8, $fz);
        border: 1px solid darken($colorBackground, 10%);
        outline: 0;

        &:focus {
            border: 1px solid rgba($colorPositive, 0.75);
        }
    }

    &__input {
        @extend .#{$module}__select;

        cursor: auto;

        &:disabled {
            cursor: not-allowed;
        }
    }

    &__output {
        $fz: 50;
        font-size: em($fz);
        color: $colorNegative;

        &.success {
            color: $colorPositive;
        }
    }
}
</style>
