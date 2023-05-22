import { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { computed, defineComponent, unref } from 'vue';
import { RouterView } from 'vue-router';
import { useHeaderSetting } from '../hooks/setting/useHeaderSetting';
import { useMenuSetting } from '../hooks/setting/useMenuSetting';
import { useAppInject } from '../hooks/web/useAppInject';
import { useDesign } from '../hooks/web/useDesign';
import { useLockPage } from '../hooks/web/useLockPage';

export default defineComponent({
  name: 'DefaultLayout',
  components: { ElContainer, ElAside, ElHeader, ElMain, ElFooter },
  setup() {
    const { prefixCls } = useDesign('default-layout');
    const { getIsMobile } = useAppInject();
    const { getShowFullHeaderRef } = useHeaderSetting();
    const { getShowSidebar, getIsMixSidebar, getShowMenu } = useMenuSetting();
    // Create a lock screen monitor
    const lockEvents = useLockPage();
    const layoutClass = computed(() => {
      const cls: string[] = ['ant-layout'];
      if (unref(getIsMixSidebar) || unref(getShowMenu)) {
        cls.push('ant-layout-has-sider');
      }
      return cls;
    });
    return {
      getShowFullHeaderRef,
      getShowSidebar,
      prefixCls,
      getIsMobile,
      getIsMixSidebar,
      layoutClass,
      lockEvents,
    };
  },
  render() {
    return (
      <el-container>
        <el-aside width='200px'>Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>
            Main
            <RouterView></RouterView>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    );
  },
});
