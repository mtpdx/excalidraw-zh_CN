(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[37],{207:function(e,t,r){"use strict";r.r(t),r.d(t,"getTEXtChunk",(function(){return x})),r.d(t,"encodePngMetadata",(function(){return h})),r.d(t,"decodePngMetadata",(function(){return b})),r.d(t,"encodeSvgMetadata",(function(){return v})),r.d(t,"decodeSvgMetadata",(function(){return A}));var n=r(149),a=r.n(n),o=r(153),c=r.n(o),d=r(156),i=r.n(d),s=r(158);const w=e=>new Promise(((t,r)=>{const n="string"===typeof e?new Blob([(new TextEncoder).encode(e)]):new Blob([e]),a=new FileReader;a.onload=e=>{if(!e.target||"string"!==typeof e.target.result)return r(new Error("couldn't convert to byte string"));t(e.target.result)},a.readAsBinaryString(n)})),l=e=>{const t=new ArrayBuffer(e.length),r=new Uint8Array(t);for(let n=0,a=e.length;n<a;n++)r[n]=e.charCodeAt(n);return t},u=e=>new TextDecoder("utf-8").decode(l(e)),y=async({text:e,compress:t})=>{let r;if(!1!==t)try{r=await w(Object(s.deflate)(e))}catch(n){console.error("encode: cannot deflate",n)}return{version:"1",encoding:"bstring",compressed:!!r,encoded:r||await w(e)}},f=async e=>{let t;switch(e.encoding){case"bstring":t=e.compressed?e.encoded:await u(e.encoded);break;default:throw new Error('decode: unknown encoding "'.concat(e.encoding,'"'))}return e.compressed?Object(s.inflate)(new Uint8Array(l(t)),{to:"string"}):t};var p=r(1);const g=e=>"arrayBuffer"in e?e.arrayBuffer():new Promise(((t,r)=>{const n=new FileReader;n.onload=e=>{var n;if(!(null===(n=e.target)||void 0===n?void 0:n.result))return r(new Error("couldn't convert blob to ArrayBuffer"));t(e.target.result)},n.readAsArrayBuffer(e)})),x=async e=>{const t=a()(new Uint8Array(await g(e))).find((e=>"tEXt"===e.name));return t?c.a.decode(t.data):null},h=async({blob:e,metadata:t})=>{const r=a()(new Uint8Array(await g(e))),n=c.a.encode(p.s.excalidraw,JSON.stringify(await y({text:t,compress:!0})));return r.splice(-1,0,n),new Blob([i()(r)],{type:"image/png"})},b=async e=>{const t=await x(e);if((null===t||void 0===t?void 0:t.keyword)===p.s.excalidraw)try{const e=JSON.parse(t.text);if(!("encoded"in e)){if("type"in e&&"excalidraw"===e.type)return t.text;throw new Error("FAILED")}return await f(e)}catch(r){throw console.error(r),new Error("FAILED")}throw new Error("INVALID")},v=async({text:e})=>{const t=await(async(e,t=!1)=>t?btoa(e):btoa(await w(e)))(JSON.stringify(await y({text:e})),!0);let r="";return r+="\x3c!-- payload-type:".concat(p.s.excalidraw," --\x3e"),r+="\x3c!-- payload-version:2 --\x3e",r+="\x3c!-- payload-start --\x3e",r+=t,r+="\x3c!-- payload-end --\x3e",r},A=async({svg:e})=>{if(e.includes("payload-type:".concat(p.s.excalidraw))){const r=e.match(/<!-- payload-start -->(.+?)<!-- payload-end -->/);if(!r)throw new Error("INVALID");const n=e.match(/<!-- payload-version:(\d+) -->/),a="1"!==((null===n||void 0===n?void 0:n[1])||"1");try{const e=await(async(e,t=!1)=>t?atob(e):u(atob(e)))(r[1],a),t=JSON.parse(e);if(!("encoded"in t)){if("type"in t&&"excalidraw"===t.type)return e;throw new Error("FAILED")}return await f(t)}catch(t){throw console.error(t),new Error("FAILED")}}throw new Error("INVALID")}}}]);
//# sourceMappingURL=image.7c954eb1.chunk.js.map