# waiter.js


######等待指定数量的异步任务结束

```javascript
var counter = new Waiter(2,function(){
	console.log('all done');
});

window.setTimeout(counter,1000);
window.setTimeout(counter,2000);
```


######等待指定数量的异步任务结束并传递相应参数 `argsarys = [0:[...],1:[...]] `

```javascript
var counter = new Waiter(2,function(argsarys){
	console.log('第一个异步任务返回值:',argsarys[0]); // ['abc',1]
	console.log('第二个异步任务返回值:'); // ['text']
	console.log('all done');
});
window.setTimeout(function(){
	counter.callback(0)('abc',1); // callback(0)指定传递回的参数索引位置
},1000);
window.setTimeout(function(){
	coutner.callback(1)('text');
},2000);
```


######检测超时，以保证最低延迟时间

>场景1：处理在 web app 中使用了加载提醒的时候，因为网络相应太快而导致了加载提醒显示后又迅速消失导致的视觉闪屏

>场景2：自由发挥吧...

```javascript
var callback = new Waiter.Timerout(function(){
        // @a do something
},3000); 
app.startup(callback);
```

>如果app.startup 3s内启动完成，则最少等待3秒后才执行 @a 部分代码；
>如果app.startup 超过3s启动，则启动完成后立即执行@a 部分代码


######检测超时，以保证最低延迟时间，并传递相应参数

```javascript
var callback = new Waiter.Timerout(function(appname,startupin){
	console.log('appname:%s , startup in %d ms',appname,startupin);
},3000);

var begin = new Date().getTime();
app.startup(function(){
	callback('Test App',new Date().getTime() - begin);
});
```