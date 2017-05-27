import $ from 'zepto'
import './less/style.less'

import toSignIn from './signIn'

window.UC_COMMON = function UC_COMMON (param) {
	this.valid = false;
	this.config(param);
	if (typeof this === undefined) {
		return new UC_COMMON()
	}
}
var proto = UC_COMMON.prototype;
proto.config = function(param){
	this.valid = true;
}

proto.toSignIn = toSignIn
