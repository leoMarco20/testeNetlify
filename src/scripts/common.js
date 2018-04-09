
import VMasker from "vanilla-masker"

export{
    setPhoneMask,
    validateEmail,
    postSlack
}


function setPhoneMask() {
    function inputHandler(masks, max, event) {
        var c = event.target;
        var v = c.value.replace(/\D/g, '');
        var m = c.value.length > max ? 1 : 0;
        VMasker(c).unMask();
        VMasker(c).maskPattern(masks[m]);
        c.value = VMasker.toPattern(v, masks[m]);
    }

    var telMask = ['+99 (99) 9999-9999', '+99 (99) 99999-9999'];
    var tel = document.getElementById("phone");
    VMasker(tel).maskPattern(telMask[0]);
    tel.addEventListener('input', inputHandler.bind(undefined, telMask, 18), false);
}


 function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    
    return (false)
}



 function postSlack(userData,msgSlack) {

    var url = "https://engine.nogord.io/api/v1/le/execute/c732b224-4874-4e0f-a647-e6348d0dff3b";

    var text = msgSlack +" \n\nNome: " + userData.name +
        "\nTelefone: " + userData.phone +
        "\nEmail: " + userData.email +
        "\nMensagem: " + userData.message;

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