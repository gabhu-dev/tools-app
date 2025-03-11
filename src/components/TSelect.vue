<template>
  <div class="relative w-max" ref="selectRef">
    <!--Selector label-->
    <div class="t-select-label">
      <label for="field">Campo</label>
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
      </span>
      <span v-else class="t-select-placeholder">{{ placeholder }}</span>
      <span class="icon">
        <BiChevronUp v-if="isOpen" />
        <BiChevronDown v-else />
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
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { BiChevronDown, BiChevronUp } from "vue-icons-plus/bi";

type Option = {
  label: string;
  value: string;
};

const options = ref<Option[]>([
  { label: "Opción 1", value: "1" },
  { label: "Opción 2", value: "2" },
  { label: "Opción 3", value: "3" },
]);

const isOpen = ref(false);
const selectedValue = ref("");
const selectRef = ref<HTMLElement | null>(null);
const placeholder = "Seleccionar";

const selectedLabel = computed(() => {
  const selected = options.value.find(
    (option) => option.value === selectedValue.value
  );
  return selected?.label;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: Option) => {
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

<style scoped></style>
