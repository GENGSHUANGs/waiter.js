(function(root,undefined){
	'use strict' ;

	/**
        异步等待 */
        root.Waiter = function(length, ready) {
                var count = 0;
                return function() {
                        count++;
                        if (count == length) {
                                ready();
                        }
                };
        };
})(this);