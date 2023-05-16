import { defineComponent, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import logo from '@/assets/logo.svg';

export default defineComponent({
  name: 'App',
  setup() {
    const size = ref('small');
    const zIndex = ref(3000);
    return () => (
      <el-config-provider size={size.value} z-index={zIndex.value}>
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
    );
  },
});
