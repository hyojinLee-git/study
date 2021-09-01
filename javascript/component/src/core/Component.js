export default class Component {
  $target;
  $state;
  $props;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props; //$props 할당
    this.setup();
    this.render();
    this.setEvent(); //constructor에서 한번만 실행
  }
  setup() {}
  mounted() {}
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    //render을 실행할때마다 이벤트를 새로 등록하게 된다.
    //this.setEvent();
    this.mounted(); //render 후 mounted 실행
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = target =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
