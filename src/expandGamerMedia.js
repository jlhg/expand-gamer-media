// ==UserScript==
// @name         巴哈姆特自動開圖
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  自動展開巴哈姆特哈拉區文章內的圖片和影片
// @author       Jian-Long Huang
// @match        https://forum.gamer.com.tw/*.php*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var i;
  var attachImgs = document.getElementsByName('attachImgName');
  var attachImg;
  for (i = 0; i < attachImgs.length; ++i) {
    attachImg = attachImgs[i];
    if (attachImg.innerHTML.match('請點選觀看圖片') || attachImg.innerHTML.match('開啟圖片')) {
      attachImg.click();
    }
  }

  var attachMovs = document.getElementsByName('attachMovieName');
  var attachMov;
  for (i = 0; i < attachMovs.length; ++i) {
    attachMov = attachMovs[i];
    if (attachMov.innerHTML.match('請點選觀看影片') || attachMov.innerHTML.match('開啟影片')) {
      attachMov.click();
    }
  }
})();
