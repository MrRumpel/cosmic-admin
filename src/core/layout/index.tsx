import { defineComponent } from 'vue';

export default defineComponent({
  name: 'layoutComponent',
  setup() {
    return {};
  },
  render() {
    return (
      <el-container>
        <el-aside width='200px'>Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    );
  },
});
