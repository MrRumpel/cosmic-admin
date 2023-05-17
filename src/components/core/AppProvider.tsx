import { defineComponent, ref } from 'vue';

const props = {
  prefixCls: { type: String },
};

export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const isMobile = ref(false);
    const isSetState = ref(false);
    return () => slots.default?.();
  },
});
