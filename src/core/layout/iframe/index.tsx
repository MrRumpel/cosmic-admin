import { defineComponent, unref, computed } from 'vue';
import { useFrameKeepAlive } from './useFrameKeepAlive';

export default defineComponent({
  name: 'FrameLayout',
  components: { FramePage },
  setup() {
    const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();
    const showFrame = computed(() => unref(getFramePages).length > 0);
    return { getFramePages, hasRenderFrame, showIframe, showFrame };
  },
  render() {
    const { getFramePages, hasRenderFrame, showIframe, showFrame } = this;
    return (
      showFrame && (
        <div>
          {getFramePages.map(
            (frame) =>
              frame.meta.frameSrc &&
              hasRenderFrame(frame.name) && <FramePage v-show={showIframe(frame)} frameSrc={frame.meta.frameSrc} />
          )}
        </div>
      )
    );
  },
});
