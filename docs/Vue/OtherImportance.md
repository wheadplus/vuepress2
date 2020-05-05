# 其他常见问题

## create 和 mounted 的区别

create 已经挂在vue实例，但未渲染dom元素
mounted 挂在vue实例，dom元素渲染完成

一般在mounted请求数据渲染页面，如果要在create请求数据,赋值时在`nextTick`里使用即可等待dom元素渲染后赋值

## computed 和 watch 的区别

- computed 计算属性，数据缓存 
- watch 监听数据变化

## wacth 深度监听

```vue
watch: {
    obj: {
        // 数据变化时执行的逻辑代码
        handler(newName, oldName) {
            console.log('obj.a changed');
        },
        // 开启深度监听
        deep: true
    }
}
```

```vue
watch: {
    'obj.a': function (newName, oldName) {
       console.log('obj.a changed');
    }
}
```
