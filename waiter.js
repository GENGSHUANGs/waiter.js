(function(root,undefined){
	'use strict' ;

	/**
        异步等待 */
        var Waiter = function(length, ready) {
                var count = 0;
                return function() {
                        count++;
                        if (count == length) {
                                ready();
                        }
                };
        };

        /**
        超时等待期 
        用于：最短等待时间
        usage:
        var callback = new Waiter.Timerout(function(){
                // @a do something
        },3000); 
        app.startup(callback);
        如果app.startup 3s内启动完成，则最少等待3秒后才执行 @a 部分代码
        如果app.startup 超过3s启动，则启动完成后立即执行@a 部分代码
        */
        Waiter.Timerout = function(callback, delay) {
                var counter = new Waiter(2,callback);
                setTimeout(counter,delay);
                return counter;
        };

        root.Waiter = Waiter;
})(this);