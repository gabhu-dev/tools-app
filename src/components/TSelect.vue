<template>
  <div class="t-select" ref="selectRef">
    <label class="t-select-box" @click="toggleDropdown">
      <span>{{ selectedLabel }}</span>
      <span class="icon">▼</span>
    </label>
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

const selectedLabel = computed(() => {
  const selected = options.value.find(
    (option) => option.value === selectedValue.value
  );
  return selected ? selected.label : "Seleccionar";
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

<style scoped>
.t-select {
  @apply relative;
  width: 200px;
}
.t-select-box {
  @apply flex justify-between items-center p-2 border border-gray-400 rounded-sm cursor-pointer relative;
}
.icon {
  font-size: 14px;
}
.t-select-dropdown {
  @apply absolute w-full border border-gray-40 bg-white list-none p-0 m-0 top-full left-0;
}
.t-select-dropdown .t-select-dropdown-option {
  @apply p-2 cursor-pointer;
}
.t-select-dropdown .t-select-dropdown-option:hover {
  @apply bg-white;
}
</style>
