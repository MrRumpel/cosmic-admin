import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import logo from '@/assets/logo.svg';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
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
      </>
    );
  },
});
