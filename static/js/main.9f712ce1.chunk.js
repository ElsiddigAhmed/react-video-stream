(this["webpackJsonpreact-video-stream-example"]=this["webpackJsonpreact-video-stream-example"]||[]).push([[0],{118:function(e,t){},120:function(e,t){},260:function(e,t,o){"use strict";o.r(t);o(94);var n=o(13),r=o.n(n),a=o(91),u=o.n(a),s=o(92),c=o.n(s),i=function(e){return function(e){var t=c.a.MediaPlayer().create();document.addEventListener("DOMContentLoaded",(function(){var o=document.querySelector("#video");t.extend("RequestModifier",(function(){return{modifyRequestHeader:function(t){return t.setRequestHeader(e.requestHeader,e.requestToken),t},modifyRequestURL:function(t){return"".concat(t,"?").concat(e.query)}}}),!0),t.initialize(o,e.remoteUrl,e.autoPlay)}))}({autoPlay:e.autoPlay,remoteUrl:e.remoteUrl,requestHeader:e.options.requestHeader,requestToken:e.options.requestToken,query:e.options.query}),Object(n.createElement)("video",{id:"video",className:e.className,controls:e.controls,style:e.style,contextMenu:e.contextMenu,controlsList:e.controlsList,autoPlay:e.autoPlay,preload:"auto"})},l={requestHeader:"Authorization",requestToken:"access_token"},d=function(){return r.a.createElement("div",null,r.a.createElement(i,{className:"video-class",controls:!0,autoPlay:!0,options:l,remoteUrl:"http://example.com/manifest.mpd"}))};u.a.render(r.a.createElement(d,null),document.getElementById("root"))},93:function(e,t,o){e.exports=o(260)},94:function(e,t,o){}},[[93,1,2]]]);
//# sourceMappingURL=main.9f712ce1.chunk.js.map