
import sweetAlert from "sweetalert2" 
import i18n from "../i18n.js"




export default function init(){

    bridge.init("/state_manager/landing_page.js", "sm");

    var sm = bridge.sm;

    document.getElementById('login_form').addEventListener("submit", function (evt) {
        evt.preventDefault();
    });

    document.getElementById('submit-login').addEventListener("click", function () {
        login();
    });

    document.getElementById('change-email').addEventListener("change", function () {
        var email = document.querySelector('[name="email"]').value;
        sm.emit("auth@set_login_email", email);
    });


    document.getElementById('change-password').addEventListener("change", function () {
        var password = document.querySelector('[name="password"]').value;
        sm.emit("auth@set_login_password", password);
    });

    document.getElementById('forgot-password').addEventListener("click", function () {
        forgotMyPassword();
    });


    function login() {
        gaLogin(document.querySelector('[name="email"]').value);
        getUserByEmail();
    }

    sm.on("auth@get_user_by_email:success", function (data) {
        gaLoginGetUserSuccess(document.querySelector('[name="email"]').value)
        doLogin();
    });
    sm.on("auth@get_user_by_email:error", function (data) {debugger
        gaLoginGetUserError(document.querySelector('[name="email"]').value)
        sweetAlert("Ops!", i18n.t('login:email-not-found') , "error");
        hideLoader();
    });

    function getUserByEmail() {
        sm.emit("auth@get_user_by_email");
        showLoader();
    }

    sm.on("auth@login:success", function (data) {
        //transferToken();
        getPermitions();
        gaLoginSuccess(document.querySelector('[name="email"]').value);
    });

    sm.on("auth@login:error", function (data) {

        sweetAlert("Ops!", i18n.t('login:invalid-pwd') , "error");
        hideLoader();
        gaLoginError(document.querySelector('[name="email"]').value);
    });

    function doLogin() {
        sm.emit("auth@login");
    }

    
    function getPermitions() {
        sm.once("auth@get_my_permissions:success", function (data) {
            var hash = "";
             
            
            try{
                var refreshToken = window.localStorage.getItem('refreshToken') ? JSON.parse(window.localStorage.getItem('refreshToken')).value : "";
                var token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).value : "";
                var hash = "#/?t=" + refreshToken + "***" + token
            }catch(e){ }

            if (data.indexOf("LOAD_RULE") > -1)
                window.location.href = "https://app.nogord.io/braas/"+hash;
            else if (data.indexOf("LOAD_DATA_TABLE") > -1)
                window.location.href = "https://app.nogord.io/data/" + hash;
            else if (data.indexOf("LOAD_USER") > -1)
                window.location.href = "https://app.nogord.io/account/" + hash;
            else
                sweetAlert("Ops!", i18n.t('login:module-access') , "error");

            hideLoader();
        });
        sm.emit("auth@get_my_permissions");
    }

    function forgotMyPassword() {

        var inputValue;

        sweetAlert({
            title: i18n.t('login:user-email'),
            type: "warning",
            input: "text",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Email"
        }).then(function (result) {
            
            if (result.value === "") {
                sweetAlert.showValidationError(i18n.t('login:user-email'));
                return false
            }

            inputValue = result.value;

            sm.once("auth@set_login_email:success", function (data) {
                sm.emit("auth@forgot_my_password");
                gaForgotPassword(inputValue);
                showLoader();
            });


            sm.emit("auth@set_login_email", inputValue);

            return true;

        });
            

        sm.once("auth@forgot_my_password:success", function (data) {
            gaForgotPasswordSuccess(inputValue);
            sweetAlert(i18n.t('login:attention'), i18n.t('login:pwd-message'));
            hideLoader();
        });

        sm.once("auth@forgot_my_password:error", function (data) {
            gaForgotPasswordError(inputValue);
            sweetAlert("Ops!", i18n.t('login:email-not-found') , "error");
            hideLoader();
        });

    }

    function showLoader() {
        document.getElementById("loader").removeAttribute("hidden");
    }

    function hideLoader() {
        document.getElementById("loader").setAttribute("hidden", "");
    }
}
