// ==UserScript==
// @name         巴哈姆特自動開圖
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自動展開巴哈姆特哈拉區文章內的圖片和影片
// @author       Jian-Long Huang
// @match        https://forum.gamer.com.tw/C.php*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var i;
  var attachImgs = document.getElementsByName('attachImgName');
  for (i = 0; i < attachImgs.length; ++i) {
    attachImgs[i].click();
  }

  var attachMovs = document.getElementsByName('attachMovieName');
  for (i = 0; i < attachMovs.length; ++i) {
    attachMovs[i].click();
  }
})();
