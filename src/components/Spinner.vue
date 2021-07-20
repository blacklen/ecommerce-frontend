<template>
<VueSpinner
  :class="[classes, customClass]"
  :size="size || 'medium'"
  :message="message || ''"
  v-bind="$attrs"
/>
</template>

<script>
import VueSpinner from 'vue-simple-spinner';

export default {
  components: { VueSpinner },
  props: ['size', 'message', 'type', 'customClass', 'color'],
  computed: {
    classes() {
      if (this.type === 'inline') {
        return 'spinner--inline';
      }

      return '';
    },
  },
};
</script>
