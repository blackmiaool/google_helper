// ==UserScript==
// @name         Fix google url
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.body.addEventListener("click",function(e){
        if(e.target.matches("a[data-href]")){
            e.target.href=e.target.dataset.href;
        }
    });
})();