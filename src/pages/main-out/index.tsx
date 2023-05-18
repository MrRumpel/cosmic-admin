import { defineComponent } from 'vue';

export default defineComponent({
  name: 'mainOut',
  render() {
    return (
      <div class='fixed flex flex-col justify-center items-center'>
        <div class=''>位于主框架外的页面</div>
      </div>
    );
  },
});
