'use strict';

// the interface
var CrossBrowserUtils = {
	addListener: null,
	removeListener: null,
	preventDefault: null,
	stopPropagation: null,
	getEvent: null,
	getTarget: null
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

	CBUtils.preventDefault = function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}

	CBUtils.stopPropagation = function(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}

	CBUtils.getEvent = function(event) {
		return event ? event : window.event;
	}

	CBUtils.getTarget = function(event) {
		return event.target || event.srcElement;
	}

	


})(CrossBrowserUtils);

