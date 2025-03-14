<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { BiChevronDown } from "vue-icons-plus/bi";
import TPick from "./atoms/TPick.vue";

import type { IOption, TOptionType } from "../@types";

const props = defineProps<{
  label?: string;
  options: IOption[];
  type?: TOptionType;
}>();

const isOpen = ref(false);
const selectedValue = ref("");
const selectRef = ref<HTMLElement | null>(null);
const placeholder = "Seleccionar";

const selectedOption = computed(() => {
  return props.options.find((option) => option.value === selectedValue.value);
});

const selectedLabel = computed(() => {
  return selectedOption.value?.label;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: IOption) => {
  selectedValue.value = option.value;
  isOpen.value = false;
};

const handleClickOutside = (event: Event) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative w-max" ref="selectRef">
    <!--Selector label-->
    <div v-if="label" class="t-select-label">
      <label for="field">{{ label }}</label>
    </div>
    <!--Selector box-->
    <div
      id="field"
      class="t-select-box"
      :class="{ 't-select-box-active': isOpen }"
      @click="toggleDropdown"
    >
      <span v-if="selectedLabel" class="t-select-text">
        {{ selectedLabel }}
        <TPick
          v-if="selectedOption?.record"
          class="ml-2"
          :color="selectedOption?.record"
          :type="type"
        />
      </span>
      <span v-else class="t-select-placeholder">{{ placeholder }}</span>
      <span class="t-select-icon">
        <BiChevronDown />
      </span>
    </div>
    <!--Opciones-->
    <ul v-if="isOpen" class="t-select-dropdown">
      <li
        v-for="option in options"
        class="t-select-dropdown-option"
        :key="option.value"
        @click="selectOption(option)"
      >
        <span>
          {{ option.label }}
        </span>
        <TPick v-if="option?.record" :color="option.record" :type="type" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
