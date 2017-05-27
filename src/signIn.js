import html from './partials/signIn.html'
var verify = {
	regPhoneNo: /^\d{11}$/,
	regPassword: /^\w{6,20}$/,
	phone: function (number) {
		if(!this.regPhoneNo.test(number)){
			return false;
		}
		return true;
	},
	password: function (pass) {
		if(!this.regPassword.test(pass)){
			return false;
		}
		return true;
	}
}
var signIn = {};
signIn.toSignIn = function(param){
	// var container = document.createElement('div');
	// container.innerHTML = html;
	// dom.appendChild(container)
	if(!param.dom){
		return;
	}
	var dom = param.dom;
	$(html).appendTo(dom)
	var phoneNo = $('.fourlink-uc-container .uc-signup .phoneNo')
	var password = $('.fourlink-uc-container .uc-signup .password')
	var signUp = $('.fourlink-uc-container .signup-view .signup-button')
	// var s = document.querySelector('.fourlink-uc-container .signup-view .signup-button')
	signUp.on('click',function(){
		var phoneNoVal = phoneNo.val()
		var passwordVal = password.val()
		if(!verify.phone(phoneNoVal)){
			param.message&&param.message('请输入正确的手机号码')
		}else if (!verify.password(passwordVal)) {

		}
	})
}
export default signIn.toSignIn
