import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import { ElConfigProvider } from 'element-plus';
import { AppProvider } from './components/core';

export default defineComponent({
  name: 'App',
  components: { ElConfigProvider },
  setup() {
    const zIndex = ref(3000);
    return { zIndex };
  },
  render() {
    const { zIndex } = this;
    return (
      <>
        <el-config-provider z-index={zIndex}>
          <AppProvider>
            <RouterView />
          </AppProvider>
        </el-config-provider>
      </>
    );
  },
});
