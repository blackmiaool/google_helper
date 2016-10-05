// ==UserScript==
// @name         Fix google url
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      https://www.google.com/search*
// @include      https://www.google.com.hk/search*
// @include      https://www.google.com.tw/search*
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