
import sweetAlert from "sweetalert2" 
import {setPhoneMask} from "./common" 
import { postSlack } from "./common"
import { validateEmail } from "./common"
import i18n from "../i18n.js"

export default function init(){

  var form = document.querySelector("#register-form");

  setPhoneMask();

  form.addEventListener("submit", function (e) {

    event.preventDefault();
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var type = document.getElementById("type").value;
    var phone = document.getElementById("phone").value;

    if (name === "") {
      gaRegisterErrorName(name)
      sweetAlert("Ops!",i18n.t('register:fill-name'), "error"); 
    }
    else if (lastName === "") {
      gaRegisterErrorLastName(lastName)
      sweetAlert("Ops!", i18n.t('register:fill-last-name'), "error");
    }
    else if (email === "") {
      gaRegisterErrorEmail(email)
      sweetAlert("Ops!", i18n.t('register:fill-email'), "error");
    }
    else if (phone === "") {
      gaRegisterErrorPhone(phone)
      sweetAlert("Ops!", i18n.t('register:fill-phone'), "error");
    }
    else if (type === "") {
      gaRegisterErrorName(type)
      sweetAlert("Ops!", i18n.t('register:fill-use-type'), "error");
    }
    else {
      firebase.auth().createUserWithEmailAndPassword(email, 'UQCwX986cSZ4nJE')
        .then(function (user) {
          var userData = {
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            type: type
          };


          var updates = {};
          updates['/users/' + user.uid] = userData;

          firebase.database().ref().update(updates);
          gaRegisterSuccess(email);
          sweetAlert(i18n.t('register:thanks'), i18n.t('register:contact-message'), "success");
          postSlack(userData);
          form.reset();

        })
        .catch(function (error) {

          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/email-already-in-use") {
            gaRegisterErrorEmailAlreadyInUse(email)
            sweetAlert("Ops!", i18n.t('register:email-exists'), "error");

          }
          else if (errorCode == "auth/invalid-email") {
            gaRegisterErrorInvalidEmail(email)
            sweetAlert("Ops!", i18n.t('register:invalid-email'), "error");
          }
          else
            gaRegisterError(error.message, email)
          console.log(error);
        });

    };
  });


  function postSlack(userData) {

    var url = "https://engine.nogord.io/api/v1/le/execute/c732b224-4874-4e0f-a647-e6348d0dff3b";

    var text = "Nova conta cadastrada! \nnome: " + userData.name +
      "\nSobrenome: " + userData.lastName +
      "\nEmail: " + userData.email +
      "\nTelefone: " + userData.phone +
      "\nTipo: " + userData.type;

    var instance = axios.create({
      baseURL: url,
      timeout: 10000,
      headers: { 'Authorization': '39a151d1-e946-4d47-9a17-f230ffe2638f' }
    });

    instance.post(url, { text: text })
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
