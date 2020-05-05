module.exports = {
  title: 'hx的博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/sheep.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/sheep.jpg',  // 左上角logo
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: '文档', link: '/Base/HTML/Semantic' },
      { text: 'Drip-UI', link: 'https://wheadplus.github.io/guide/button.html'} ,
      { text: 'github', link: 'https://github.com/wheadplus/vuepress' }
    ],
    sidebar: [
      {
        title: '基础',
        children: [
          ['/Base/HTML/Semantic', 'HTML-语义化'],
          ['/Base/CSS/BFC', 'CSS-BFC'],
          ['/Base/CSS/Center', 'CSS-垂直居中'],
          ['/Base/CSS/Flex', 'CSS-Flex'],
          ['/Base/CSS/BoxModel', 'CSS-盒模型'],
        ]
      },
      // {
      //   title: 'JS',
      //   children: [
      //     ['/JS/DataType', '数据类型'],
      //     ['/JS/Regx', '正则'],
      //     ['/JS/ajax', 'ajax'],
      //     ['/JS/Environment', '执行环境'],
      //     ['/JS/Closure', '闭包'],
      //     ['/JS/Prototype', '原型链'],
      //     ['/JS/Extend', '继承'],
      //     ['/JS/CrossDomain', '同源策略&&跨域'],
      //     ['/JS/Throttled', '函数节流和防抖'],
      //     ['/JS/ArrayUnique', '数组去重'],
      //     ['/JS/EventHub', '事件中转站'],
      //     ['/JS/DeepClone', '手写深拷贝'],
      //     ['/JS/Bind', '手写bind'],
      //     ['/JS/ES6/Summary', 'ES6-常见语法糖'],
      //     ['/JS/ES6/Promise', 'Promise'],
      //     ['/JS/ES6/Async', 'Async'],  
      //   ]
      // },
      // {
      //   title: 'Vue',
      //   collapsable: true,
      //   children: [
      //     ['/Vue/', '响应式原理'],
      //     ['/Vue/OtherImportance', '常见问题'],
      //     ['/Vue/Component', '组件通信'],
      //     ['/Vue/VueRouter', 'VueRouter'],
      //     ['/Vue/VueX', 'VueX'],
      //   ]
      // },
      // {
      //   title: 'Other',
      //   collapsable: true,
      //   children: [
      //     ['/Other/HTTP/', 'HTTP'],
      //     ['/Other/HTTP/StatusCode', '状态码'],
      //     ['/Other/HTTP/Cache', '缓存']
      //   ]
      // },
    ]
  }
};