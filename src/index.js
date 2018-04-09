import Ga from "./scripts/ga.js"

import contactInit from "./scripts/contact.js"
import loginInit from "./scripts/login.js"
import registerInit from "./scripts/register.js"



import Contact from "./view/contact.pug"
import Login from "./view/login.pug"
import Register from "./view/register.pug"
import Index from "./view/index.pug"


import Scss from "./styles/style.scss"

import Video from "./assets/video/nog.mp4"

setTimeout(function() {
    if (~window.location.href.indexOf("login")) {
        loginInit();
    } else if (~window.location.href.indexOf("register")) {
        registerInit();
    } else if (~window.location.href.indexOf("contact")) {
        contactInit();
    }    
}, 300);

