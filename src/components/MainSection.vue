<script setup lang="ts">
import { reactive, computed } from "vue";
import {
  BAND_COLORS,
  MULTIPLIER_COLORS,
  TOLERANCE_COLORS,
} from "../@constants";
import TSelect from "./TSelect.vue";
import TButton from "./TButton.vue";

interface IFormState {
  first_band?: number;
  second_band?: number;
  multiplier?: number;
  tolerance?: number;
}

const formState = reactive<IFormState>({
  first_band: undefined,
  second_band: undefined,
  multiplier: undefined,
  tolerance: undefined,
});

const result = computed(() => {
  const bands = Number(`${formState.first_band}${formState.second_band}`);
  return bands * (formState.multiplier || 1);
});

const options = (type: "band" | "multiplier" | "tolerance") => {
  switch (type) {
    case "band":
      return BAND_COLORS.map((band) => {
        return {
          label: band.name,
          value: band.value.band,
        };
      });
    case "multiplier":
      return MULTIPLIER_COLORS.map((item) => {
        return {
          label: item.name,
          value: item.value.multiplier,
        };
      });
    case "tolerance":
      return TOLERANCE_COLORS.map((item) => {
        return {
          label: item.name,
          value: item.value.tolerance,
        };
      });

    default:
      return [];
  }
};
</script>

<template>
  <div>
    <TSelect
      v-model="formState.first_band"
      label="Primera banda"
      :options="options('band')"
    />
    <TSelect
      v-model="formState.second_band"
      label="Segunda banda"
      :options="options('band')"
    />
    <TSelect
      v-model="formState.multiplier"
      label="Multiplicador"
      :options="options('multiplier')"
    />
    <TSelect
      v-model="formState.tolerance"
      label="Tolerancia"
      :options="options('tolerance')"
    />
    <TButton> Calcular </TButton>

    <p>Resultado</p>
    <div>
      {{ result }}

      <p>Primera banda: {{ formState.first_band }}</p>
      <p>Segunda banda: {{ formState.second_band }}</p>
      <p>Multiplicador: {{ formState.multiplier }}</p>
      <p>Tolerancia: {{ formState.tolerance }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
