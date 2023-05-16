import { defineComponent, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import logo from '@/assets/logo.svg';
import { ElConfigProvider } from 'element-plus';

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
          <header>
            <img alt='Vue logo' class='logo' src={logo} width='125' height='125' />
            <div class='wrapper'>
              <HelloWorld msg='You did it!' />

              <nav>
                <RouterLink to='/'>Home</RouterLink>
                <RouterLink to='/about'>About</RouterLink>
              </nav>
            </div>
          </header>
          <RouterView />
        </el-config-provider>
      </>
    );
  },
});
