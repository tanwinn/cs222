if (self.CavalryLogger) { CavalryLogger.start_js(["Ukj0G"]); }

__d("FantaTypeFileUploaderFile.bs",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(a.name===b.name&&a.type===b.type&&a.lastModified===b.lastModified)return a.size===b.size;else return!1}f.equal=a}),null);
__d("MercuryStageFilePreviewGenericItemReact.bs",["cx","ix","fbt","React","ImageReact.bs","ReasonReact.bs","ImageBlockReact.bs"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=h("359148"),k=h("359147"),l=h("359146"),m=h("359145");function n(a){a=a.split(".");a=a.pop();if(a!==void 0)return a.toUpperCase();else return i._("UNKOWN")}var o=b("ReasonReact.bs").statelessComponent("MercuryStageFilePreviewGenericItem");function a(a,c,d,e,f){return[o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],function(){var f=a.startsWith("video/")?d?j:k:d?l:m,g=b("React").createElement("div",{className:"__6k _4zma"+(d?" _339l":"")+(d?"":" _339m")},n(c)),h=b("React").createElement("div",{className:"__6l _2-x4"},c),i=d?"44px":"60px";return b("ReasonReact.bs").element(void 0,void 0,b("ImageBlockReact.bs").make(void 0,void 0,void 0,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("ImageReact.bs").make(void 0,void 0,void 0,void 0,f,void 0,void 0,void 0,{backgroundColor:e,height:i,width:i},[])),b("React").createElement("div",{className:"__6j _2-x5"},g,h)]))},o[9],o[10],o[11],o[12]]}f.movSrcSmall=j;f.movSrcMedium=k;f.docSrcSmall=l;f.docSrcMedium=m;f.getTitle=n;f.component=o;f.make=a}),null);
__d("MercuryStageFilePreviewItemReact.bs",["cx","fbt","bs_curry","React","cssURL","ReasonReact.bs","bs_js_primitive","FantaTypeFileUploaderFile.bs","MercuryStageFilePreviewGenericItemReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c){var d=c.filter(function(c){return b("FantaTypeFileUploaderFile.bs").equal(a,c[0])});if(d.length!==0)return d[0][1];else{d=window.URL.createObjectURL(a);d=d==null?void 0:b("bs_js_primitive").some(d);c.push([a,d]);return d}}var j=b("ReasonReact.bs").reducerComponent("mercuryStageFilePreviewItem");function a(a,c,d,e,f,g,k){__p&&__p();var l=function(c,a){c.preventDefault();return b("bs_curry")._2(g,e,f)};return[j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],function(e){var f=a.type,g=i(a,e[1][0]),j,k=0;if(g!==void 0&&f.startsWith("image/")){var m=c?"54px":"108px";j=b("React").createElement("div",{style:{backgroundImage:b("cssURL")(g),backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",height:m,width:m,backgroundSize:"cover"}})}else k=1;k===1&&(j=b("ReasonReact.bs").element(void 0,void 0,b("MercuryStageFilePreviewGenericItemReact.bs").make(f,a.name,c,d,[])));g=h._("Remove attachment");return b("React").createElement(b("React").Fragment,void 0,j,b("React").createElement("button",{className:(c?"_339l":"")+(c?"":" _339m")+" _61ns",title:g,label:g,onClick:b("bs_curry")._1(e[0],l)}))},function(){return[[]]},j[10],function(a,b){return 0},j[12]]}f.createObjectURLOrUseFromCache=i;f.component=j;f.make=a}),null);
__d("MercuryStageFilePreviewReact.bs",["cx","bs_curry","React","bs_caml_format","ReasonReact.bs","MercuryStageFilePreviewItemReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){a=a.split("_").pop();if(a!==void 0)return b("bs_caml_format").caml_int_of_string(a);else return 0}function i(){return 0}var j=b("ReasonReact.bs").statelessComponentWithRetainedProps("mercuryStageFilePreview");function k(a,c,d,e,f,g,i){__p&&__p();return[j[0],j[1],j[2],j[3],function(){return b("bs_curry")._1(g,0)},j[5],j[6],function(a){var b=a[1][2];a=a[0][2];if(a[0].size!==b[0].size||a[2]!==b[2])return!0;else return a[1]!==b[1]},function(){__p&&__p();var g=[],i=a.size,j=[0];a.sort(function(a,b){return h(a.id)-h(b.id)|0}).forEach(function(h,a,k){a=h.file;k=a.type;h=h.id;g.push(b("React").createElement("div",{key:h,className:"_2azv"+(j[0]===(i-1|0)?" _6ddc":"")+(k.startsWith("image/")?"":" _2zl5")},b("ReasonReact.bs").element(void 0,void 0,b("MercuryStageFilePreviewItemReact.bs").make(a,c,d,e,h,f,[]))));j[0]=j[0]+1|0;return 0});return b("React").createElement("div",{className:"_2a-p _3x73"+(c?" _339l":"")+(c?"":" _339m")},g)},j[9],[a,d,e],j[11],j[12]]}function l(a){if(a==null)return i;else return a}a=b("ReasonReact.bs").wrapReasonForJs(j,function(a){return k(a.files,a.small,a.threadCustomColor,a.threadID,a.onClick,l(a.onResize),[])});f.getSequenceID=h;f.emptyFunction=i;f.component=j;f.make=k;f.getOnResize=l;f.jsComponent=a}),null);
__d("MercuryStageFilePreviewReactComponent",["MercuryStageFilePreviewReact.bs"],(function(a,b,c,d,e,f){a=b("MercuryStageFilePreviewReact.bs").jsComponent;e.exports=a}),null);