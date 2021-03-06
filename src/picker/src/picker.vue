<template>
  <div :class='{[`${prefixCls}`]: true,[`${prefixCls}--block`]: isSelect}' @click='handleClick'>
      <div  v-if='isSelect' :class='{
        [`${prefixCls}--input`]: true,
        [`${prefixCls}--placeholder`]: !selectedValue.join(displayAddon),
        [`${prefixCls}--disabled`]: !!disabled,
      }'>
        <input type="hidden" :value='currentValue' />
        {{display || placeholder}}
      </div>
      <div :class='{
          [`${prefixCls}__container`]: true,
          [customCls]: !!customCls,
        }' @click.stop='() => {}'>
      <za-popup
        :visible='currentVisible'
        :get-container="getContainer"
        direction="bottom"
        @maskClick='onMaskClick'>
        <div :class='`${prefixCls}__wrapper`'>
          <div :class='`${prefixCls}__header`'>
            <div :class='`${prefixCls}__cancel`' @click='handleCancel'>{{cancelText}}</div>
            <div :class='`${prefixCls}__title`'>{{title}}</div>
            <div :class='`${prefixCls}__submit`' @click='handleOk'>{{okText}}</div>
          </div>
          <za-picker-view
            :defaultValue='currentValue'
            :valueMember='valueMember'
            :dataSource='dataSource'
            :cols='cols'
            :selectedValue='selectedValue'
            :itemRender='itemRender'
            @change='onChange'
            @transition='onTransition'
          />
        </div>
      </za-popup>
    </div>
  </div>
</template>
<script>
import { reactive, onBeforeMount } from 'vue';
import { arrayTreeFilter, formatToInit, formatBackToObject, isArray, hasChildrenObject } from './utils';
import zaPopup from '../../popup';
import zaPickerView from '../../picker-view';

export default {
  name: 'zaPicker',
  components: {
    zaPopup,
    zaPickerView,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    title: {
      type: String,
      default: '请选择',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    dataSource: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    displayMember: {
      type: String,
      default: 'label',
    },
    valueMember: {
      type: String,
      default: 'value',
    },
    defaultValue: [],
    modelValue: [],
    displayAddon: {
      type: String,
      default: '',
    },
    displayRender: Function,
    customCls: String,
    cols: Number,
    itemRender: {
      type: Function,
      default: data => data.label,
    },
  },
  setup(props) {
    const obj = reactive({
      getContainer: () => document.body,
      isScrolling: false,
      currentValue: [],
      currentVisible: false,
      oldValue: [],
    });

    const getInitValue = () => {
      const { modelValue, defaultValue, isSingleColumn } = props;
      const initValue = modelValue || defaultValue || [];
      // 针对单列数据源{}，转换为[{}]
      if (isSingleColumn) {
        return isArray(initValue) ? initValue : [initValue];
      }
      return initValue;
    };

    onBeforeMount(() => {
      const defaultValue = getInitValue();
      obj.currentValue = defaultValue;
      obj.oldValue = defaultValue;
    });

    return obj;
  },
  computed: {
    isSelect() {
      return this.$options.name === 'zaSelect';
    },
    display() {
      const { currentValue, data } = this;
      if (this.cascade) {
        if (currentValue.length) {
          const treeChildren = arrayTreeFilter(data, (item, level) => {
            return item[this.valueMember] === currentValue[level];
          });
          return this.displayGenerator(treeChildren);
        }
      }
      // FIXED
      const treeChildren2 = data.map((d, index) => {
        if (!isArray(currentValue)) {
          return d.filter(obj => currentValue === obj[this.valueMember])[0];
        }
        if (isArray(currentValue) && currentValue[index]) {
          return d.filter(obj => currentValue[index] === obj[this.valueMember])[0];
        }
        return undefined;
      }).filter(t => !!t);

      return this.displayGenerator(treeChildren2);
    },
    cascade() {
      const { dataSource } = this;
      return dataSource.length && !isArray(dataSource[0]) && hasChildrenObject(dataSource[0]);
    },
    data() {
      const { dataSource } = this;
      // 针对单列数据源[{}]，转换为[[{}]]
      if (this.isSingleColumn) {
        return [this.dataSource];
      }
      return dataSource;
    },
    selectedValue() {
      // eslint-disable-next-line
      return !isArray(this.currentValue) ? [this.currentValue] : this.currentValue;
    },
    isSingleColumn() {
      const { dataSource } = this;
      return dataSource.length && !isArray(dataSource[0]) && !hasChildrenObject(dataSource[0]);
    },
  },
  watch: {
    visible(val, oldVal) { // eslint-disable-line no-unused-vars
      if (oldVal === val) return;
      this.currentVisible = val;
    },
    modelValue(val, oldVal) { // eslint-disable-line no-unused-vars
      this.currentValue = isArray(val) ? val : [val];
    },
  },
  methods: {
    onChange(selected) {
      const { valueMember } = this;
      const value = selected.map(item => item[valueMember]);
      this.currentValue = value;
      this.$emit('change', value);
    },
    handleCancel() {
      const { oldValue } = this;
      this.currentValue = [...oldValue];
      this.$emit('change', oldValue);
      this.toggle();
    },
    handleOk() {
      const { valueMember, cols, data, cascade, isScrolling } = this;
      if (isScrolling) {
        return false;
      }
      const _currentValue = this.getValue();
      this.oldValue = _currentValue;

      let _selectedValue = _currentValue;
      if (!isArray(_selectedValue)) {
        _selectedValue = [_selectedValue];
      }
      const _value = formatBackToObject(data, _selectedValue, cascade, valueMember, cols);
      this.$emit('update:modelValue', _currentValue);
      this.$emit('ok', _value);
      this.toggle();
    },
    getValue() {
      const { valueMember, data, currentValue, cols } = this;
      if (!currentValue || !currentValue.length) {
        if (this.cascade) {
          return formatToInit(data[0], valueMember, cols);
        }
        return data.map(d => (d[0][valueMember]));
      }
      return currentValue;
    },
    displayGenerator(value) {
      const { displayRender, displayMember, displayAddon } = this;
      if (typeof displayRender === 'function') {
        return displayRender(value);
      }
      return value.map((v) => {
        return v && v[displayMember];
      }).join(displayAddon);
    },
    handleClick() {
      if (this.disabled) return;
      this.toggle();
    },
    onMaskClick(e) {
      this.$emit('maskClick', e);
    },
    // 切换显示状态
    toggle() {
      if (this.disabled) {
        return;
      }
      // eslint-disable-next-line
      this.currentVisible = !this.currentVisible;
      this.$emit('update:visible', this.currentVisible);
    },
    onTransition(isScrolling) {
      this.isScrolling = isScrolling;
    },
  },
};
</script>
