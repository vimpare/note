function getCtx(selector) {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];

  const componentCtx = ctx.selectComponent(selector); //父组件可以通过 this.selectcomponent 方法获取子组件实例对象

  if (!componentCtx) {
    console.error('无法找到对应的组件，请按文档说明使用组件');
    return null;
  }
  return componentCtx;
}

function Toast(options) {
  const { selector = '#toast' } = options;
  const ctx = getCtx(selector);

  ctx.handleShow(options);
}

Toast.hide = function (selector = '#toast') {
  const ctx = getCtx(selector);

  ctx.handleHide();
};

function Message(options) {
  const { selector = '#message' } = options;
  const ctx = getCtx(selector);

  ctx.handleShow(options);
}

module.exports = {
  $Toast: Toast,
  $Message: Message
};
//学习iveiw base.js
