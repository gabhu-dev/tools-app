<script setup lang="ts">
import { reactive, computed } from "vue";
import {
  BAND_COLORS,
  MULTIPLIER_COLORS,
  TOLERANCE_COLORS,
} from "../@constants";

interface IFormState {
  first_band?: number;
  second_band?: number;
  multitplier?: number;
  tolerance?: number;
}

const formState = reactive<IFormState>({
  first_band: undefined,
  second_band: undefined,
  multitplier: undefined,
  tolerance: undefined,
});

const result = computed(() => {
  const bands = Number(`${formState.first_band}${formState.second_band}`);
  return bands * (formState.multitplier || 1);
});
</script>

<template>
  <div>
    <p>Primera banda</p>
    <select v-model="formState.first_band">
      <option v-for="item in BAND_COLORS" :value="item.value.band">
        {{ item.name }}
      </option>
    </select>

    <p>Segunda banda</p>
    <select v-model="formState.second_band">
      <option v-for="item in BAND_COLORS" :value="item.value.band">
        {{ item.name }}
      </option>
    </select>

    <p>Multiplicador</p>
    <select v-model="formState.multitplier">
      <option v-for="item in MULTIPLIER_COLORS" :value="item.value.multiplier">
        {{ item.name }}
      </option>
    </select>

    <p>Tolerancia</p>
    <select v-model="formState.tolerance">
      <option v-for="item in TOLERANCE_COLORS" :value="item.value.tolerance">
        {{ item.name }}
      </option>
    </select>

    <p>Resultado</p>
    <div>
      {{ result }}

      <p>Primera banda: {{ formState.first_band }}</p>
      <p>Segunda banda: {{ formState.second_band }}</p>
      <p>Multiplicador: {{ formState.multitplier }}</p>
      <p>Tolerancia: {{ formState.tolerance }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
