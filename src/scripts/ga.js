/*-----------------------------START GA----------------------------------------------*/

(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-105591555-1', 'auto');
ga('send', 'pageview');


// CLICK BUTTONS

window.gaClickButton = function(page,btn){
    ga("send", "event", page, "click", btn);
}


/*-----------------------------LOGIN----------------------------------------------*/


window.gaLogin = function(email) {
    ga("send", "event", "login_page", "login:click", email);
}

window.gaLoginGetUserError = function(email) {
    ga("send", "event", "login_page", "login_get_user:error", email);
}

window.gaLoginGetUserSuccess = function(email) {
    ga("send", "event", "login_page", "login_get_user:success", email);
}

window.gaLoginSuccess = function(email) {
    ga("send", "event", "login_page", "login:success", email);
}

window.gaLoginError = function(email) {
    ga("send", "event", "login_page", "login:error", email);
}

window.gaForgotPassword = function(email) {
    ga("send", "event", "login_page", "forgot_password:click", email);
}

window.gaForgotPassword = function(email) {
    ga("send", "event", "login_page", "forgot_password", email);
}

window.gaForgotPasswordSuccess = function(email) {
    ga("send", "event", "login_page", "forgot_password:success", email);
}

window.gaForgotPasswordError = function(email) {
    ga("send", "event", "login_page", "forgot_password:error", email);
}

/*-----------------------------REGISTER----------------------------------------------*/

window.gaRegisterErrorName = function(name){
    ga("send", "event", "register_page", "register_name:error", name);
}

window.gaRegisterErrorPhone = function(phone){
    ga("send", "event", "register_page", "register_phone:error", phone);
}

window.gaRegisterErrorLastName = function(lastName){
    ga("send", "event", "register_page", "register_name:error", lastName);
}

window.gaRegisterErrorEmail = function(email){
    ga("send", "event", "register_page", "register_name:error", email);
}

window.gaRegisterErrorType = function(type){
    ga("send", "event", "register_page", "register_name:error", type);
}

window.gaRegisterErrorInvalidEmail = function(){
    ga("send", "event", "register_page", "register_invalid_email:error", email);
}

window.gaRegisterErrorEmailAlreadyInUse = function(){
    ga("send", "event", "register_page", "register_Email_already_in_use:error", email);
}


window.gaRegisterError = function(error,email){
    ga("send", "event", "register_page", "register:error_"+error, email);
}


window.gaRegisterSuccess = function(email){
    ga("send", "event", "register_page", "register:success",email);
}

/*-----------------------------CONTACT----------------------------------------------*/

window.gaContactErrorName = function(name){
    ga("send", "event", "contact_page", "contact_name:error", name);
}

window.gaContactErrorEmail = function(email){
    ga("send", "event", "contact_page", "contact_email:error", email);
}

window.gaContactErrorInvalidEmail = function(email){
    ga("send", "event", "contact_page", "contact_invalid_email:error", email);
}

window.gaContactErrorPhone = function(phone){
    ga("send", "event", "contact_page", "contact_phone:error", email);
}

window.gaContactErrorMessage = function(message){
    ga("send", "event", "contact_page", "contact_message:error", message);
}


window.gaContactError = function(error,email){
    ga("send", "event", "contact_page", "contact:error_"+error, email);
}


window.gaContactSuccess = function(email){
    ga("send", "event", "contact_page", "contact:success",email);
}
