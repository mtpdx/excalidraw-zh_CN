/*! For license information please see 51.a44312bd.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[51],{201:function(e,i,t){"use strict";t.r(i),i.default=async(e,i={},t=null)=>{i.fileName=i.fileName||"Untitled";const a={};i.mimeTypes?(i.mimeTypes.push(e.type),i.mimeTypes.map((e=>{a[e]=i.extensions||[]}))):a[e.type]=i.extensions||[],t=t||await window.showSaveFilePicker({suggestedName:i.fileName,types:[{description:i.description||"",accept:a}]});const s=await t.createWritable();return await s.write(e),await s.close(),t}}}]);
//# sourceMappingURL=51.a44312bd.chunk.js.map