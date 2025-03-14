<script setup lang="ts">
import type { IColor, TOptionType } from "../../@types";

defineProps<{
  color: IColor;
  type?: TOptionType;
}>();
</script>

<template>
  <div
    class="w-8 h-6 rounded-sm border border-gray-200 text-center text-white text-sm"
    :class="{ '!text-black': color?.color === '#FFFFFF' }"
    :style="`background-color: ${color?.color};`"
  >
    <span v-if="type === 'band'">
      {{ color?.value.band }}
    </span>
    <span v-else-if="type === 'multiplier'">
      {{ color?.value.multiplier }}
    </span>
    <span v-else-if="type === 'tolerance'">
      {{ color?.value.tolerance }}
    </span>
  </div>
</template>

<style lang="css" scoped></style>
