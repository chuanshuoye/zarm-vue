import Vue, {
  VueConstructor,
  ComponentOptions
} from 'vue/types';

export interface ZarmComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}

function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  const { name } = this;
  if (name) {
    Vue.component(name, this);
  }
}

// should be transform Vue Functional Class to Vue.$options ComponentOptions
function transformFunctionComponent(ZarmVue: VueConstructor): ZarmComponentOptions {
  const componentOptions: any = new ZarmVue().$options;
  if (!componentOptions) {
    throw new Error(`this is not vue component class...`);
  }
  componentOptions.install = install;
  return componentOptions;
}

export default transformFunctionComponent;