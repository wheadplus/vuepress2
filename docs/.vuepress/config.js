module.exports = {
  base: '/vuepress2/',
  title: 'hx的博客',
  head: [ // 注入到当前页面的 html <head> 中的标签
    ['link', { rel: 'icon', href: '/sheep.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/sheep.jpg',  // 左上角logo
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: '文档', link: '/base/' },
      { text: 'Drip-UI', link: 'https://wheadplus.github.io/guide/button.html' },
      { text: 'github', link: 'https://github.com/wheadplus/vuepress' }
    ],
    sidebar: [
      {
        title: '基础',
        children: [
          ['/html/Semantic', 'html-语义化'],
          ['/css/BFC', 'css-BFC'],
          ['/css/Center', 'css-垂直居中'],
          ['/css/Flex', 'css-Flex'],
          ['/css/BoxModel', 'css-盒模型'],
        ]
      },
      {
        title: 'js',
        children: [
          ['/js/DataType', '数据类型'],
          ['/js/Regx', '正则'],
          ['/js/ajax', 'ajax'],
          ['/js/Environment', '执行环境'],
          ['/js/Closure', '闭包'],
          ['/js/Prototype', '原型链'],
          ['/js/Extend', '继承'],
          ['/js/CrossDomain', '同源策略&&跨域'],
          ['/js/Throttled', '函数节流和防抖'],
          ['/js/ArrayUnique', '数组去重'],
          ['/js/EventHub', '事件中转站'],
          ['/js/DeepClone', '手写深拷贝'],
          ['/js/Bind', '手写bind'],
          ['/es6/Summary', 'es6-常见语法糖'],
          ['/es6/Promise', 'Promise'],
          ['/es6/Async', 'Async'],  
        ]
      },
      {
        title: 'vue',
        collapsable: true,
        children: [
          ['/haha/', '响应式原理'],
          ['/haha/OtherImportance', '常见问题'],
          ['/haha/Component', '组件通信'],
          ['/haha/VueRouter', 'vueRouter'],
          ['/haha/VueX', 'vueX'],
        ]
      },
      {
        title: 'other',
        collapsable: true,
        children: [
          ['/http/', 'http'],
          ['/http/StatusCode', '状态码'],
          ['/http/Cache', '缓存']
        ]
      },
    ]
  }
};