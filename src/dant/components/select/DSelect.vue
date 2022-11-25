<template>
  <div class="d-select">
    <label for="d-select">{{ label }}
      <select id="d-select">
        <option value="1" />
        <option value="2" />
        <option value="3" />
        <option value="4" />
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.d-select {
  margin: 5px;
  display: flex;
  align-items: center;
  #d-select {
    min-width: 150px;
    height: 34px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    appearance:none;

  }
}
</style>
