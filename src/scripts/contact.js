
import sweetAlert from "sweetalert2"
import {setPhoneMask} from "./common" 
import { validateEmail } from "./common" 
import { postSlack } from "./common"
import i18n from "../i18n.js"



export default function init(){

    var form = document.querySelector("#contact-form");

    setPhoneMask();

    form.addEventListener("submit", function (e) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "") {
            gaContactErrorName(name);
            sweetAlert("Ops!", i18n.t('contact:fill-name'), "error");
        }
        else if (phone === "") {
            gaContactErrorPhone(phone);
            sweetAlert("Ops!", i18n.t('contact:fill-phone'), "error");
        }
        else if (email === "") {
            gaContactErrorEmail(email);
            sweetAlert("Ops!", i18n.t('contact:fill-email'), "error");
        }
        else if (!validateEmail(email)) {
            gaContactErrorInvalidEmail(email);
            sweetAlert("Ops!", i18n.t('contact:invalid-email'), "error");
        }
        else if (message === "") {
            gaContactErrorMessage(message);
            sweetAlert("Ops!", i18n.t('contact:message-for-us'), "error");
        }
        else {
            firebase.auth().signInAnonymously()
                .catch(function (error) {

                    var errorCode = error.code;
                    var errorMessage = error.message;
                    gaContactError(error, email);
                    console.log(error);
                });


            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var userData = {
                        name: name,
                        phone: phone,
                        email: email,
                        message: message
                    };
                    var updates = {};
                    updates['/contact/' + user.uid] = userData;
                    firebase.database().ref().update(updates);
                    gaContactSuccess(email);
                    sweetAlert( i18n.t('contact:message-sent'), i18n.t('contact:thanks') , "success");

                    postSlack(userData, "Nova mensagem para contato!");
                    form.reset();

                } else {

                }

            });
        };
    });

}

