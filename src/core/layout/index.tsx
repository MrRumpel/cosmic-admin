import { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'layoutComponent',
  components: { ElContainer, ElAside, ElHeader, ElMain, ElFooter },
  setup() {
    return {};
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
