浏览器单线程， 但是定时器计时/click等事件监听是由浏览器的另一个线程执行,而定时器任务依旧由由单线程执行， 如以下代码1将在10s后打印（当然有bug, 随便写的）：

setTimeout(() => {console.log(1)}); a = (new Date()).getTime(); while(true) {if (new Date().getTime() - a > 10000){break}}


js 的异步实际没有开启多线程， 而是采用任务队列的方式实现队列。
其中值得一提的是JS的Promise: 看上去好像很简单就能实现一个自己的promise，和callback差不多, 但其中有个坑， Promise 的异步不管你resolve的是同步还是异步方法， 都是采用异步的形式驱动， 也就是说当前栈调用结束，下个then 任务才会被执行。

如代码:

new Promise((r, e)=>{console.log('123');r(1)}).then(() => {console.log(1)});  console.log(1234); a = (new Date()).getTime(); while(true) {if (new Date().getTime() - a >10000){console.log('12');break}}

打印顺序是： 123， 1234， 12， 1

所以说如何实现一个Promise?以下是我个人的一点简单的思考， 没有阅读过promise的源码，只能妄加揣测,简化版本:

_promise = function(func) {
    this.catchStack = []; this.thenStack = [];
    func(this.resolve.bind(this), this.reject.bind(this))
}

_promise.prototype.resolve = function(va) { this.resolveValue = va; this.thenStack.forEach(_then =>{setTimeout(() => _then(va), 0)}); this.thenStack = [] }

_promise.prototype.reject = function(va) { this.catchValue = va; this.catchStack.forEach(_then => {setTimeout(() => _then(va), 0)}); this.catchStack = [] }

_promise.prototype.then = function(func) { this.thenStack.push(func); if (this.resolveValue) {this.resolve(this.resolveValue)} }

_promise.prototype.catch = function(func) { this.catchStack.push(func); if (this.resolveValue) {this.resolve(this.resolveValue)} }

此刻调用

new _promise((r, e)=>{console.log('123');r(1)}).then(() => {console.log(1)});  console.log(1234); a = (new Date()).getTime(); while(true) {if (new Date().getTime() - a >10000){console.log('12');break}}

得到的结果和上面一样.
