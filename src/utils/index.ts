import type { App, Component } from 'vue';

type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};

export type WithInstall<T> = T & {
  install(app: App): void;
} & EventShim;

export type CustomComponent = Component & { displayName?: string };

export const withInstall = <T extends CustomComponent>(component: T, alias?: string) => {
  (component as Record<string, unknown>).install = (app: App) => {
    const componentName = component.name || component.displayName;
    if (!componentName) return;
    app.component(componentName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as WithInstall<T>;
};
