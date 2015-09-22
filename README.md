# waiter.js
等待多个异步任务完成

usage:
```javascript
var counter = new Waiter(2,function(){
	console.log('all done');
});

window.setTimeout(counter,1000);
window.setTimeout(counter,2000);
```