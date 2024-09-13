
// ==UserScript==
// @name         panzhi
// @namespace    panzhi
// @version      0.0.1
// @match        https://www.pzds.com/goodsDetails/*
// @run-at       document-end
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==
(function () {
  'use strict';

  const vp_div = document.querySelector('div.introduce-box');
  let vp = null;
  if (vp_div) {
    vp = vp_div.getElementsByTagName("span")[0];
  }
  let text = "N/A";
  const innerPrice = document.querySelector('span.text-F7423F');
  if (vp) {
    const regex = /【皮肤资产价值】(\d+)/;
    const match = vp.innerHTML.match(regex);
    if (match) {
      const vp_number = parseInt(match[1]) / 10;
      text = `皮肤资产价值: ${match[1]};五折:${vp_number * 0.5}元;六折:${vp_number * 0.6}元`;
      innerPrice?.appendChild(document.createTextNode(text));
    } else {
      text = "未找到皮肤资产价值";
    }
  }

})();
