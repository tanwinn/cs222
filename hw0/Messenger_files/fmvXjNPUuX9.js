if (self.CavalryLogger) { CavalryLogger.start_js(["0YMiP"]); }

__d("XUIDialogCloseButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"cancel",label:g._("Close")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("MessengerContextualDialogReact.bs",["bs_curry","ReasonReact.bs","bs_js_null_undefined","MessengerContextualDialog.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){if(a!==void 0)switch(a){case 0:return"center";case 1:return"left";case 2:return"right"}}function a(a,c,d,e,f,h){if(c!==void 0){var i=c;c=function(){return b("bs_js_null_undefined").fromOption(b("bs_curry")._1(i,0))}}else c=function(){return void 0};return b("ReasonReact.bs").wrapJsForReason(b("MessengerContextualDialog.react"),{alignment:b("bs_js_null_undefined").fromOption(g(a)),contextRef:c,onBlur:b("bs_js_null_undefined").fromOption(d),onToggle:e,shown:b("bs_js_null_undefined").fromOption(f)},h)}f.stringOfAlignment=g;f.make=a}),null);
__d("MessengerWaveEntrypoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DIVEBAR:"divebar",THREAD_VIEW:"thread_view",NEW_FRIEND_BUMP:"new_friend_bump",GROUP_NULL_STATE:"group_null_state",CANONICAL_NULL_STATE:"canonical_null_state",PROFILE:"profile"})}),null);