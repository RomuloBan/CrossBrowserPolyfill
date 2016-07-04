'use strict';

// the interface
var CrossBrowserUtils = {
	addListener: null,
	removeListener: null
};


// the implementation
(function(CBUtils) {

	if(typeof window.addEventListener === 'function') {
		CBUtils.addListener = function (el, type, listener) {
		
			el.addEventListener(type, listener, false);
		
		};

		CBUtils.removeListener = function (el, type, listener) {
		
			el.removeEventListener(type, listener, false);
			
		};

	} else if(typeof window.attachEvent === 'function') { //  < IE9
		CBUtils.addListener = function (el, type, listener) {
		
			el.attachEvent('on' + type, listener);
		
		};

		CBUtils.removeListener = function (el, type, listener) {
		
			el.detachEvent('on' + type, listener);
			
		};

	}
	


})(CrossBrowserUtils);

