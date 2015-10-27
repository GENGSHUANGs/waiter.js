(function(root, undefined) {
        'use strict';

        /**
        异步等待 */
        var Waiter = function(length, ready) {
                var count = 0;
                var counter = function() {
                        count++;
                        if (count == length) {
                                ready.apply();
                        }
                };

                var argumentarys = [];
                var buildseqcallback = function(index) {
                        return function() {
                                count++;
                                argumentarys[index] = Array.prototype.slice.call(arguments);
                                if (count == length) {
                                        ready.apply(undefined, argumentarys);
                                }
                        }
                };
                var callbacks = [];
                counter.callback = function(index) {
                        return callbacks[index];
                };
                for (var i = 0; i < length; i++) {
                        callbacks[i] = buildseqcallback(i);
                }
                return counter;
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
                var counter = new Waiter(2, function() {
                        callback.apply(undefined, arguments[0]);
                });
                setTimeout(counter.callback(1), delay);
                return counter.callback(0);
        };

        root.Waiter = Waiter;
})(this);
