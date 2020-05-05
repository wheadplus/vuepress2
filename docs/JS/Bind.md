
## bind是什么？

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
例子：

```js
var module = {
    x: 12,
    getX() {
        return this.x
    }
}
let fn = module.getX
fn() //undefined 
let bindFn = fn.bind(module)
bindFn() // 12
```
如果自己要实现bind要满足：
- return 一个函数，
- bind的第一个参数作为this
- 其他参数作为新函数的参数

## 实现bind

```js
var slice = Array.prototype.slice //arguments不能直接调用slice，
function.prototype._bind = function () {
  var thatFn  = this, thatThis = arguments[0]
  var args = slice.call(arguments,1) 
  // thatFn 原来的fn ， thatThis原来的this指向， args 原来的fn的参数
  return function() {
    var fnArgs = args.concat(slice.call(arguments))
    return thatFn.apply(thatThis, fnArgs)
  }
}

```
