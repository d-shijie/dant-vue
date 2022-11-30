<template>
  <div class="d-card">
    <div ref="dantCardHeader" class="d-card__header">
      <slot name="header" />
    </div>
    <div class="d-card__content">
      <slot />
    </div>
    <div ref="dantCardMeta" class="d-card__meta">
      <slot name="meta" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, ref, onMounted } from 'vue'
defineProps({
  title: {
    type: String,
    default: ''
  }
})
const dantCardHeader = ref()
const dantCardMeta = ref()
const useHeaderSlot = !!useSlots().header
const useMetaSlot = !!useSlots().meta
onMounted(() => {
  dantCardHeader.value.style.padding = useHeaderSlot ? '20px' : '0px'
  dantCardMeta.value.style.padding = useMetaSlot ? '20px' : '0px'
})

</script>

<style scoped lang="scss">
.d-card {

  background-color: #fff;
  border: 1px solid #e4e7ed;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, .1),-1px -1px 8px rgba(0, 0, 0, .1);
  border-radius: 5px;
  .d-card__header{
     border-bottom: 1px solid #e4e7ed;
  }
  .d-card__meta {
    border-top: 1px solid #e4e7ed;
  }
  .d-card__content{
    padding: 20px ;
  }
}
</style>
