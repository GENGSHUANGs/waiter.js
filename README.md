# waiter.js

等待多个异步任务完成
------

usage:
```javascript
var counter = new Waiter(2,function(){
	console.log('all done');
});

window.setTimeout(counter,1000);
window.setTimeout(counter,2000);
```

检测超时，以保证最低延迟时间
------

usage:
```javascript
var callback = new Waiter.Timerout(function(){
        // @a do something
},3000); 
app.startup(callback);
```
如果app.startup 3s内启动完成，则最少等待3秒后才执行 @a 部分代码；
如果app.startup 超过3s启动，则启动完成后立即执行@a 部分代码